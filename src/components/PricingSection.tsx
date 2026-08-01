'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MAIN_PLATFORM_URL, REGISTER_URL } from '@/lib/site'
import {
  TABLEVYSION_PRO_MONTHLY,
  TABLEVYSION_STARTER_MONTHLY,
  displayPrice,
} from '@/lib/pricing'

const starterFeatures = [
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

const proFeatures = [
  'Alles uit TableVysion, plus:',
  'Tafelplattegrond & tafelbeheer',
  'No-show bescherming & voorschotregels',
  'Reserveringsrapporten',
  'SEO & vindbaarheid',
  'Reviews op je website',
  'Promoties & marketingtools',
  'Uitgebreidere instellingen & shifts',
  'Prioriteit bij support',
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

  const starterPrice = displayPrice(TABLEVYSION_STARTER_MONTHLY, isYearly)
  const proPrice = displayPrice(TABLEVYSION_PRO_MONTHLY, isYearly)
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

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:gap-8">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
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
                <span className="text-4xl font-bold tabular-nums text-gray-900 sm:text-5xl">€{starterPrice}</span>
                <span className="ml-2 font-medium text-accent">{periodLabel}</span>
              </div>
              {isYearly && (
                <p className="mb-4 text-sm font-medium text-accent">
                  = €{Math.round(TABLEVYSION_STARTER_MONTHLY * 0.9)}/maand
                </p>
              )}
              <ul className="mb-8 space-y-3">
                {starterFeatures.map((f) => (
                  <FeatureCheck key={f} label={f} />
                ))}
              </ul>
              <Link
                href={REGISTER_URL}
                className="block w-full rounded-full border-2 border-gray-900 py-3.5 text-center font-semibold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white"
              >
                Start gratis proefperiode
              </Link>
              <p className="mt-3 text-center text-sm font-medium text-accent">Maandelijks opzegbaar</p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border-2 border-gray-900 bg-white shadow-md transition-shadow hover:shadow-lg">
            <div className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
              Populair
            </div>
            <div className="p-6 lg:p-8">
              <div className="mb-5 flex items-center gap-3 pr-16">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-accent">TableVysion Premium</h3>
              </div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="text-lg text-gray-400 line-through">
                  €{isYearly ? Math.round(129 * 12 * 0.9) : 129}/maand
                </span>
                <span className="rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">-23%</span>
              </div>
              <div className="mb-2 flex items-baseline">
                <span className="text-4xl font-bold tabular-nums text-gray-900 sm:text-5xl">€{proPrice}</span>
                <span className="ml-2 font-medium text-accent">{periodLabel}</span>
              </div>
              {isYearly && (
                <p className="mb-4 text-sm font-medium text-accent">
                  = €{Math.round(TABLEVYSION_PRO_MONTHLY * 0.9)}/maand
                </p>
              )}
              <ul className="mb-8 space-y-3">
                {proFeatures.map((f) => (
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

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-gray-600">
          Volledige kassa, online bestellen of hardware?{' '}
          <a href={`${MAIN_PLATFORM_URL}/prijzen`} className="font-semibold text-accent hover:underline">
            Bekijk alle Vysion-prijzen
          </a>
        </p>
      </div>
    </section>
  )
}
