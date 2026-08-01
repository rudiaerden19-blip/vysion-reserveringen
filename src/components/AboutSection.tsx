import { SITE_NAME } from '@/lib/site'

export default function AboutSection() {
  return (
    <section
      id="over-ons"
      className="scroll-mt-24 border-b border-gray-100 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-lg font-bold uppercase tracking-[0.12em] text-accent sm:mb-4 sm:text-xl">
            Over ons
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Horeca software van mensen die meedenken
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600 sm:text-xl">
            {SITE_NAME} is het reserveringsplatform van Vysion Group International, gebouwd voor restaurants,
            hotels en zaalverhuur die overzicht willen zonder ingewikkelde contracten of verborgen kosten.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            We hebben alle reserveringsplatformen op een rijtje gezet en daaruit het beste van alle werelden
            gemaakt: sneller, professioneler en goedkoper.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Opstarten, training of een vraag tussendoor? Ons team helpt je persoonlijk verder, snel en in je
            eigen taal.
          </p>
        </div>
      </div>
    </section>
  )
}
