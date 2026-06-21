import type { Metadata } from 'next';
import { Geist, Geist_Mono, Merriweather } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider } from '@/contexts/AuthContext';
import { ToastProvider } from '@/contexts/ToastContext';
import { Toaster } from '@/components/ui/sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const merriweather = Merriweather({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://web8th.ca'),
  title: {
    template: '%s | Web8th',
    default: 'Web8th — Web Design Studio in Kelowna & Regina',
  },
  description:
    'Web8th is a two-person web design studio serving local businesses in Kelowna, BC and Regina, SK. Custom websites, on-page SEO, and ongoing support — no templates, no agency overhead.',
  openGraph: {
    type: 'website',
    siteName: 'Web8th',
    locale: 'en_CA',
    images: [{ url: '/icons/logo_black_bg_png_padded.png', alt: 'Web8th logo' }],
  },
  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/icons/favicon-32x32.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Web8th',
  alternateName: ['Web 8th', 'Web8', 'Web-8th'],
  url: 'https://web8th.ca',
  description:
    'Web8th is a two-person web design studio serving local businesses in Kelowna, BC and Regina, SK.',
  logo: 'https://web8th.ca/icons/logo_black_bg_png_padded.png',
  areaServed: [
    { '@type': 'City', name: 'Kelowna', containedInPlace: { '@type': 'State', name: 'British Columbia' } },
    { '@type': 'City', name: 'Regina', containedInPlace: { '@type': 'State', name: 'Saskatchewan' } },
  ],
  founder: [
    { '@type': 'Person', name: 'Rin Meng', jobTitle: 'Co-founder & Developer' },
    { '@type': 'Person', name: 'Noah Stewart', jobTitle: 'Co-founder & Developer' },
  ],
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 2 },
  serviceType: ['Web Design', 'Web Development', 'SEO', 'Custom CMS'],
  sameAs: ['https://www.linkedin.com/in/rinmeng/', 'https://www.linkedin.com/in/nostew/'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable}
          antialiased`}
      >
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AuthProvider>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <ToastProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
              <Toaster />
              <Analytics />
            </ToastProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
