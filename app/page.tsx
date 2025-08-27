import { HeroSplit } from '@/components/hero-split';
import { ValueProps } from '@/components/value-props';
import { ServicesPreview } from '@/components/services-preview';
import { HowItWorks } from '@/components/how-it-works';
import { TestimonialSlider } from '@/components/testimonial-slider';
import { LatestTips } from '@/components/latest-tips';
import { CTASection } from '@/components/cta-section';
import dynamic from 'next/dynamic';

const IndustriesServed = dynamic(() => import('@/components/industries-served').then(mod => ({ default: mod.IndustriesServed })), {
  ssr: false
});

const StatsSection = dynamic(() => import('@/components/stats-section').then(mod => ({ default: mod.StatsSection })), {
  ssr: false
});

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