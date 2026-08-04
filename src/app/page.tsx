import SiteNav from '@/components/SiteNav'
import LandingHero from '@/components/LandingHero'
import AboutSection from '@/components/AboutSection'
import FeaturesSection from '@/components/FeaturesSection'
import MissionSection from '@/components/MissionSection'
import ComparisonTableSection from '@/components/ComparisonTableSection'
import WhySection from '@/components/WhySection'
import PlatformShowcaseSection from '@/components/PlatformShowcaseSection'
import PricingSection from '@/components/PricingSection'
import MobileReservationsSection from '@/components/MobileReservationsSection'
import FaqSection from '@/components/FaqSection'
import SiteFooter from '@/components/SiteFooter'

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <LandingHero />
        <AboutSection />
        <FeaturesSection />
        <MissionSection />
        <ComparisonTableSection />
        <PlatformShowcaseSection />
        <WhySection />
        <PricingSection />
        <MobileReservationsSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  )
}
