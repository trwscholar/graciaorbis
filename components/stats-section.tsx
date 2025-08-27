'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Container } from '@/components/ui/container';

const stats = [
  { value: 500, suffix: '+', label: 'Shipments Monthly' },
  { value: 15, suffix: '+', label: 'Countries Served' },
  { value: 99.8, suffix: '%', label: 'On-time Delivery' },
  { value: 7, suffix: 'yrs', label: 'Industry Experience' },
];

function CountUp({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const startCount = 0;

      const updateCount = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentCount = startCount + (end - startCount) * easeOutCubic;
        
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={countRef}>
      {Math.round(count * 10) / 10}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}