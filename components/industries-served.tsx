'use client';

import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { GridMotion } from '@/components/ui/grid-motion';

// For now, using images — replace with your own industry visuals if preferred
const industries = [
  '/AviationOrbis.jpg',
  '/AutomotiveOrbis.jpg', // Automotive
  '/TankOrbis.jpg', // F&B / Cold chain
  '/EngineeringOrbis.jpg', // Heavy engineering
  '/ElectronicOrbis.jpg', // Electronics
  '/EcommerceOrbis.jpg', // E-commerce
];

export function IndustriesServed() {
  return (
    <section
      className="section-padding relative"
      style={{ backgroundColor: 'var(--peach-header)' }}
    >
      <Container>
        <SectionHeader
          badge="Industries"
          title="Serving diverse markets"
          description="From aviation to e-commerce, we understand the unique logistics needs of different industries."
          centered
          className="mb-16"
        />
      </Container>

      {/* GridMotion effect for industries */}
      <div className="h-[80vh] w-full">
        <GridMotion
          items={industries}
          gradientColor="hsl(var(--primary))"
          className="opacity-90"
        />
      </div>
    </section>
  );
}
