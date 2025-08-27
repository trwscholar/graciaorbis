'use client';

import { motion } from 'framer-motion';
import { DollarSign, Zap, Shield, Award } from 'lucide-react';
import { Container } from '@/components/ui/container';

const valueProps = [
  {
    icon: DollarSign,
    title: 'Cost-Effective',
    description: 'Optimized routes and consolidated loads to reduce your shipping costs without compromising quality.',
    color: 'bg-green-100 text-green-700'
  },
  {
    icon: Zap,
    title: 'Proactive',
    description: 'Real-time updates and clear communication throughout your shipment journey.',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    icon: Shield,
    title: 'Reliable',
    description: 'On-time delivery and careful handling with comprehensive insurance coverage.',
    color: 'bg-purple-100 text-purple-700'
  },
  {
    icon: Award,
    title: 'Experienced',
    description: 'Decades of combined expertise in logistics across diverse industries and markets.',
    color: 'bg-orange-100 text-orange-700'
  }
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
            We deliver more than just packages. We deliver peace of mind with every shipment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${prop.color} mb-6`}>
                  <prop.icon size={24} />
                </div>
                
                <h3 className="text-gray-900 mb-4">{prop.title}</h3>
                <p className="text-gray-600">{prop.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}