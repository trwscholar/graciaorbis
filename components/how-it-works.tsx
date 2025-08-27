'use client';

import { motion } from 'framer-motion';
import { FileText, Package, Truck, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';

const steps = [
  {
    icon: FileText,
    title: 'Get Quote',
    description: 'Submit your shipment details and receive a competitive quote within hours.',
    details: ['Instant online calculator', 'Detailed cost breakdown', 'Multiple service options']
  },
  {
    icon: Package,
    title: 'Pick-up',
    description: 'Our team safely collects your cargo from your facility with proper documentation.',
    details: ['Flexible scheduling', 'Professional handling', 'Real-time updates']
  },
  {
    icon: Truck,
    title: 'Customs & Transit',
    description: 'We handle all customs procedures and ensure smooth transit to destination.',
    details: ['Expert customs clearance', 'Live tracking', 'Proactive communication']
  },
  {
    icon: MapPin,
    title: 'Final Mile',
    description: 'Safe delivery to the final destination with proof of delivery confirmation.',
    details: ['On-time delivery', 'Damage-free handling', 'Delivery confirmation']
  }
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <SectionHeader
          badge="Process"
          title="How it works"
          description="Our streamlined process ensures your cargo reaches its destination safely and on time."
          centered
          className="mb-16"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-primary to-primary transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step number */}
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-white border-4 border-primary rounded-full shadow-lg relative z-10">
                  <step.icon size={24} className="text-primary" />
                </div>

                {/* Content */}
                <div className="text-center lg:px-4">
                  <h3 className="text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center justify-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step number badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}