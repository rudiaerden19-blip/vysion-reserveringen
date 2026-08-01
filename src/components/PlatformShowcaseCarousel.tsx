'use client'

import { useCallback, useEffect, useState } from 'react'

/** v=3: echte PNG’s, geen JPEG; nieuwe-reservatie in hoge kwaliteit uit Cursor-export. */
const ASSET_V = '3'

export const platformScreenshots = [
  {
    src: `/images/platform/plattegrond.png?v=${ASSET_V}`,
    alt: 'TableVysion tafelplattegrond met live bezetting',
    label: 'Plattegrond',
    width: 2048,
    height: 784,
  },
  {
    src: `/images/platform/nieuwe-reservatie.png?v=${ASSET_V}`,
    alt: 'Nieuwe reservatie aanmaken in TableVysion',
    label: 'Nieuwe reservatie',
    width: 893,
    height: 904,
  },
  {
    src: `/images/platform/tafels.png?v=${ASSET_V}`,
    alt: 'Tafeloverzicht en tijdsloten in TableVysion',
    label: 'Tafels & planning',
    width: 2048,
    height: 780,
  },
  {
    src: `/images/platform/rapporten.png?v=${ASSET_V}`,
    alt: 'Rapporten en walk-in in TableVysion',
    label: 'Rapporten',
    width: 2048,
    height: 782,
  },
  {
    src: `/images/platform/contacten.png?v=${ASSET_V}`,
    alt: 'Gastencontacten en VIP in TableVysion',
    label: 'Contacten',
    width: 2048,
    height: 780,
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

export default function PlatformShowcaseCarousel() {
  const [index, setIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const total = platformScreenshots.length
  const current = platformScreenshots[index]

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

  const rawSrc = current.src.split('?')[0]

  return (
    <>
      <div className="mx-auto flex max-w-6xl items-center gap-3 sm:gap-5">
        <NavArrow direction="prev" onClick={goPrev} label="Vorige afbeelding" />

        <figure className="min-w-0 flex-1">
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="group block w-full cursor-zoom-in text-left"
            aria-label={`${current.label} vergroten`}
          >
            <div className="overflow-hidden rounded-2xl border-2 border-gray-300 bg-white shadow-home-card">
              <div className="flex max-h-[min(70vh,720px)] items-center justify-center bg-gray-50 p-2 sm:p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  width={current.width}
                  height={current.height}
                  className="max-h-[min(68vh,700px)] w-auto max-w-full object-contain"
                  decoding="async"
                  draggable={false}
                />
              </div>
              <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 bg-white px-5 py-4 sm:px-6 sm:py-5">
                <span className="text-base font-semibold text-gray-900 sm:text-lg">{current.label}</span>
                <span className="text-sm text-gray-600">
                  {index + 1} / {total} · Klik voor volledig scherm
                </span>
              </figcaption>
            </div>
          </button>
        </figure>

        <NavArrow direction="next" onClick={goNext} label="Volgende afbeelding" />
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
            className="mb-2 flex shrink-0 flex-wrap items-center justify-between gap-2 px-1 text-white sm:mb-3"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="truncate text-sm font-semibold sm:text-base">
              {current.label}{' '}
              <span className="font-normal text-white/60">
                ({index + 1}/{total})
              </span>
            </p>
            <div className="flex shrink-0 items-center gap-2">
              <a
                href={rawSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full bg-white/10 px-4 text-sm font-semibold transition hover:bg-white/20"
              >
                Origineel openen
              </a>
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="inline-flex h-10 items-center justify-center rounded-full bg-white/10 px-4 text-sm font-semibold transition hover:bg-white/20"
              >
                Sluiten
              </button>
            </div>
          </div>

          <div className="relative min-h-0 flex-1 w-full overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex min-h-full min-w-full items-center justify-center px-12 py-2 sm:px-16 md:px-20">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={`lb-${current.src}`}
                src={current.src}
                alt={current.alt}
                width={current.width}
                height={current.height}
                className="h-auto w-auto max-w-none select-none"
                style={{
                  maxHeight: 'calc(100dvh - 5rem)',
                  maxWidth: 'min(96vw, 100%)',
                }}
                decoding="sync"
                draggable={false}
              />
            </div>
            <div className="pointer-events-none fixed inset-y-0 left-0 flex items-center pl-1 sm:pl-2">
              <div className="pointer-events-auto">
                <NavArrow direction="prev" onClick={goPrev} label="Vorige afbeelding" />
              </div>
            </div>
            <div className="pointer-events-none fixed inset-y-0 right-0 flex items-center pr-1 sm:pr-2">
              <div className="pointer-events-auto">
                <NavArrow direction="next" onClick={goNext} label="Volgende afbeelding" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
