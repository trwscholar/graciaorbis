'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function CTASection() {
  return (
    <section className="section-padding bg-brand-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div className="space-y-6">
            <h2 className="text-white">Ready to streamline your logistics?</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Get a competitive quote today and experience the difference of working with 
              Malaysia's most reliable logistics partner.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/95 text-base px-8">
              <ArrowRight size={18} className="mr-2" />
              Get Quote Now
            </Button>
            
            <div className="flex items-center space-x-6">
              <a 
                href="tel:+60312345678" 
                className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors group"
              >
                <Phone size={18} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">+60 3-1234 5678</span>
              </a>
              
              <a 
                href="mailto:info@graciaorbis.com"
                className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">info@graciaorbis.com</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Customer Support</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">Same Day</div>
              <div className="text-white/80">Quote Response</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-white mb-2">Free</div>
              <div className="text-white/80">Consultation</div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}