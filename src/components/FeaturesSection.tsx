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
      className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-b from-[#faf8f6] via-white to-[#f6f4f1] py-24 sm:py-32 lg:py-36"
    >
      <div
        className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-accent/[0.07] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-dark/[0.04] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-16 max-w-2xl text-center sm:mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Functies</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Wat je krijgt</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Eén platform voor reserveringen — helder voor gasten, overzichtelijk voor jouw team.
          </p>
        </header>

        <div className="flex flex-col gap-14 sm:gap-16 lg:gap-20">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-3xl shadow-home-photo ring-1 ring-black/5 lg:max-w-4xl">
            <Image
              src="/images/platform/reservaties-card.png"
              alt="TableVysion reserveringen"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/25 via-transparent to-transparent" aria-hidden />
          </div>

          <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
            {features.map((f, index) => (
              <article
                key={f.title}
                className="rounded-2xl border-l-4 border-l-accent bg-white p-6 shadow-home-card ring-1 ring-gray-200/80 transition-shadow hover:shadow-lg hover:ring-accent/20 sm:p-8"
              >
                <span className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {index + 1}
                </span>
                <h3 className="mb-3 text-base font-bold leading-snug text-gray-900 sm:text-lg">{f.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{f.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center sm:mt-20">
          <Link
            href={REGISTER_URL}
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-white shadow-home-btn transition-colors hover:bg-accent/90"
          >
            Account aanmaken →
          </Link>
        </div>
      </div>
    </section>
  )
}
