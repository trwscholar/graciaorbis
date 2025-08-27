'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';

const tips = [
  {
    title: "Essential customs documentation for international shipping",
    excerpt: "Learn about the key documents required for smooth customs clearance and avoid common pitfalls that cause delays.",
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "Customs",
    image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg",
    href: "/tips/customs-documentation-guide"
  },
  {
    title: "Cold chain logistics: Best practices for temperature-sensitive cargo",
    excerpt: "Discover how to maintain product quality during transport with proper cold chain management strategies.",
    date: "March 12, 2025", 
    readTime: "7 min read",
    category: "Cold Chain",
    image: "https://images.pexels.com/photos/4481942/pexels-photo-4481942.jpeg",
    href: "/tips/cold-chain-best-practices"
  },
  {
    title: "Optimizing your supply chain costs in 2025",
    excerpt: "Strategic approaches to reduce logistics costs while maintaining service quality and reliability.",
    date: "March 10, 2025",
    readTime: "6 min read", 
    category: "Cost Optimization",
    image: "https://images.pexels.com/photos/4481942/pexels-photo-4481942.jpeg",
    href: "/tips/supply-chain-cost-optimization"
  }
];

export function LatestTips() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--blush-surface)' }}>
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <SectionHeader
            badge="Latest Tips"
            title="Logistics insights and best practices"
            description="Stay informed with our expert tips and industry insights."
            className="lg:mb-0"
          />
          <Button variant="outline" asChild className="mt-8 lg:mt-0">
            <Link href="/tips">
              View all tips
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <motion.article
              key={tip.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={tip.href} className="block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/90 text-white">
                        {tip.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span>{tip.date}</span>
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{tip.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {tip.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {tip.excerpt}
                    </p>

                    <div className="flex items-center text-primary font-medium text-sm mt-4 group-hover:translate-x-1 transform transition-transform">
                      Read more
                      <ArrowRight size={14} className="ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}