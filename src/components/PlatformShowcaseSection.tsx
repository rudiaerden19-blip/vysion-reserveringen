'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

const screenshots = [
  {
    src: '/images/platform/plattegrond.png',
    alt: 'TableVysion tafelplattegrond met live bezetting',
    label: 'Plattegrond',
  },
  {
    src: '/images/platform/nieuwe-reservatie.png',
    alt: 'Nieuwe reservatie aanmaken in TableVysion',
    label: 'Nieuwe reservatie',
  },
  {
    src: '/images/platform/tafels.png',
    alt: 'Tafeloverzicht en tijdsloten in TableVysion',
    label: 'Tafels & planning',
  },
  {
    src: '/images/platform/rapporten.png',
    alt: 'Rapporten en walk-in in TableVysion',
    label: 'Rapporten',
  },
  {
    src: '/images/platform/contacten.png',
    alt: 'Gastencontacten en VIP in TableVysion',
    label: 'Contacten',
  },
] as const

function NavArrow({
  direction,
  onClick,
  label,
}: {
  direction: 'prev' | 'next'
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 shadow-home-float transition hover:border-accent/40 hover:bg-accent/5 hover:text-accent sm:h-14 sm:w-14"
    >
      <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        {direction === 'prev' ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  )
}

export default function PlatformShowcaseSection() {
  const [index, setIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const total = screenshots.length
  const current = screenshots[index]

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total)
  }, [total])

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total)
  }, [total])

  useEffect(() => {
    if (!lightboxOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [lightboxOpen, goPrev, goNext])

  return (
    <section
      id="platform"
      className="scroll-mt-24 border-y border-gray-200/80 bg-gradient-to-b from-white via-[#f3f3f3] to-[#e8e8e8] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Platform</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Zo werkt je reserveringsplatform
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 sm:text-xl">
            Plattegrond, tafels, rapporten en gasten — alles overzichtelijk in één omgeving.
          </p>
        </div>

        <div className="mx-auto flex max-w-6xl items-center gap-3 sm:gap-5">
          <NavArrow direction="prev" onClick={goPrev} label="Vorige afbeelding" />

          <figure className="min-w-0 flex-1">
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              className="group block w-full cursor-zoom-in text-left"
              aria-label={`${current.label} vergroten`}
            >
              <div className="overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-home-card ring-1 ring-black/5 transition group-hover:ring-accent/30">
                <div className="relative aspect-[16/9] w-full bg-gray-100 sm:aspect-[16/10] lg:min-h-[420px] lg:aspect-auto lg:h-[min(52vh,520px)]">
                  <Image
                    key={current.src}
                    src={current.src}
                    alt={current.alt}
                    fill
                    className="object-contain object-center p-1 sm:p-2"
                    sizes="(max-width: 1024px) 90vw, 960px"
                    priority={index === 0}
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 border-t border-gray-100 px-5 py-4 sm:px-6 sm:py-5">
                  <span className="text-base font-semibold text-gray-900 sm:text-lg">{current.label}</span>
                  <span className="text-sm text-gray-500">
                    {index + 1} / {total} · Klik voor volledig scherm
                  </span>
                </figcaption>
              </div>
            </button>
          </figure>

          <NavArrow direction="next" onClick={goNext} label="Volgende afbeelding" />
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 p-2 sm:p-3"
          role="dialog"
          aria-modal="true"
          aria-label={current.label}
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="mb-2 flex shrink-0 items-center justify-between gap-3 px-1 text-white sm:mb-3"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="truncate text-sm font-semibold sm:text-base">
              {current.label}{' '}
              <span className="font-normal text-white/60">
                ({index + 1}/{total})
              </span>
            </p>
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-white/10 px-4 text-sm font-semibold transition hover:bg-white/20"
            >
              Sluiten
            </button>
          </div>

          <div
            className="relative min-h-0 flex-1 w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 px-12 sm:px-16 md:px-20">
              <div className="relative h-full w-full min-h-[calc(100dvh-4.5rem)] sm:min-h-[calc(100dvh-5rem)]">
                <Image
                  key={`lb-${current.src}`}
                  src={current.src}
                  alt={current.alt}
                  fill
                  className="object-contain object-center"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-1 sm:pl-2">
              <div className="pointer-events-auto">
                <NavArrow direction="prev" onClick={goPrev} label="Vorige afbeelding" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1 sm:pr-2">
              <div className="pointer-events-auto">
                <NavArrow direction="next" onClick={goNext} label="Volgende afbeelding" />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
