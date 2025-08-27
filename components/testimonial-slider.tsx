'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    content: "Gracia Orbis has been instrumental in streamlining our supply chain. Their proactive communication and reliable delivery times have helped us maintain our production schedules without any disruptions.",
    author: "Sarah Chen",
    title: "Supply Chain Director",
    company: "TechFlow Electronics",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    rating: 5
  },
  {
    id: 2,
    content: "The team at Gracia Orbis understands our cold-chain requirements perfectly. They've handled our sensitive F&B shipments with utmost care, ensuring quality is maintained from origin to destination.",
    author: "Ahmad Rahman",
    title: "Logistics Manager",
    company: "Fresh Foods Malaysia",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 5
  },
  {
    id: 3,
    content: "Outstanding service and competitive pricing. Their customs brokerage team made our international expansion seamless. We couldn't have asked for a better logistics partner.",
    author: "Jennifer Wong",
    title: "Operations Director",
    company: "Global Automotive Parts",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    rating: 5
  }
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <SectionHeader
          badge="Testimonials"
          title="Trusted by businesses across Malaysia"
          description="See what our clients say about our logistics services and partnership approach."
          centered
          className="mb-16"
        />

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100"
            >
              <div className="text-center">
                <Quote size={48} className="text-primary/20 mx-auto mb-6" />
                
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-xl text-gray-600 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonials[currentIndex].title}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={previousTestimonial}
              className="h-12 w-12 rounded-full"
            >
              <ChevronLeft size={20} />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="h-12 w-12 rounded-full"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}