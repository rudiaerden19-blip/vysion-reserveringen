import PlatformShowcaseCarousel from '@/components/PlatformShowcaseCarousel'

export default function PlatformShowcaseSection() {
  return (
    <section
      id="platform"
      className="scroll-mt-24 border-y-2 border-gray-300 bg-[#d8d8d8] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <p className="mb-3 text-lg font-bold uppercase tracking-[0.12em] text-accent sm:mb-4 sm:text-xl">Platform</p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Zo werkt je reserveringsplatform
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-700 sm:text-xl">
            Plattegrond, tafels, rapporten en gasten — alles overzichtelijk in één omgeving.
          </p>
        </div>

        <PlatformShowcaseCarousel />
      </div>
    </section>
  )
}
