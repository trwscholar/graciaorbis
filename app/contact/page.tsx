'use client';

import { useState } from 'react';
import { GradientButton } from '@/components/ui/gradient-button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

const SERVICES = [
  'Ocean Freight',
  'Air Freight',
  '3PL Warehousing',
  'Distribution & Trucking',
  'Project Cargo',
  'Customs Brokerage',
  'Heavy Parcel Delivery',
  'Last Mile Delivery',
];

const COMPANY_ADDRESS = '18-1, Jln SS19/6, Ss 19, 47500 Subang Jaya, Selangor';

export default function ContactPage() {
  const [service, setService] = useState<string>('');
  const [otherService, setOtherService] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to your /api/contact or third-party form endpoint
    setSubmitted(true);
  }

  const showOther = service === 'Other';

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    COMPANY_ADDRESS
  )}&hl=en&z=16&output=embed`;

  return (
    <main className="min-h-screen bg-[color:var(--base-background)]">
      <section className="max-w-5xl mx-auto container-padding pt-32 pb-20">
        {/* Page header */}
        <div className="mb-10">
          <p className="inline-block rounded-full border px-3 py-1 text-xs font-semibold tracking-widest uppercase text-[color:var(--brand-orange-600)] border-[color:var(--brand-orange-200)]">
            Get in touch
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            Contact <span className="text-[color:var(--brand-orange-600)]">Gracia</span>{' '}
            <span className="text-gray-900">O</span>
            <span className="text-[color:var(--brand-orange-600)]">rbis</span>
          </h1>
          <p className="mt-3 text-base md:text-lg text-gray-600 max-w-3xl">
            Tell us about your shipment and we’ll get back within one business day.
            From ocean and air to last mile, we’ll tailor the right solution for you.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Lead form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-100 bg-white/90 backdrop-blur p-6 md:p-8 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jane Doe"
                      className="placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      className="placeholder:text-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+60 12 345 6789"
                      className="placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company (optional)</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Acme Logistics Sdn Bhd"
                      className="placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Services dropdown + Other */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="service">Service</Label>
                    <select
                      id="service"
                      name="service"
                      className={cn(
                        'mt-2 w-full rounded-md border border-gray-200 bg-white px-3 py-2.5',
                        'text-sm shadow-sm outline-none focus:ring-2 focus:ring-[color:var(--brand-orange-300)]',
                        service === '' ? 'text-gray-400' : 'text-gray-900'
                      )}
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      required
                    >
                      <option value="" disabled className="text-gray-400">
                        Select a service
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s} className="text-gray-900">
                          {s}
                        </option>
                      ))}
                      <option value="Other" className="text-gray-900">Other</option>
                    </select>
                  </div>

                  {showOther && (
                    <div>
                      <Label htmlFor="otherService">Other service (optional)</Label>
                      <Input
                        id="otherService"
                        name="otherService"
                        placeholder="e.g., Cold-chain fulfillment"
                        className="placeholder:text-gray-400"
                        value={otherService}
                        onChange={(e) => setOtherService(e.target.value)}
                      />
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="details">Project Details</Label>
                  <Textarea
                    id="details"
                    name="details"
                    placeholder="Shipment origin & destination, timeline, weight/volume, special handling…"
                    className="min-h-[120px] placeholder:text-gray-400"
                    required
                  />
                </div>

                {/* Submit button (Gradient) */}
                <div className="pt-2">
                  <GradientButton type="submit" aria-label="Submit contact form">
                    SUBMIT
                  </GradientButton>

                  {submitted && (
                    <p className="mt-3 text-sm text-green-700">
                      Thanks! Your message was submitted. We’ll get back to you shortly.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Side panel: contact info */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-white/90 backdrop-blur p-6 md:p-8 shadow-sm space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">Contact information</h3>

              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="font-medium">Email: </span>
                  <a
                    href="mailto:hello@graciaorbis.com"
                    className="text-[color:var(--brand-orange-600)] hover:drop-shadow-[0_0_6px_var(--brand-orange-400)]"
                  >
                    hello@graciaorbis.com
                  </a>
                </p>
                <p>
                  <span className="font-medium">Phone: </span>
                  <a
                    href="tel:+60312345678"
                    className="text-[color:var(--brand-orange-600)] hover:drop-shadow-[0_0_6px_var(--brand-orange-400)]"
                  >
                    +60 3-1234 5678
                  </a>
                </p>
                <p>
                  <span className="font-medium">Address: </span>
                  {COMPANY_ADDRESS}
                </p>
              </div>

              <div className="rounded-xl border border-[color:var(--brand-orange-200)] p-4">
                <p className="text-sm text-gray-700">
                  Prefer WhatsApp?{' '}
                  <a
                    href="https://wa.me/60123456789?text=Hi%20Gracia%20Orbis%2C%20I’d%20like%20a%20quote"
                    className="font-semibold text-[color:var(--brand-orange-600)] hover:drop-shadow-[0_0_6px_var(--brand-orange-400)]"
                  >
                    Message us here
                  </a>
                  .
                </p>
              </div>

              <p className="text-xs text-gray-500">
                By submitting this form, you agree to be contacted about your inquiry. We respect your
                privacy and never share your information.
              </p>
            </div>
          </div>
        </div>

        {/* Map - subtle card so it’s not distracting */}
        <div className="mt-12">
          <h2 className="sr-only">Find us</h2>
          <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden bg-white">
            <iframe
              title="Gracia Orbis location map"
              src={mapSrc}
              className="w-full h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
