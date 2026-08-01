import Image from 'next/image'
import Link from 'next/link'
import { REGISTER_URL } from '@/lib/site'

const features = [
  {
    title: 'Online en telefonisch reserveren',
    body: 'Laat je gasten online reserveren of neem de reserveringen per telefoon aan — alles in één omgeving.',
  },
  {
    title: 'Admin overzicht',
    body: 'Reserveringen bevestigen, wijzigen en opvolgen vanuit één scherm, waar je ook bent.',
  },
  {
    title: 'Minder no-shows',
    body: 'Duidelijke bevestiging en communicatie naar je gasten per e-mail en/of WhatsApp.',
  },
  {
    title: 'Volledige transparantie',
    body: 'Realtime zicht op bezetting, open tijdsloten en reserveringsstatus — jij en je team weten altijd waar je aan toe bent.',
  },
] as const

export default function FeaturesSection() {
  return (
    <section
      id="functies"
      className="relative py-20 sm:py-28 overflow-hidden border-b border-gray-100 bg-gradient-to-b from-[#faf8f6] via-white to-[#f6f4f1]"
    >
      <div
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-accent/[0.07] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-dark/[0.04] blur-3xl"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-14 sm:mb-16 max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-3">Functies</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Wat je krijgt</h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Eén platform voor reserveringen — helder voor gasten, overzichtelijk voor jouw team.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-14">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-home-photo ring-1 ring-black/5">
            <Image
              src="/images/platform/reservaties-card.png"
              alt="TableVysion reserveringen"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/25 via-transparent to-transparent" aria-hidden />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {features.map((f, index) => (
              <article
                key={f.title}
                className="group relative rounded-2xl bg-white p-5 sm:p-6 shadow-home-card ring-1 ring-gray-200/80 border-l-4 border-l-accent transition-shadow hover:shadow-lg hover:ring-accent/20"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent mb-3">
                  {index + 1}
                </span>
                <h3 className="font-bold text-gray-900 text-base sm:text-[1.05rem] leading-snug mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href={REGISTER_URL}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-white shadow-home-btn hover:bg-accent/90 transition-colors"
          >
            Account aanmaken →
          </Link>
        </div>
      </div>
    </section>
  )
}
