import { REGISTER_URL } from '@/lib/site'

const points = [
  'Geen losse tools — alles in één omgeving, in één handomdraai.',
  'Het meest professionele reserveringsplatform op de markt.',
  'Multi-tenant platform: veilig voor elke zaak apart.',
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
        <ul className="max-w-2xl mx-auto space-y-6">
          {points.map((p) => (
            <li key={p} className="flex gap-3 text-gray-800 leading-relaxed">
              <span className="text-accent font-bold shrink-0">✓</span>
              <span>{p}</span>
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
