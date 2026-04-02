import {HeroBanner} from "../../../widgets/hero-banner";
 import {GenresSection} from "../../../widgets/genres-section";
import {DevicesSection} from "../../../widgets/devices-section";
import {FaqSection} from "../../../widgets/faq-section";
import {PricingSection} from "../../../widgets/pricing-section";
import {FreeTrialBanner} from "../../../widgets/free-trial-banner";

export function HomePage() {
  return (
    <>
      <HeroBanner />
      <GenresSection />
      <DevicesSection />
      <FaqSection />
      <PricingSection />
      <FreeTrialBanner />
    </>
  )
}
