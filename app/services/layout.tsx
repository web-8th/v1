import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description:
    'Web8th offers three service tiers — Launch Package, Growth Plan, and À La Carte — plus free websites for non-profits. Transparent pricing, no lock-in contracts.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services & Pricing | Web8th',
    description:
      'Web8th offers three service tiers — Launch Package, Growth Plan, and À La Carte — plus free websites for non-profits. Transparent pricing, no lock-in contracts.',
    url: '/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
