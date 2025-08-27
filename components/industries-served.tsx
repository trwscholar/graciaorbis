'use client';

import { motion } from 'framer-motion';
import { Plane, Car, Truck, Zap, Factory, Boxes } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';

const industries = [
  { icon: Plane, name: 'Aviation', color: 'bg-sky-100 text-sky-700' },
  { icon: Car, name: 'Automotive', color: 'bg-red-100 text-red-700' },
  { icon: Truck, name: 'F&B / Cold-chain', color: 'bg-blue-100 text-blue-700' },
  { icon: Factory, name: 'Heavy Engineering', color: 'bg-gray-100 text-gray-700' },
  { icon: Zap, name: 'Electronics', color: 'bg-yellow-100 text-yellow-700' },
  { icon: Boxes, name: 'E-commerce', color: 'bg-purple-100 text-purple-700' },
];

export function IndustriesServed() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--peach-header)' }}>
      <Container>
        <SectionHeader
          badge="Industries"
          title="Serving diverse markets"
          description="From aviation to e-commerce, we understand the unique logistics needs of different industries."
          centered
          className="mb-16"
        />

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className={`inline-flex items-center space-x-3 px-6 py-4 rounded-full bg-white shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 ${industry.color.replace('text-', 'hover:text-').replace('bg-', 'hover:bg-')}`}>
                <industry.icon size={24} />
                <span className="font-medium">{industry.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}