import { notFound } from 'next/navigation';
import { ServiceDetail } from '@/components/service-detail';

const services = {
  'ocean-freight': {
    title: 'Ocean Freight',
    description: 'Comprehensive sea freight solutions for global shipping',
    overview: 'Our ocean freight services provide cost-effective shipping solutions for businesses of all sizes. From full container loads to less-than-container-load shipments, we handle your cargo with care and precision.',
    capabilities: [
      'Full Container Load (FCL)',
      'Less Container Load (LCL)',
      'Breakbulk Cargo',
      'Trans-loading Services',
      'Perishables Handling',
      'Ship-to-Ship Operations',
      'Customs Clearance'
    ],
    differentiators: [
      'Direct relationships with major shipping lines',
      'Competitive rates through volume agreements',
      'Real-time tracking and updates',
      'Expert handling of documentation'
    ],
    process: [
      { step: 'Quote Request', description: 'Submit your shipping requirements' },
      { step: 'Booking Confirmation', description: 'Secure space on vessel' },
      { step: 'Documentation', description: 'Prepare shipping documents' },
      { step: 'Cargo Collection', description: 'Pick up from your facility' },
      { step: 'Port Operations', description: 'Loading and customs clearance' },
      { step: 'Transit', description: 'Sea voyage with tracking updates' },
      { step: 'Destination', description: 'Customs clearance and delivery' }
    ],
    faqs: [
      {
        question: 'What is the difference between FCL and LCL?',
        answer: 'FCL (Full Container Load) means you rent the entire container for your cargo. LCL (Less Container Load) means your cargo shares container space with other shipments, making it cost-effective for smaller volumes.'
      },
      {
        question: 'How long does ocean freight take?',
        answer: 'Transit times vary by route. Typical times are 7-14 days within Asia, 14-21 days to Europe, and 21-35 days to North America. We provide accurate estimates based on your specific route.'
      },
      {
        question: 'What documentation is required?',
        answer: 'Standard documents include commercial invoice, packing list, bill of lading, and certificate of origin. Additional documents may be required based on commodity and destination.'
      }
    ],
    documents: [
      'Commercial Invoice',
      'Packing List',
      'Bill of Lading',
      'Certificate of Origin',
      'Export License (if required)',
      'Insurance Certificate'
    ]
  },
  'air-freight': {
    title: 'Air Freight',
    description: 'Fast and reliable air cargo services worldwide',
    overview: 'When time is critical, our air freight services ensure your cargo reaches its destination quickly and safely. We offer comprehensive door-to-door solutions with real-time tracking.',
    capabilities: [
      'Door-to-Door Service',
      'Airport-to-Airport',
      'Charter Services',
      'Break Bulk Handling',
      'Consolidation Services',
      'Transhipment',
      'Truck Flight Services',
      'Specialized Cargo',
      'Customs Clearance'
    ],
    differentiators: [
      'Partnerships with major airlines',
      'Express and economy options',
      'Temperature-controlled solutions',
      'Dangerous goods certified handlers'
    ],
    process: [
      { step: 'Booking', description: 'Reserve cargo space on flight' },
      { step: 'Documentation', description: 'Prepare air waybill and customs docs' },
      { step: 'Collection', description: 'Pick up from your location' },
      { step: 'Airport Processing', description: 'Security screening and loading' },
      { step: 'Flight', description: 'Air transport with tracking' },
      { step: 'Destination', description: 'Customs clearance and delivery' }
    ],
    faqs: [
      {
        question: 'How fast is air freight delivery?',
        answer: 'Air freight typically takes 1-3 days for most international destinations, plus customs clearance time. Express services can deliver within 24-48 hours to major cities.'
      },
      {
        question: 'What are the weight and size limits?',
        answer: 'Standard cargo aircraft can handle up to 100+ tons. Size limits vary by aircraft type. We can arrange charter flights for oversized cargo that exceeds standard limits.'
      },
      {
        question: 'Can you handle dangerous goods?',
        answer: 'Yes, we are certified to handle dangerous goods according to IATA regulations. Our team is trained in proper packaging, documentation, and handling procedures.'
      }
    ],
    documents: [
      'Air Waybill',
      'Commercial Invoice',
      'Packing List',
      'Export License (if required)',
      'Dangerous Goods Declaration (if applicable)',
      'Certificate of Origin'
    ]
  },
  '3pl-warehousing': {
    title: '3PL Warehousing',
    description: 'Complete storage and distribution solutions',
    overview: 'Our modern warehousing facilities provide secure storage, inventory management, and distribution services. From receiving to shipping, we handle your goods with precision and care.',
    capabilities: [
      'Climate-Controlled Storage',
      'Inventory Management',
      'Pick and Pack Services',
      'Cross-Docking',
      'Container Loading/Unloading',
      'Quality Control',
      'Kitting and Assembly',
      'Returns Processing'
    ],
    differentiators: [
      'State-of-the-art warehouse management system',
      'Real-time inventory visibility',
      'Flexible storage solutions',
      'Experienced warehouse team'
    ],
    process: [
      { step: 'Receiving', description: 'Goods inspection and check-in' },
      { step: 'Storage', description: 'Organized placement in warehouse' },
      { step: 'Inventory', description: 'Real-time stock management' },
      { step: 'Order Processing', description: 'Pick, pack, and prepare orders' },
      { step: 'Quality Check', description: 'Final inspection before dispatch' },
      { step: 'Shipping', description: 'Dispatch to final destination' }
    ],
    faqs: [
      {
        question: 'What types of goods can you store?',
        answer: 'We can store most types of goods including general cargo, electronics, automotive parts, consumer goods, and temperature-sensitive items in our climate-controlled areas.'
      },
      {
        question: 'How do you track inventory?',
        answer: 'We use advanced warehouse management systems with real-time tracking. You can access inventory levels, movement history, and reports through our online portal.'
      },
      {
        question: 'What are your warehouse operating hours?',
        answer: 'Our warehouses operate 24/7 for receiving and shipping. Standard pick and pack operations are during business hours, with extended hours available upon request.'
      }
    ],
    documents: [
      'Goods Receipt Note',
      'Inventory List',
      'Storage Agreement',
      'Delivery Instructions',
      'Insurance Documentation'
    ]
  },
  'distribution-trucking': {
    title: 'Distribution & Trucking',
    description: 'Local and long-haul trucking solutions',
    overview: 'Our comprehensive trucking services cover local delivery, long-haul transport, and cross-border shipping. With a modern fleet and experienced drivers, we ensure safe and timely delivery.',
    capabilities: [
      'Less-Than-Truckload (LTL)',
      'Full Truckload (FTL)',
      'Local Delivery',
      'Long-Haul Transport',
      'Cross-Border Shipping',
      'Bonded Trucking',
      'Temperature-Controlled Transport',
      'Oversized Cargo'
    ],
    differentiators: [
      'Modern GPS-tracked fleet',
      'Experienced professional drivers',
      'Flexible scheduling options',
      'Comprehensive insurance coverage'
    ],
    process: [
      { step: 'Route Planning', description: 'Optimize delivery routes' },
      { step: 'Loading', description: 'Secure cargo loading' },
      { step: 'Transit', description: 'GPS-tracked transport' },
      { step: 'Updates', description: 'Real-time status updates' },
      { step: 'Delivery', description: 'Safe delivery with POD' },
      { step: 'Confirmation', description: 'Delivery confirmation and documentation' }
    ],
    faqs: [
      {
        question: 'What areas do you cover?',
        answer: 'We provide trucking services throughout Malaysia and cross-border to Singapore and Thailand. Our network covers major cities and industrial areas.'
      },
      {
        question: 'Do you offer same-day delivery?',
        answer: 'Yes, we offer same-day delivery for urgent shipments within our local coverage areas. Express services are available for time-critical deliveries.'
      },
      {
        question: 'How do you handle fragile cargo?',
        answer: 'We use specialized equipment and packaging for fragile items. Our drivers are trained in careful handling, and we provide additional insurance coverage for high-value goods.'
      }
    ],
    documents: [
      'Delivery Order',
      'Proof of Delivery',
      'Transport Agreement',
      'Insurance Certificate',
      'Customs Documentation (for cross-border)'
    ]
  },
  'project-cargo': {
    title: 'Project Cargo',
    description: 'Specialized handling for oversized and heavy cargo',
    overview: 'Our project cargo services handle complex, oversized, and heavy shipments that require specialized equipment and expertise. From planning to execution, we manage every detail.',
    capabilities: [
      'Site Inspection and Survey',
      'Route Planning and Permits',
      'Specialized Equipment',
      'Heavy Lift Operations',
      'Break Bulk Handling',
      'Ship Chartering',
      'Customs Coordination',
      'Project Management'
    ],
    differentiators: [
      'Experienced project managers',
      'Specialized heavy-lift equipment',
      'Comprehensive risk management',
      'End-to-end project coordination'
    ],
    process: [
      { step: 'Assessment', description: 'Site survey and feasibility study' },
      { step: 'Planning', description: 'Detailed project planning and permits' },
      { step: 'Preparation', description: 'Equipment mobilization and setup' },
      { step: 'Execution', description: 'Careful loading and transport' },
      { step: 'Monitoring', description: 'Continuous project monitoring' },
      { step: 'Completion', description: 'Safe delivery and installation support' }
    ],
    faqs: [
      {
        question: 'What size and weight limits can you handle?',
        answer: 'We can handle cargo up to 500+ tons and oversized dimensions. Each project is assessed individually to determine the best handling approach and equipment required.'
      },
      {
        question: 'Do you handle permits and approvals?',
        answer: 'Yes, we manage all necessary permits, route approvals, and regulatory compliance. Our team coordinates with authorities to ensure smooth project execution.'
      },
      {
        question: 'How do you ensure cargo safety?',
        answer: 'We conduct thorough risk assessments, use certified equipment, employ experienced operators, and maintain comprehensive insurance coverage for all project cargo operations.'
      }
    ],
    documents: [
      'Project Specification',
      'Transport Permits',
      'Route Survey Report',
      'Lifting Plan',
      'Insurance Certificate',
      'Safety Documentation'
    ]
  },
  'customs-brokerage': {
    title: 'Customs Brokerage',
    description: 'Expert customs clearance and trade compliance',
    overview: 'Navigate complex customs procedures with our expert brokerage services. We ensure compliance with all regulations while minimizing delays and costs.',
    capabilities: [
      'Import/Export Clearance',
      'Certificate of Origin Applications',
      'EDI/SMK Processing',
      'Permits and Exemptions',
      'Documentation Advisory',
      'Tariff Code Consultation',
      'Customs Inspections',
      'Trade Compliance'
    ],
    differentiators: [
      'Licensed customs brokers',
      'Deep regulatory knowledge',
      'Electronic processing systems',
      'Proactive compliance monitoring'
    ],
    process: [
      { step: 'Documentation Review', description: 'Verify all required documents' },
      { step: 'Classification', description: 'Determine correct tariff codes' },
      { step: 'Declaration', description: 'Submit customs declarations' },
      { step: 'Assessment', description: 'Duty and tax calculation' },
      { step: 'Inspection', description: 'Coordinate customs inspections' },
      { step: 'Release', description: 'Obtain cargo release authorization' }
    ],
    faqs: [
      {
        question: 'What documents do I need for customs clearance?',
        answer: 'Basic documents include commercial invoice, packing list, bill of lading/airway bill, and certificate of origin. Additional documents may be required based on the commodity and country regulations.'
      },
      {
        question: 'How long does customs clearance take?',
        answer: 'Standard clearance typically takes 1-3 business days. Complex shipments or those requiring inspections may take longer. We provide regular updates throughout the process.'
      },
      {
        question: 'Can you help with duty optimization?',
        answer: 'Yes, our experts can advise on duty optimization strategies, including proper classification, free trade agreements, and available exemptions to minimize your costs legally.'
      }
    ],
    documents: [
      'Commercial Invoice',
      'Packing List',
      'Bill of Lading/Air Waybill',
      'Certificate of Origin',
      'Import/Export Permits',
      'Customs Declaration'
    ]
  },
  'heavy-parcel': {
    title: 'Heavy Parcel Delivery',
    description: 'Specialized handling for heavy and bulky parcels',
    overview: 'Our heavy parcel delivery service handles packages that exceed standard courier limits. With specialized equipment and trained personnel, we ensure safe delivery of your heavy items.',
    capabilities: [
      'Heavy Package Handling',
      'White Glove Service',
      'Appointment Scheduling',
      'Two-Person Delivery',
      'Assembly Services',
      'Packaging Solutions',
      'Insurance Coverage',
      'Proof of Delivery'
    ],
    differentiators: [
      'Specialized handling equipment',
      'Trained delivery personnel',
      'Flexible delivery options',
      'Comprehensive tracking'
    ],
    process: [
      { step: 'Assessment', description: 'Evaluate package requirements' },
      { step: 'Scheduling', description: 'Arrange convenient delivery time' },
      { step: 'Preparation', description: 'Prepare specialized equipment' },
      { step: 'Collection', description: 'Careful pickup from origin' },
      { step: 'Transport', description: 'Secure transport to destination' },
      { step: 'Delivery', description: 'Professional delivery and setup' }
    ],
    faqs: [
      {
        question: 'What weight limits do you handle?',
        answer: 'We handle parcels from 30kg up to 500kg. For items requiring special equipment or multiple personnel, we provide customized solutions based on your specific needs.'
      },
      {
        question: 'Do you provide assembly services?',
        answer: 'Yes, we offer basic assembly services for furniture and equipment. Our trained personnel can help with unpacking and basic setup at the delivery location.'
      },
      {
        question: 'Can I schedule a specific delivery time?',
        answer: 'Absolutely. We offer appointment scheduling to ensure someone is available to receive your heavy parcel. We provide delivery windows and confirmation calls.'
      }
    ],
    documents: [
      'Delivery Order',
      'Handling Instructions',
      'Insurance Documentation',
      'Proof of Delivery',
      'Assembly Instructions (if applicable)'
    ]
  },
  'last-mile': {
    title: 'Last Mile Delivery',
    description: 'Final destination delivery solutions',
    overview: 'Complete your supply chain with our reliable last mile delivery services. From warehouses to doorsteps, we ensure your customers receive their orders on time and in perfect condition.',
    capabilities: [
      'Same-Day Delivery',
      'Next-Day Delivery',
      'Scheduled Delivery',
      'Cash on Delivery',
      'Signature Required',
      'Photo Proof of Delivery',
      'Failed Delivery Management',
      'Returns Processing'
    ],
    differentiators: [
      'Extensive delivery network',
      'Real-time tracking and updates',
      'Flexible delivery options',
      'High success rate'
    ],
    process: [
      { step: 'Order Processing', description: 'Receive and process delivery orders' },
      { step: 'Route Optimization', description: 'Plan efficient delivery routes' },
      { step: 'Dispatch', description: 'Assign to delivery personnel' },
      { step: 'Delivery', description: 'Deliver to final destination' },
      { step: 'Confirmation', description: 'Obtain proof of delivery' },
      { step: 'Updates', description: 'Send delivery confirmation' }
    ],
    faqs: [
      {
        question: 'What delivery options do you offer?',
        answer: 'We offer same-day, next-day, and scheduled delivery options. Customers can choose their preferred delivery time slots, and we provide real-time tracking throughout the process.'
      },
      {
        question: 'What happens if delivery fails?',
        answer: 'We attempt redelivery and provide multiple options including alternative delivery locations, rescheduling, or return to sender based on customer preferences.'
      },
      {
        question: 'Do you handle cash on delivery?',
        answer: 'Yes, we offer cash on delivery services with secure payment collection and remittance. We also support digital payment options for customer convenience.'
      }
    ],
    documents: [
      'Delivery Manifest',
      'Proof of Delivery',
      'Customer Instructions',
      'Payment Receipt (for COD)',
      'Return Authorization (if needed)'
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];
  
  if (!service) {
    return {
      title: 'Service Not Found - Gracia Orbis',
    };
  }

  return {
    title: `${service.title} - Gracia Orbis`,
    description: service.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}