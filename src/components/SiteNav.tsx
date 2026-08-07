'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LOGIN_PATH, MAIN_PLATFORM_URL, OFFICIAL_SITE_URL, ORDER_SITE_URL, REGISTER_URL, SITE_NAME } from '@/lib/site'

const productLinks = [
  { href: OFFICIAL_SITE_URL, label: 'Reserveringen' },
  { href: MAIN_PLATFORM_URL, label: 'Kassa' },
  { href: ORDER_SITE_URL, label: 'Online bestelplatform' },
] as const

const localLinks = [
  { href: '/#prijzen', label: 'Prijzen' },
  { href: '/#faq', label: 'FAQ' },
] as const

const navLinkClass =
  'inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-gray-300 hover:text-white transition-colors'

export default function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-accent">
            {SITE_NAME}
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {productLinks.map((l) => (
              <a key={l.href} href={l.href} className={navLinkClass}>
                {l.label}
              </a>
            ))}
            {localLinks.map((l) => (
              <Link key={l.href} href={l.href} className={navLinkClass}>
                {l.label}
              </Link>
            ))}
            <Link href={LOGIN_PATH} className={navLinkClass}>
              Inloggen
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href={REGISTER_URL}
              className="inline-flex items-center justify-center rounded-md bg-accent hover:bg-accent/90 text-white text-sm font-semibold px-4 py-2.5 shadow-home-btn transition-colors"
            >
              Start gratis
            </Link>
          </div>

          <button
            type="button"
            className="md:hidden text-white p-2"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-1">
            {productLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block py-3 px-3 rounded-lg text-white font-medium hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            {localLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block py-3 px-3 rounded-lg text-white font-medium hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={LOGIN_PATH}
              className="block py-3 px-3 rounded-lg text-white font-medium hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              Inloggen
            </Link>
            <Link
              href={REGISTER_URL}
              className="block mt-2 text-center rounded-full bg-accent text-white font-semibold py-3 shadow-home-btn"
              onClick={() => setOpen(false)}
            >
              Start gratis
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
