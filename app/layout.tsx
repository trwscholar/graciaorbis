import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Gracia Orbis - End-to-end logistics solutions',
  description: 'Cost-effective, proactive, and reliable delivery across Malaysia and beyond. Air and ocean freight, bonded trucking, 3PL warehousing, customs brokerage, and last mile.',
  keywords: 'logistics, freight, shipping, warehousing, customs, malaysia',
  openGraph: {
    title: 'Gracia Orbis - End-to-end logistics solutions',
    description: 'Cost-effective, proactive, and reliable delivery across Malaysia and beyond.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}