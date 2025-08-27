import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  const services = [
    { name: 'Ocean Freight', href: '/services/ocean-freight' },
    { name: 'Air Freight', href: '/services/air-freight' },
    { name: '3PL Warehousing', href: '/services/3pl-warehousing' },
    { name: 'Distribution & Trucking', href: '/services/distribution-trucking' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Tips & Insights', href: '/tips' },
    { name: 'Contact', href: '/contact' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <Container>
          <div className="py-12">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-4">Stay updated with logistics insights</h3>
              <p className="text-gray-400 mb-8">
                Get the latest shipping updates, industry news, and exclusive tips delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">GO</span>
                </div>
                <span className="font-semibold text-xl">Gracia Orbis</span>
              </div>
              <p className="text-gray-400">
                Your trusted logistics partner since 2018. Delivering excellence across Malaysia and beyond.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone size={18} className="text-primary" />
                  <span>+60 3-1234 5678</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail size={18} className="text-primary" />
                  <span>info@graciaorbis.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin size={18} className="text-primary" />
                  <span>Kuala Lumpur, Malaysia</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Get in Touch</h4>
              <p className="text-gray-400 mb-6">
                Ready to ship? Get a quote or speak with our logistics experts.
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Get Quote
                </Button>
                <div className="flex space-x-3">
                  <a href="#" className="flex-1 text-center py-2 border border-gray-700 rounded-lg hover:border-primary transition-colors">
                    <Facebook size={20} className="mx-auto" />
                  </a>
                  <a href="#" className="flex-1 text-center py-2 border border-gray-700 rounded-lg hover:border-primary transition-colors">
                    <Linkedin size={20} className="mx-auto" />
                  </a>
                  <a href="#" className="flex-1 text-center py-2 border border-gray-700 rounded-lg hover:border-primary transition-colors">
                    <Twitter size={20} className="mx-auto" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Gracia Orbis. All rights reserved.
            </div>
            <div className="flex space-x-6">
              {legal.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}