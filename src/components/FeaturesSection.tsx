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
  {
    title: 'Live tafelplattegrond',
    body: 'Zie in één oogopslag welke tafels bezet zijn, wijs reserveringen toe en werk sneller tijdens de service.',
  },
  {
    title: 'Publieke reserveringspagina',
    body: 'Gasten boeken via jouw eigen link of website — professioneel, meertalig en klaar om te delen.',
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

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <header className="features-section-header mx-auto max-w-2xl text-center">
          <p className="mb-4 text-lg font-bold uppercase tracking-[0.12em] text-accent sm:text-xl">Functies</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Wat je krijgt</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Eén platform voor reserveringen — helder voor gasten, overzichtelijk voor jouw team.
          </p>
        </header>

        <div className="features-layout-split grid w-full grid-cols-1 items-start gap-y-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-0 md:gap-x-12 lg:gap-x-16 xl:gap-x-20">
          <div className="features-photo relative aspect-[4/3] min-h-[17rem] min-w-0 w-full overflow-hidden rounded-3xl shadow-home-photo ring-1 ring-black/5 sm:aspect-auto sm:min-h-0">
            <Image
              src="/images/platform/reservaties-card.png"
              alt="Medewerker bedient de kassa in horeca"
              fill
              className="object-cover object-center"
              sizes="(max-width: 639px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/25 via-transparent to-transparent" aria-hidden />
          </div>

          <div className="features-cards-grid min-w-0 w-full">
            {features.map((f, index) => (
              <article key={f.title} className="features-card min-w-0">
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {index + 1}
                </span>
                <h3 className="mb-2 text-base font-bold leading-snug text-gray-900">{f.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{f.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center sm:mt-20 lg:mt-24">
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
