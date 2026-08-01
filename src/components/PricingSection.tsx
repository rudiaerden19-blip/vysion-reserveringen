import { REGISTER_URL } from '@/lib/site'

export default function PricingSection() {
  return (
    <section id="prijzen" className="py-16 sm:py-20 bg-[#faf8f6] border-t border-white/10 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Prijzen</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Start met 14 dagen gratis. Daarna het Vysion-abonnement voor reserveringsmodules — zie
          vysion-kassa.com/prijzen voor actuele tarieven.
        </p>
        <a
          href={REGISTER_URL}
          className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-white shadow-home-btn hover:bg-accent/90 transition-colors"
        >
          Start gratis proefperiode
        </a>
      </div>
    </section>
  )
}
