import { HeroSplit } from '@/components/hero-split';
import { ValueProps } from '@/components/value-props';
import { ServicesPreview } from '@/components/services-preview';
import { HowItWorks } from '@/components/how-it-works';
import { IndustriesServed } from '@/components/industries-served';
import { StatsSection } from '@/components/stats-section';
import { TestimonialSlider } from '@/components/testimonial-slider';
import { LatestTips } from '@/components/latest-tips';
import { CTASection } from '@/components/cta-section';

export default function Home() {
  return (
    <>
      <HeroSplit />
      <ValueProps />
      <ServicesPreview />
      <HowItWorks />
      <IndustriesServed />
      <StatsSection />
      <TestimonialSlider />
      <LatestTips />
      <CTASection />
    </>
  );
}