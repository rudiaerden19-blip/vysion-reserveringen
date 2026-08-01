'use client'

import { useState } from 'react'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import { LOGIN_PATH, PRODUCT_LINE, SITE_NAME } from '@/lib/site'
import { internalShopPathToTenantHostPath } from '@/lib/redirect-after-register'

type FormState = {
  businessName: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

export default function RegistreerPage() {
  const [form, setForm] = useState<FormState>({
    businessName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!form.businessName.trim()) {
      setError('Vul bedrijfsnaam in.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError('Vul een geldig e-mailadres in.')
      return
    }
    if (!form.phone.trim()) {
      setError('Vul telefoonnummer in.')
      return
    }
    if (form.password.length < 8) {
      setError('Wachtwoord: minimaal 8 tekens.')
      return
    }
    if (form.password !== form.confirmPassword) {
      setError('Wachtwoorden komen niet overeen.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName: form.businessName.trim(),
          email: form.email.trim().toLowerCase(),
          phone: form.phone.trim(),
          password: form.password,
          productLine: PRODUCT_LINE,
        }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(typeof data.error === 'string' ? data.error : 'Registratie mislukt.')
        setLoading(false)
        return
      }

      const slug = data.tenant?.tenant_slug
      if (!slug) {
        setError('Account aangemaakt maar doorverwijzing mislukt. Log in via Vysion.')
        setLoading(false)
        return
      }

      const path =
        typeof data.postSignupAdminPath === 'string' && data.postSignupAdminPath
          ? data.postSignupAdminPath
          : `/shop/${slug}/welkom`

      const hostPath = internalShopPathToTenantHostPath(path, slug)
      window.location.href = `https://${slug}.ordervysion.com${hostPath}`
    } catch {
      setError('Registratie mislukt. Probeer later opnieuw.')
      setLoading(false)
    }
  }

  return (
    <>
      <SiteNav />
      <main className="min-h-screen bg-[#e8e8e8] pt-24 pb-16 px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-accent">{SITE_NAME}</p>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">Start je gratis proefperiode</h1>
            <p className="text-sm text-gray-600 mt-2">Alleen reserveringsmodules — geen volledige kassa nodig.</p>
          </div>

          <div className="rounded-xl border-2 border-accent bg-white p-4 mb-6 text-left">
            <p className="font-bold text-gray-900">Restaurant reservaties</p>
            <p className="text-sm text-gray-600 mt-1">Tafels en reserveringen beheren</p>
          </div>

          <form onSubmit={submit} className="space-y-4 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            {[
              { id: 'businessName', label: 'Bedrijfsnaam', type: 'text', auto: 'organization' },
              { id: 'email', label: 'E-mailadres', type: 'email', auto: 'email' },
              { id: 'phone', label: 'Telefoonnummer', type: 'tel', auto: 'tel' },
              { id: 'password', label: 'Wachtwoord', type: 'password', auto: 'new-password' },
              { id: 'confirmPassword', label: 'Bevestig wachtwoord', type: 'password', auto: 'new-password' },
            ].map((field) => (
              <div key={field.id}>
                <label htmlFor={field.id} className="block text-sm font-medium text-gray-800 mb-1">
                  {field.label} <span className="text-red-500">*</span>
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  autoComplete={field.auto}
                  required
                  value={form[field.id as keyof FormState]}
                  onChange={onChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-accent focus:ring-2 focus:ring-accent/25 outline-none"
                />
              </div>
            ))}

            {error && (
              <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-accent hover:bg-accent/90 disabled:opacity-60 text-white font-semibold py-4 transition-colors"
            >
              {loading ? 'Bezig…' : 'Account aanmaken →'}
            </button>

            <p className="text-center text-sm text-gray-600">
              Al een account?{' '}
              <Link href={LOGIN_PATH} className="text-accent font-medium hover:underline">
                Inloggen
              </Link>
            </p>
          </form>

          <p className="text-center mt-6">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
              ← Terug naar home
            </Link>
          </p>
        </div>
      </main>
    </>
  )
}
