import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet Rin Meng and Noah Stewart — the two developers behind Web8th. Based in Kelowna, BC and Regina, SK, we build custom websites for local businesses.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Web8th',
    description:
      'Meet Rin Meng and Noah Stewart — the two developers behind Web8th. Based in Kelowna, BC and Regina, SK, we build custom websites for local businesses.',
    url: '/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
