'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Lock, MapPin, Users, Award } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';

const missionPillars = [
  {
    icon: Shield,
    title: 'Excellence',
    description: 'We maintain the highest standards in every aspect of our logistics operations, from handling to delivery.',
    color: 'bg-blue-50 border-blue-200'
  },
  {
    icon: Clock,
    title: 'Responsiveness',
    description: 'Quick response times and proactive communication keep you informed throughout your shipment journey.',
    color: 'bg-green-50 border-green-200'
  },
  {
    icon: Lock,
    title: 'Confidentiality',
    description: 'Your business information and cargo details are handled with the utmost security and discretion.',
    color: 'bg-purple-50 border-purple-200'
  }
];

const qualityHighlights = [
  'ISO 9001:2015 Quality Management System',
  'Licensed Customs Brokerage Services',
  'Bonded Warehouse Operations',
  'Temperature-Controlled Facilities',
  'Comprehensive Insurance Coverage',
  'Real-time Tracking Systems'
];

export function AboutPage() {
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
              About Gracia Orbis
            </div>
            
            <h1 className="text-gray-900">
              Your trusted logistics partner since 2018
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Founded with a vision to revolutionize logistics in Malaysia, Gracia Orbis combines 
              decades of industry expertise with modern technology to deliver exceptional supply chain solutions.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Company Story */}
      <section className="section-padding" style={{ backgroundColor: 'var(--blush-surface)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-gray-900">Our story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Gracia Orbis was established in 2018 with a simple mission: to provide reliable, 
                  cost-effective logistics solutions that help businesses grow. What started as a 
                  small team with big ambitions has evolved into one of Malaysia's most trusted 
                  logistics partners.
                </p>
                <p>
                  Our founders brought together decades of combined experience from major shipping 
                  lines, freight forwarders, and customs agencies. This deep industry knowledge, 
                  combined with our commitment to innovation, allows us to navigate complex logistics 
                  challenges with confidence.
                </p>
                <p>
                  Today, we serve businesses across diverse industries, from small enterprises to 
                  multinational corporations, handling everything from urgent air freight to complex 
                  project cargo operations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/4481942/pexels-photo-4481942.jpeg"
                alt="Modern logistics operations"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-brand-gradient opacity-10 rounded-2xl"></div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission Pillars */}
      <section className="section-padding bg-white">
        <Container>
          <SectionHeader
            badge="Our Values"
            title="Built on three core pillars"
            description="These fundamental principles guide every decision we make and every service we provide."
            centered
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className={`bg-white rounded-2xl p-8 shadow-sm border-2 hover:shadow-xl transition-all duration-300 h-full ${pillar.color}`}>
                  <div className="flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-sm mb-6 mx-auto">
                    <pillar.icon size={32} className="text-primary" />
                  </div>
                  
                  <h3 className="text-gray-900 text-center mb-4">{pillar.title}</h3>
                  <p className="text-gray-600 text-center">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quality & Compliance */}
      <section className="section-padding" style={{ backgroundColor: 'var(--peach-header)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-gray-900 mb-6">Quality & compliance</h2>
              <p className="text-gray-600 mb-8">
                We maintain the highest industry standards and certifications to ensure your 
                cargo is handled with the utmost care and professionalism.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {qualityHighlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                  >
                    <Award size={16} className="text-primary flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg"
                alt="Quality control and compliance"
                className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Team Stats */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-gray-600 font-medium">Team Members</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600 font-medium">Years Combined Experience</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Customer Support</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction Focus</div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Location */}
      <section className="section-padding" style={{ backgroundColor: 'var(--blush-surface)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-gray-900 mb-6">Our location</h2>
              <p className="text-gray-600 mb-8">
                Strategically located in Kuala Lumpur, we're positioned at the heart of Malaysia's 
                logistics network with easy access to major ports, airports, and transportation hubs.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Head Office</div>
                    <div className="text-gray-600">
                      Kuala Lumpur, Malaysia<br />
                      Near KLIA and Port Klang
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Operating Hours</div>
                    <div className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 8:00 AM - 1:00 PM<br />
                      24/7 Emergency Support Available
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-gray-900 mb-6">Ready to work with us?</h3>
              <p className="text-gray-600 mb-6">
                Get in touch to discuss your logistics requirements and discover how we can 
                help optimize your supply chain.
              </p>
              
              <div className="space-y-4">
                <Button className="w-full" size="lg">
                  Get a Quote
                </Button>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" size="sm">
                    Call Us
                  </Button>
                  <Button variant="outline" size="sm">
                    Email Us
                  </Button>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-500">
                <p>Response time: Same day for quotes</p>
                <p>Free consultation available</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}