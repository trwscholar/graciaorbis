'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
      <header className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
          : 'bg-transparent'
      )}>
        <div className="max-w-7xl mx-auto container-padding">
          <div className={cn(
            'flex items-center justify-between transition-all duration-300',
            isScrolled ? 'h-16' : 'h-20'
          )}>
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">GO</span>
              </div>
              <span className="font-semibold text-xl text-gray-900">Gracia Orbis</span>
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
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <span className="font-semibold text-xl">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-500 focus-ring"
                >
                  <X size={20} />
                </button>
              </div>
              
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