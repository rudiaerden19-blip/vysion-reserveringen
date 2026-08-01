import SiteNav from '@/components/SiteNav'
import LandingHero from '@/components/LandingHero'
import FeaturesSection from '@/components/FeaturesSection'
import WhySection from '@/components/WhySection'
import SiteFooter from '@/components/SiteFooter'

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <LandingHero />
        <FeaturesSection />
        <WhySection />
      </main>
      <SiteFooter />
    </>
  )
}
