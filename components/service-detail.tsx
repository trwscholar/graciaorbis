'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock, FileText, ArrowRight, Phone, Mail } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface ServiceDetailProps {
  service: {
    title: string;
    description: string;
    overview: string;
    capabilities: string[];
    differentiators: string[];
    process: Array<{
      step: string;
      description: string;
    }>;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
    documents: string[];
  };
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50/50 to-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  Logistics Service
                </div>
                
                <h1 className="text-gray-900">{service.title}</h1>
                <p className="text-xl text-gray-600 leading-relaxed">{service.overview}</p>
              </motion.div>
            </div>

            {/* CTA Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24">
                <h3 className="text-gray-900 mb-4">Get a Quote</h3>
                <p className="text-gray-600 text-sm mb-6">
                  Ready to ship? Get a competitive quote for your {service.title.toLowerCase()} needs.
                </p>
                
                <div className="space-y-3 mb-6">
                  <Button className="w-full" size="lg">
                    Request Quote
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      <Phone size={14} className="mr-1" />
                      Call
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      <Mail size={14} className="mr-1" />
                      Email
                    </Button>
                  </div>
                </div>

                <div className="text-xs text-gray-500 space-y-1">
                  <div className="flex items-center">
                    <CheckCircle size={12} className="text-green-500 mr-2" />
                    Free consultation
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={12} className="text-green-500 mr-2" />
                    Same-day response
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={12} className="text-green-500 mr-2" />
                    Competitive rates
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Capabilities Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--blush-surface)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-gray-900 mb-6">Key Capabilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.capabilities.map((capability, index) => (
                  <motion.div
                    key={capability}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                  >
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{capability}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-gray-900 mb-6">Why Choose Us</h2>
              <div className="space-y-4">
                {service.differentiators.map((differentiator, index) => (
                  <motion.div
                    key={differentiator}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{differentiator}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your cargo is handled with care and delivered on time.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-primary to-primary transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {/* Step circle */}
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-white border-4 border-primary rounded-full shadow-lg relative z-10">
                    <span className="text-primary font-bold text-lg">{index + 1}</span>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-gray-900">{step.step}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--peach-header)' }}>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-gray-900 mb-6">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200">
                    <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                      <span className="font-medium text-gray-900">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-gray-900 mb-6">Required Documents</h2>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText size={24} className="text-primary" />
                  <h3 className="text-gray-900">Document Checklist</h3>
                </div>
                
                <div className="space-y-3">
                  {service.documents.map((document, index) => (
                    <div key={document} className="flex items-center space-x-3">
                      <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center">
                        <CheckCircle size={16} className="text-primary" />
                      </div>
                      <span className="text-gray-700">{document}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Need help?</strong> Our documentation team can assist you with preparing 
                    all required documents for smooth processing.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-gradient">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-white">Ready to get started?</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Get a competitive quote for your {service.title.toLowerCase()} requirements. 
                Our experts are ready to help optimize your logistics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/95 text-base px-8">
                Get Quote Now
                <ArrowRight size={18} className="ml-2" />
              </Button>
              
              <div className="flex items-center space-x-6">
                <a 
                  href="tel:+60312345678" 
                  className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
                >
                  <Phone size={18} />
                  <span className="font-medium">+60 3-1234 5678</span>
                </a>
                
                <a 
                  href="mailto:info@graciaorbis.com"
                  className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
                >
                  <Mail size={18} />
                  <span className="font-medium">info@graciaorbis.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}