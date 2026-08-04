type ComparisonRow = {
  feature: string
  budget: string
  enterprise: string
  tablevysion: string
}

const rows: ComparisonRow[] = [
  {
    feature: 'Vaste maandprijs',
    budget: 'Laag instaptarief',
    enterprise: 'Hoog (€100 – €170+ / maand)',
    tablevysion: '€39 of €49 / maand',
  },
  {
    feature: 'Aantal reserveringen',
    budget: 'Vaak gelimiteerd (bijv. max. 50 / maand)',
    enterprise: 'Onbeperkt',
    tablevysion: 'Onbeperkt',
  },
  {
    feature: 'WhatsApp-notificaties',
    budget: 'Extra betalen per bericht',
    enterprise: 'Vaak betaalde add-on',
    tablevysion: 'Inbegrepen',
  },
  {
    feature: 'Voorschotten / no-show',
    budget: 'Alleen in duurdere Pro-pakketten',
    enterprise: 'Inbegrepen',
    tablevysion: 'Inbegrepen',
  },
  {
    feature: 'E-mailcampagnes & marketing',
    budget: 'Niet aanwezig of extra module',
    enterprise: 'Inbegrepen',
    tablevysion: 'Inbegrepen',
  },
  {
    feature: 'Kosten per reservering',
    budget: 'Soms verborgen commissies',
    enterprise: 'Soms bij externe kanalen',
    tablevysion: '€0 — commissievrij',
  },
  {
    feature: 'Gratis website & QR-menu',
    budget: 'Nooit inbegrepen',
    enterprise: 'Moet je zelf regelen',
    tablevysion: 'Inbegrepen',
  },
]

export default function ComparisonTableSection() {
  return (
    <section
      id="vergelijking"
      className="scroll-mt-24 border-b border-gray-200 bg-white py-16 sm:py-20 lg:py-24"
      aria-labelledby="comparison-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-accent">Vergelijking</p>
          <h2
            id="comparison-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            TableVysion naast andere platformen
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Dezelfde functies, transparante prijs — zonder verborgen kosten per reservering.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm sm:text-base">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th scope="col" className="px-4 py-4 font-semibold text-gray-900 sm:px-6 sm:py-5">
                  Functie
                </th>
                <th scope="col" className="px-4 py-4 font-semibold text-gray-700 sm:px-6 sm:py-5">
                  <span className="block">Budget-systemen</span>
                  <span className="mt-1 block text-xs font-normal text-gray-500 sm:text-sm">
                    Lokprijzen vanaf €25 / maand
                  </span>
                </th>
                <th scope="col" className="px-4 py-4 font-semibold text-gray-700 sm:px-6 sm:py-5">
                  <span className="block">Grote spelers</span>
                  <span className="mt-1 block text-xs font-normal text-gray-500 sm:text-sm">
                    Zenchef / Formitable
                  </span>
                </th>
                <th
                  scope="col"
                  className="bg-accent/[0.08] px-4 py-4 font-semibold text-gray-900 sm:px-6 sm:py-5"
                >
                  <span className="text-accent">TableVysion</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.feature}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50/80'}
                >
                  <th
                    scope="row"
                    className="border-t border-gray-100 px-4 py-4 font-medium text-gray-900 sm:px-6 sm:py-4"
                  >
                    {row.feature}
                  </th>
                  <td className="border-t border-gray-100 px-4 py-4 leading-snug text-gray-600 sm:px-6 sm:py-4">
                    {row.budget}
                  </td>
                  <td className="border-t border-gray-100 px-4 py-4 leading-snug text-gray-600 sm:px-6 sm:py-4">
                    {row.enterprise}
                  </td>
                  <td className="border-t border-gray-100 bg-accent/[0.06] px-4 py-4 font-medium leading-snug text-gray-900 sm:px-6 sm:py-4">
                    {row.tablevysion}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-gray-700 sm:mt-10 sm:text-lg">
          Bij de meeste systemen word je gelokt met een basisprijs: wil je daarna modules erbij die je nodig
          hebt, betaal je soms tot honderden euro&apos;s extra. Bij TableVysion geloven we niet in addertjes
          onder het gras. Eén vaste prijs, écht all-in.
        </p>
      </div>
    </section>
  )
}
