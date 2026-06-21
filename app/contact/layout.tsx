import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Web8th. Tell us about your project and we’ll reply with a clear next step — free quote, no commitment required.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact | Web8th',
    description:
      'Get in touch with Web8th. Tell us about your project and we’ll reply with a clear next step — free quote, no commitment required.',
    url: '/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
