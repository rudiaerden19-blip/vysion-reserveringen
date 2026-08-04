const cards = [
  {
    title: 'Betrouwbaarheid',
    description: '99.9% uptime. Je software werkt altijd, ook als het internet even wegvalt.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    ),
  },
  {
    title: 'Snelheid',
    description: 'Razendsnelle updates. Vraag een functie aan en zie het de volgende dag in je systeem.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    ),
  },
  {
    title: 'Persoonlijk',
    description: 'Geen callcenters. Directe lijnen met ons team. We kennen iedere klant bij naam.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    ),
  },
] as const

export default function MissionSection() {
  return (
    <section id="missie" className="relative scroll-mt-24 overflow-hidden py-20 sm:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/mission-bg.png)' }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-6 text-3xl font-bold text-white drop-shadow-sm sm:text-4xl">Onze missie</h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-200 sm:text-xl">
            Ondernemers laten focussen op wat ze het beste doen: klanten verwelkomen en geweldige ervaringen
            creëren. De rest regelen wij.
          </p>
        </div>

        <ul className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <li
              key={card.title}
              className="rounded-2xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur-md"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  {card.icon}
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">{card.title}</h3>
              <p className="text-gray-300 leading-relaxed">{card.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
