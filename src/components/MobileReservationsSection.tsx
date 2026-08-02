import Image from 'next/image'

export default function MobileReservationsSection() {
  return (
    <section
      id="overal-bereikbaar"
      className="scroll-mt-24 border-b border-gray-100 bg-white py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative aspect-[4/5] min-h-[20rem] w-full overflow-hidden rounded-3xl shadow-home-photo ring-1 ring-black/5 sm:min-h-0 lg:aspect-[3/4]">
          <Image
            src="/images/platform/reserveringen-overal.png"
            alt="Reserveringen beheren op tablet, overal in je zaak"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1023px) 100vw, 45vw"
          />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-accent sm:text-4xl lg:text-[2.35rem]">
            Neem je reserveringsplatform mee waar je maar wilt.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600 sm:text-xl">
            Wil je je platform gebruiken aan de ingang van de zaak om klanten te verwelkomen, op het terras
            tijdens de service, of vanuit thuis reserveringen bijhouden? Dat kan zeker. Overal waar internet
            is, kun je op je eigen platform inloggen en reserveringen aannemen, aanpassen, verwijderen en
            meer. Jouw platform is altijd binnen bereik — en uit te breiden met 10 draagbare handhelds.
          </p>
        </div>
      </div>
    </section>
  )
}
