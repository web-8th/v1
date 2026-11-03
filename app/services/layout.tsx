import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description:
    'One quote, one job. Web8th builds websites, blogs, booking systems, and internal tools with flat pricing, free bug fixes on everything we build, and an optional care plan. Free websites for non-profits.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Services & Pricing | Web8th',
    description:
      'One quote, one job. Web8th builds websites, blogs, booking systems, and internal tools with flat pricing, free bug fixes on everything we build, and an optional care plan. Free websites for non-profits.',
    url: '/services',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
