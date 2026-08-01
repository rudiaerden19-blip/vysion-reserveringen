const FAQ = [
  {
    q: 'Heb ik een volledige kassa nodig?',
    a: 'Nee. TableVysion werkt perfect standalone of integreert in jouw kassa.',
  },
  {
    q: 'Waar log ik in na registratie?',
    a: 'Via Inloggen op www.tablevysion.com met het e-mailadres van je account.',
  },
  {
    q: 'Werkt dit voor meerdere zaken?',
    a: 'Ja, overal waar internet aanwezig is.',
  },
  {
    q: 'Moet ik installatiekosten betalen?',
    a: 'Neen, wij zorgen dat alles werkt voor jou gratis. Jij logt in en klaar.',
  },
  {
    q: 'Kan ik met voorschotten werken?',
    a: 'Ja. Per reservering kan je een voorschot vragen aan de klant. Je kan dit ook automatisch laten lopen; stel het in via je instellingen.',
  },
  {
    q: 'Moet ik per reservering een procent afgeven aan TableVysion?',
    a: 'Neen. Wij werken niet met transactiekosten of dergelijke.',
  },
] as const

export default function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-24 border-t border-gray-200 bg-white py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
          Veelgestelde vragen
        </h2>
        <dl className="space-y-8">
          {FAQ.map((item) => (
            <div key={item.q}>
              <dt className="font-bold text-gray-900">{item.q}</dt>
              <dd className="mt-2 text-gray-600 leading-relaxed">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
