'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MegaMenu } from '@/components/mega-menu';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed Tips
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300',
          'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
        )}
      >
        <div className="max-w-7xl mx-auto container-padding">
          <div
            className={cn(
              'flex items-center justify-between transition-all duration-300',
              isScrolled ? 'h-20' : 'h-24'
            )}
          >
            {/* Brand */}
            <Link href="/" className="flex items-center gap-4" aria-label="Go to home">
              <Image
                src="/gracialogo.png" // change to .svg if needed
                alt="Gracia Orbis Logo"
                width={140}
                height={140}
                className="h-14 w-auto object-contain md:h-16"
                priority
              />
              <div className="leading-tight">
                <div className="text-[12px] sm:text-[13px] font-semibold tracking-[0.24em] uppercase text-[color:var(--brand-orange-600)]">
                  Another Delivery By
                </div>
                <div className="text-2xl sm:text-[28px] md:text-3xl font-bold">
                  <span className="text-[color:var(--brand-orange-600)]">G</span>
                  <span className="text-gray-900">racia </span>
                  <span className="text-gray-900">O</span>
                  <span className="text-[color:var(--brand-orange-600)]">rbis</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
                >
                  {item.hasDropdown ? (
                    // Make Services a real link; still opens mega on hover/focus
                    <Link
                      href={item.href}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onFocus={() => setIsServicesOpen(true)}
                      className="text-gray-800 transition-colors font-medium text-[17px] focus-ring hover:text-[color:var(--brand-orange-600)] hover:drop-shadow-[0_0_6px_var(--brand-orange-400)]"
                      aria-haspopup="true"
                      aria-expanded={isServicesOpen}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-800 transition-colors font-medium text-[17px] focus-ring hover:text-[color:var(--brand-orange-600)] hover:drop-shadow-[0_0_6px_var(--brand-orange-400)]"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button size="lg" variant="outline" className="px-5 py-2.5 text-[15px] hover:drop-shadow-[0_0_8px_var(--brand-orange-300)] hover:border-[color:var(--brand-orange-400)]">
                Get Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 text-gray-700 focus-ring"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        <MegaMenu
          isOpen={isServicesOpen}
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        />
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl">
            <div className="p-7">
              <div className="flex items-center justify-between mb-10">
                <span className="font-semibold text-2xl">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2.5 text-gray-500 focus-ring"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="space-y-7">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-xl font-medium text-gray-900 focus-ring hover:text-[color:var(--brand-orange-600)] hover:drop-shadow-[0_0_6px_var(--brand-orange-400)]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-10 pt-8 border-t space-y-4">
                <Button className="w-full" size="lg">
                  Get Quote
                </Button>

                <div className="flex space-x-3">
                  <Button variant="outline" size="lg" className="flex-1">
                    <Phone size={18} className="mr-2" />
                    Call
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    <MessageCircle size={18} className="mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
