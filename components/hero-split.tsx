'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/container';

export function HeroSplit() {
  return (
    <section
      className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/HeroOrbis.png')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      {/* Optional brand tint */}
      <div className="absolute inset-0 bg-brand-gradient opacity-20 mix-blend-multiply z-0"></div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white border border-white/20">
                Trusted logistics partner since 2018
              </div>
              
              <h1 className="text-white leading-tight">
                End-to-end logistics,{' '}
                <span className="relative">
                  from cold-chain to cargo ships
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute bottom-2 left-0 h-1 bg-brand-gradient rounded-full"
                  />
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                Cost-effective, proactive, and reliable delivery across Malaysia and beyond. 
                Air and ocean freight, bonded trucking, 3PL warehousing, customs brokerage, and last mile.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-base px-8 bg-white text-primary hover:bg-white/90"
              >
                Get a Quote
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 border-white text-white hover:bg-white/10"
              >
                <Play size={18} className="mr-2" />
                Talk to Sales
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-white/80">Shipments monthly</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-sm text-white/80">Countries served</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">99.8%</div>
                <div className="text-sm text-white/80">On-time delivery</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <img
                  src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg"
                  alt="Modern logistics warehouse with organized cargo"
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
                />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ 
                  x: [0, 10, 0],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-900">Shipment Status</div>
                    <div className="text-xs text-green-600">In Transit</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  x: [0, -8, 0],
                  y: [0, 8, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="text-primary text-xs font-bold">24h</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-900">Delivery Time</div>
                    <div className="text-xs text-primary">Express Available</div>
                  </div>
                </div>
              </motion.div>

              {/* Subtle background highlight */}
              <div className="absolute inset-0 bg-brand-gradient opacity-10 rounded-2xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
