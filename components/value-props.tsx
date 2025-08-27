'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { DollarSign, Zap, Shield, Award } from 'lucide-react';
import { Container } from '@/components/ui/container';

const valueProps = [
  {
    icon: DollarSign,
    title: 'Cost-Effective',
    description:
      'Optimized routes and consolidated loads to reduce your shipping costs without compromising quality.',
    image: '/CostOrbis.jpg',
  },
  {
    icon: Zap,
    title: 'Proactive',
    description:
      'Real-time updates and clear communication throughout your shipment journey.',
    image: '/ProactiveOrbis.jpg',
  },
  {
    icon: Shield,
    title: 'Reliable',
    description:
      'On-time delivery and careful handling with comprehensive insurance coverage.',
    image: '/ReliableOrbis.jpg',
  },
  {
    icon: Award,
    title: 'Experienced',
    description:
      'Decades of combined expertise in logistics across diverse industries and markets.',
    image: '/ExperiencedOrbis.jpg',
  },
];

export function ValueProps() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <h2 className="text-gray-900">Why choose Gracia Orbis</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver more than just packages. We deliver peace of mind with
            every shipment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg"
              >
                {/* Background image */}
                <Image
                  src={prop.image}
                  alt={prop.title}
                  fill
                  className="object-cover"
                />

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />

                {/* Content on top */}
                <div className="relative z-10 p-6 text-white flex flex-col h-full justify-end">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{prop.title}</h3>
                  <p className="text-sm text-gray-200">{prop.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
