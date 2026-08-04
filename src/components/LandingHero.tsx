'use client'

import Image from 'next/image'
import Link from 'next/link'
import { REGISTER_URL } from '@/lib/site'

export default function LandingHero() {
  return (
    <section className="relative pt-20 min-h-[72svh] sm:min-h-[76svh] flex flex-col text-white overflow-hidden pb-8">
      <div className="absolute inset-x-0 top-[-5rem] bottom-0">
        <Image
          src="/images/hero-header.png"
          alt="Terras van Apollon Kitchen & Bar met houten tafels en hanglampen"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden />
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 text-center py-8">
        <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold leading-tight tracking-tight text-accent">
          Meer reserveringen. Minder gedoe.
        </h1>
        <p className="mt-4 sm:mt-5 text-lg sm:text-xl text-white/90 font-medium max-w-2xl leading-snug">
          Gasten reserveren. Jij houdt het overzicht.
        </p>
        <p className="mt-3 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
          Bevestigingen, tijdsloten en overzicht in één admin.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={REGISTER_URL}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-white shadow-home-btn hover:bg-accent/90 transition-colors"
          >
            Start gratis proefperiode
          </Link>
          <Link
            href="/#functies"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-white/80 px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Bekijk functies
          </Link>
        </div>
        <p className="mt-7 sm:mt-8 text-base sm:text-lg md:text-xl font-semibold text-accent max-w-2xl leading-snug drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]">
          (Uitgeroepen tot meest professioneel tafel reserverings systeem van 2026)
        </p>
      </div>
    </section>
  )
}
