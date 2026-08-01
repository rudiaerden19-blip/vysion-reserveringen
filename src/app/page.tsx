import SiteNav from '@/components/SiteNav'
import LandingHero from '@/components/LandingHero'
import FeaturesSection from '@/components/FeaturesSection'
import WhySection from '@/components/WhySection'
import PlatformShowcaseSection from '@/components/PlatformShowcaseSection'
import PricingSection from '@/components/PricingSection'
import FaqSection from '@/components/FaqSection'
import SiteFooter from '@/components/SiteFooter'

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <LandingHero />
        <FeaturesSection />
        <PlatformShowcaseSection />
        <WhySection />
        <PricingSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  )
}
