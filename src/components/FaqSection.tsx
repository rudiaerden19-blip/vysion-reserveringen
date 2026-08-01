const FAQ = [
  {
    q: 'Heb ik een volledige kassa nodig?',
    a: 'Nee. TableVysion werkt perfect standalone of integreert in jouw kassa.',
  },
  {
    q: 'Waar log ik in na registratie?',
    a: 'Via Inloggen op vysion-kassa.com met het e-mailadres van je account.',
  },
  {
    q: 'Werkt dit voor meerdere zaken?',
    a: 'Ja. Elke registratie is een aparte tenant met eigen subdomein.',
  },
] as const

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 sm:py-20 bg-dark border-t border-white/10 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-10">
          Veelgestelde vragen
        </h2>
        <dl className="space-y-8">
          {FAQ.map((item) => (
            <div key={item.q}>
              <dt className="font-bold text-white">{item.q}</dt>
              <dd className="mt-2 text-gray-400 leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
