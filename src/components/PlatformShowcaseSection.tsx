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

export default function PlatformShowcaseSection() {
  return (
    <section
      id="platform"
      className="scroll-mt-24 border-y border-gray-200/80 bg-gradient-to-b from-white via-[#f3f3f3] to-[#e8e8e8] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Platform</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Zo werkt je reserveringsadmin
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600 sm:text-xl">
            Plattegrond, tafels, rapporten en gasten — alles overzichtelijk in één omgeving.
          </p>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {screenshots.map((shot) => (
            <li key={shot.src} className="group min-w-0">
              <figure className="overflow-hidden rounded-2xl border border-gray-200/90 bg-white shadow-home-float ring-1 ring-black/5 transition-shadow group-hover:shadow-home-card">
                <div className="relative aspect-[16/10] w-full bg-gray-100">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <figcaption className="border-t border-gray-100 px-4 py-3 text-center text-sm font-semibold text-gray-800 sm:text-base">
                  {shot.label}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
