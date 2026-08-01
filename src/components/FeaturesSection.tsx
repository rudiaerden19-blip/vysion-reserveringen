import Image from 'next/image'
import { REGISTER_URL } from '@/lib/site'

const features = [
  {
    title: 'Online en telefonisch reserveren',
    body: 'Laat je gasten online reserveren of neem de reserveringen per telefoon aan — alles in één omgeving.',
  },
  {
    title: 'Admin overzicht',
    body: 'Reserveringen bevestigen, wijzigen en opvolgen vanuit één scherm.',
  },
  {
    title: 'Minder no-shows',
    body: 'Duidelijke bevestiging en communicatie naar je gasten.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="functies" className="py-20 sm:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Wat je krijgt</h2>
          <p className="mt-4 text-lg text-gray-700">Alles wat je nodig hebt om reserveringen te digitaliseren.</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-home-photo border border-gray-200/80">
            <Image
              src="/images/platform/reservaties-card.png"
              alt="TableVysion reserveringen"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
          </div>
          <div className="grid sm:grid-cols-1 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-gray-200/60 bg-[#f4f4f4] p-6 shadow-home-card"
              >
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href={REGISTER_URL}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-white shadow-home-btn hover:bg-accent/90 transition-colors"
          >
            Account aanmaken →
          </a>
        </div>
      </div>
    </section>
  )
}
