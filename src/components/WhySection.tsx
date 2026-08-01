import { REGISTER_URL } from '@/lib/site'

const points = [
  'Geen losse tools — alles in één omgeving, in één handomdraai.',
  'Het meest professionele reserveringsplatform op de markt.',
  'Sneller en goedkoper dan de meeste andere platformen.',
]

export default function WhySection() {
  return (
    <section
      id="waarom"
      className="relative py-28 sm:py-36 overflow-hidden border-b border-gray-100 bg-gradient-to-b from-[#faf8f6] via-white to-white"
    >
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-accent/[0.08] blur-3xl"
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold text-gray-900 tracking-tight text-center mb-14 sm:mb-16">
          Waarom TableVysion?
        </h2>

        <ul className="mx-auto w-full max-w-3xl space-y-7 sm:space-y-9">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-4 sm:gap-5">
              <span
                className="mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/12 text-2xl font-bold text-accent"
                aria-hidden
              >
                ✓
              </span>
              <p className="pt-1.5 text-xl sm:text-2xl text-gray-800 leading-snug text-left">{p}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 sm:mt-16 text-center">
          <a
            href={REGISTER_URL}
            className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-accent px-12 py-4 text-lg sm:text-xl font-semibold text-white shadow-home-btn hover:bg-accent/90 transition-colors"
          >
            Start gratis
          </a>
        </div>
      </div>
    </section>
  )
}
