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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Tips', href: '/tips' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto container-padding">
          <div
            className={cn(
              'flex items-center justify-between transition-all duration-300',
              isScrolled ? 'h-16' : 'h-20'
            )}
          >
            {/* Brand with logo + text */}
            <Link href="/" className="flex items-center gap-3" aria-label="Go to home">
              <Image
                src="/gracialogo.png" // change extension if it's .svg
                alt="Gracia Orbis Logo"
                width={100}
                height={100}
                className="h-100 w-100 object-fill"
                priority
              />

              <div className="leading-tight">
                <div className="text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] uppercase text-[color:var(--brand-orange-600)]">
                  Another Delivery By
                </div>
                <div className="text-lg sm:text-xl md:text-2xl font-bold">
                  {/* Gracia */}
                  <span className="text-[color:var(--brand-orange-600)]">G</span>
                  <span className="text-gray-900">racia </span>
                  {/* Orbis */}
                  <span className="text-gray-900">O</span>
                  <span className="text-[color:var(--brand-orange-600)]">rbis</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors font-medium focus-ring"
                    >
                      <span>{item.name}</span>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-primary transition-colors font-medium focus-ring"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button size="sm" variant="outline">
                Get Quote
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 focus-ring"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="p-6">
              {/* Mobile menu header */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-semibold text-xl">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-500 focus-ring"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="space-y-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-lg font-medium text-gray-900 focus-ring"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Actions */}
              <div className="mt-8 pt-8 border-t space-y-4">
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
