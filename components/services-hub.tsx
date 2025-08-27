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
  FileText,
  Package2,
  MapPin 
} from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Ship,
    title: 'Ocean Freight',
    description: 'FCL and LCL shipping solutions with worldwide coverage and competitive rates.',
    features: ['Full Container Load', 'Less Container Load', 'Breakbulk Cargo', 'Trans-loading'],
    href: '/services/ocean-freight',
    badge: 'Global Coverage',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Fast and reliable air cargo services for time-sensitive shipments.',
    features: ['Express Delivery', 'Charter Services', 'Dangerous Goods', 'Door-to-Door'],
    href: '/services/air-freight',
    badge: 'Express Available',
    color: 'bg-sky-50 border-sky-200'
  },
  {
    icon: Warehouse,
    title: '3PL Warehousing',
    description: 'Complete storage and distribution solutions with modern facilities.',
    features: ['Climate Control', 'Inventory Management', 'Pick & Pack', 'Cross-docking'],
    href: '/services/3pl-warehousing',
    badge: 'Modern Facilities',
    color: 'bg-emerald-50 border-emerald-200'
  },
  {
    icon: Truck,
    title: 'Distribution & Trucking',
    description: 'Local and long-haul trucking with real-time tracking capabilities.',
    features: ['LTL Shipping', 'FTL Services', 'Cross-border', 'Temperature Control'],
    href: '/services/distribution-trucking',
    badge: 'GPS Tracked',
    color: 'bg-orange-50 border-orange-200'
  },
  {
    icon: Package,
    title: 'Project Cargo',
    description: 'Specialized handling for oversized and heavy cargo shipments.',
    features: ['Site Inspection', 'Heavy Lift', 'Route Planning', 'Risk Management'],
    href: '/services/project-cargo',
    badge: 'Specialized',
    color: 'bg-purple-50 border-purple-200'
  },
  {
    icon: FileText,
    title: 'Customs Brokerage',
    description: 'Expert customs clearance and trade compliance services.',
    features: ['Import/Export', 'Documentation', 'Permits', 'Trade Advisory'],
    href: '/services/customs-brokerage',
    badge: 'Licensed Brokers',
    color: 'bg-rose-50 border-rose-200'
  },
  {
    icon: Package2,
    title: 'Heavy Parcel Delivery',
    description: 'Specialized parcel handling for items exceeding standard limits.',
    features: ['White Glove', 'Assembly Service', 'Appointment Delivery', 'Insurance'],
    href: '/services/heavy-parcel',
    badge: 'White Glove',
    color: 'bg-indigo-50 border-indigo-200'
  },
  {
    icon: MapPin,
    title: 'Last Mile Delivery',
    description: 'Final destination delivery with flexible options and tracking.',
    features: ['Same Day', 'Cash on Delivery', 'Proof of Delivery', 'Returns'],
    href: '/services/last-mile',
    badge: 'Same Day Available',
    color: 'bg-teal-50 border-teal-200'
  }
];

export function ServicesHub() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50/50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
              Complete Logistics Solutions
            </div>
            
            <h1 className="text-gray-900">
              Comprehensive logistics services for every need
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              From ocean freight to last mile delivery, we provide end-to-end logistics solutions 
              tailored to your business requirements. Discover how we can optimize your supply chain.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding" style={{ backgroundColor: 'var(--base-background)' }}>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
                <Link href={service.href}>
                  <div className={`bg-white rounded-2xl p-6 shadow-sm border-2 hover:shadow-xl transition-all duration-300 h-full ${service.color}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <service.icon size={24} className="text-primary" />
                      </div>
                      <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {service.badge}
                      </span>
                    </div>
                    
                    <h3 className="text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-1 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-xs text-gray-600">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-1 transform transition-transform">
                      Learn more
                      <ArrowRight size={14} className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--peach-header)' }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-gray-900">Need a custom solution?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every business has unique logistics requirements. Our experts will work with you 
                to design a tailored solution that meets your specific needs and budget.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8">
                Get Custom Quote
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8">
                Speak with Expert
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}