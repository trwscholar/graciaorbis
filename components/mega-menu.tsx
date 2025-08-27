import Link from 'next/link';
import { 
  Ship, 
  Plane, 
  Warehouse, 
  Truck, 
  Package, 
  FileText, 
  Package2, 
  MapPin 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface MegaMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const services = [
  {
    icon: Ship,
    name: 'Ocean Freight',
    description: 'FCL/LCL shipping worldwide',
    href: '/services/ocean-freight'
  },
  {
    icon: Plane,
    name: 'Air Freight',
    description: 'Fast air cargo solutions',
    href: '/services/air-freight'
  },
  {
    icon: Warehouse,
    name: '3PL Warehousing',
    description: 'Storage and distribution',
    href: '/services/3pl-warehousing'
  },
  {
    icon: Truck,
    name: 'Distribution & Trucking',
    description: 'Local and long-haul delivery',
    href: '/services/distribution-trucking'
  },
  {
    icon: Package,
    name: 'Project Cargo',
    description: 'Oversize and heavy cargo',
    href: '/services/project-cargo'
  },
  {
    icon: FileText,
    name: 'Customs Brokerage',
    description: 'Clearance and documentation',
    href: '/services/customs-brokerage'
  },
  {
    icon: Package2,
    name: 'Heavy Parcel Delivery',
    description: 'Specialized parcel handling',
    href: '/services/heavy-parcel'
  },
  {
    icon: MapPin,
    name: 'Last Mile Delivery',
    description: 'Final destination delivery',
    href: '/services/last-mile'
  }
];

export function MegaMenu({ isOpen, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  return (
    <div
      className={cn(
        'absolute top-full left-0 w-full bg-white shadow-lg border-t transition-all duration-300 overflow-hidden',
        isOpen ? 'opacity-100 visible max-h-96' : 'opacity-0 invisible max-h-0'
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto container-padding py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="group p-4 rounded-lg hover:bg-gray-50 transition-colors focus-ring"
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {service.name}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t">
          <Link
            href="/services"
            className="text-primary font-medium hover:text-primary/80 transition-colors focus-ring"
          >
            View all services →
          </Link>
        </div>
      </div>
    </div>
  );
}