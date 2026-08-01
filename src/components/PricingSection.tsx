'use client'

import { useState } from 'react'
import Link from 'next/link'
import { REGISTER_URL } from '@/lib/site'
import { TABLEVYSION_MONTHLY, displayPrice } from '@/lib/pricing'

const planFeatures = [
  'Online & telefonisch reserveren',
  'Publieke reserveringspagina voor gasten',
  'Admin: bevestigen, wijzigen en annuleren',
  'Bevestigingen per e-mail',
  'WhatsApp-communicatie naar gasten',
  'Openingstijden & tijdsloten',
  'Optioneel voorschot via Stripe',
  'Website van je zaak (profiel & content)',
  'Meertalig voor gasten',
  'E-mail & telefoon support',
]

function FeatureCheck({ label }: { label: string }) {
  return (
    <li className="flex items-start gap-3">
      <svg
        className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-sm leading-snug text-gray-600 sm:text-base">{label}</span>
    </li>
  )
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const price = displayPrice(TABLEVYSION_MONTHLY, isYearly)
  const periodLabel = isYearly ? '/jaar' : '/maand'

  return (
    <section id="prijzen" className="relative scroll-mt-24 overflow-hidden bg-[#e3e3e3] py-20 sm:py-28 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-14">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Simpele, transparante prijzen</h2>
          <p className="text-lg text-gray-600 sm:text-xl">Alles voor tafelreserveringen. Geen verrassingen.</p>
          <p className="mt-3 text-sm font-medium text-gray-500 sm:text-base">
            14 dagen gratis proberen · Geen creditcard nodig · Maandelijks opzegbaar
          </p>
          <p className="mt-2 text-xs font-medium text-gray-600 sm:text-sm">Alle prijzen excl. BTW.</p>
        </div>

        <div className="mb-12 flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-gray-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all sm:text-base ${
                !isYearly ? 'bg-gray-900 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Maandelijks
            </button>
            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={`relative rounded-full py-3 pl-6 pr-8 text-sm font-semibold transition-all sm:text-base ${
                isYearly ? 'bg-gray-900 text-white shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Jaarlijks
              <span className="absolute -right-1 -top-1.5 rounded-full bg-gray-700 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-white">
                -10%
              </span>
            </button>
          </div>
          {isYearly && (
            <p className="mt-3 text-sm text-gray-600">Je bespaart 10% met een jaarabonnement.</p>
          )}
        </div>

        <div className="mx-auto max-w-lg">
          <div className="overflow-hidden rounded-2xl border-2 border-gray-900 bg-white shadow-md transition-shadow hover:shadow-lg">
            <div className="p-6 lg:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-accent">TableVysion</h3>
              </div>
              <div className="mb-2 flex items-baseline">
                <span className="text-4xl font-bold tabular-nums text-gray-900 sm:text-5xl">€{price}</span>
                <span className="ml-2 font-medium text-accent">{periodLabel}</span>
              </div>
              {isYearly && (
                <p className="mb-4 text-sm font-medium text-accent">
                  = €{Math.round(TABLEVYSION_MONTHLY * 0.9)}/maand
                </p>
              )}
              <ul className="mb-8 space-y-3">
                {planFeatures.map((f) => (
                  <FeatureCheck key={f} label={f} />
                ))}
              </ul>
              <Link
                href={REGISTER_URL}
                className="block w-full rounded-full bg-accent py-3.5 text-center font-semibold text-white transition-colors hover:bg-accent/90"
              >
                Start gratis proefperiode
              </Link>
              <p className="mt-3 text-center text-sm font-medium text-accent">Maandelijks opzegbaar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
