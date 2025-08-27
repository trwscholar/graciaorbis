'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { 
  Ship, 
  Plane, 
  Warehouse, 
  Truck, 
  Package, 
  FileText 
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Ship,
    title: 'Ocean Freight',
    description: 'FCL and LCL shipping solutions with worldwide coverage and competitive rates.',
    features: ['Full Container Load', 'Less Container Load', 'Breakbulk Cargo'],
    href: '/services/ocean-freight',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Fast and reliable air cargo services for time-sensitive shipments.',
    features: ['Express Delivery', 'Consolidated Cargo', 'Charter Services'],
    href: '/services/air-freight',
    color: 'bg-sky-50 border-sky-200'
  },
  {
    icon: Warehouse,
    title: '3PL Warehousing',
    description: 'Complete storage and distribution solutions with modern facilities.',
    features: ['Climate Control', 'Inventory Management', 'Pick & Pack'],
    href: '/services/3pl-warehousing',
    color: 'bg-emerald-50 border-emerald-200'
  },
  {
    icon: Truck,
    title: 'Distribution & Trucking',
    description: 'Local and long-haul trucking with real-time tracking capabilities.',
    features: ['LTL Shipping', 'FTL Services', 'Cross-border'],
    href: '/services/distribution-trucking',
    color: 'bg-orange-50 border-orange-200'
  },
  {
    icon: Package,
    title: 'Project Cargo',
    description: 'Specialized handling for oversized and heavy cargo shipments.',
    features: ['Site Inspection', 'Custom Solutions', 'Risk Management'],
    href: '/services/project-cargo',
    color: 'bg-purple-50 border-purple-200'
  },
  {
    icon: FileText,
    title: 'Customs Brokerage',
    description: 'Expert customs clearance and trade compliance services.',
    features: ['Documentation', 'Permits & Licenses', 'Trade Advisory'],
    href: '/services/customs-brokerage',
    color: 'bg-rose-50 border-rose-200'
  }
];

export function ServicesPreview() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--peach-header)' }}>
      <Container>
        <SectionHeader
          badge="Our Services"
          title="Comprehensive logistics solutions"
          description="From first mile to last mile, we handle every aspect of your supply chain with precision and care."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className={`bg-white rounded-2xl p-8 shadow-sm border-2 hover:shadow-xl transition-all duration-300 h-full ${service.color}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-gray-900">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href={service.href}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group-hover:translate-x-1 transform duration-300"
                >
                  Learn more
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button size="lg" asChild>
            <Link href="/services">
              View all services
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}