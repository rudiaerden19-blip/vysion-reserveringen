import { REGISTER_URL } from '@/lib/site'

const points = [
  'Geen losse tools — alles in één omgeving, in één handomdraai.',
  'Het meest professionele reserveringsplatform op de markt.',
  'Sneller en goedkoper dan de meeste andere platformen.',
  'TableVysion wordt in eigen beheer gebouwd door ons team in België: heb je een bug of een vraag, binnen 5 minuten word je geholpen.',
]

export default function WhySection() {
  return (
    <section
      id="waarom"
      className="relative py-24 sm:py-32 overflow-hidden border-b border-gray-100 bg-gradient-to-b from-[#faf8f6] via-white to-white"
    >
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-accent/[0.08] blur-3xl"
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight text-center mb-12">
          Waarom TableVysion?
        </h2>

        <ul className="mx-auto w-fit max-w-[min(100%,36rem)] space-y-5 sm:space-y-6 px-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 sm:gap-4">
              <span
                className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent"
                aria-hidden
              >
                ✓
              </span>
              <p className="text-left text-lg leading-relaxed text-gray-600 sm:text-xl">{p}</p>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <a
            href={REGISTER_URL}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-white shadow-home-btn hover:bg-accent/90 transition-colors"
          >
            Start gratis
          </a>
        </div>
      </div>
    </section>
  )
}
