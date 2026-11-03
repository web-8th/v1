'use client';

import { useEffect } from 'react';
import Link from 'next/link';

import { ArrowDown, ArrowRight, Check, Plus } from 'lucide-react';

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { Text } from '@/components/Text';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { getDelayClass } from '@/utils/animations';
import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars';
import { FireworksBackground } from '@/components/animate-ui/components/backgrounds/fireworks';

const pageTiers = [
  {
    label: 'Tier 1',
    name: 'Static page',
    description:
      'No major functionality. Best for advertising pages, about pages, team pages, and simple landing pages.',
    examples: ['About', 'Team', 'Landing page'],
  },
  {
    label: 'Tier 2',
    name: 'Functional page',
    description:
      'A page that does something, like a contact form, newsletter signup, or booking request.',
    examples: ['Contact form', 'Booking request', 'Quote request'],
  },
  {
    label: 'Tier 3',
    name: 'Custom feature or tool',
    description:
      'Built-in functionality your business runs on, like a blog, admin dashboard, client portal, or integration with your existing tools.',
    examples: ['Blog', 'Admin dashboard', 'Client portal', 'Integrations'],
  },
];

const fixesCovered = [
  'Bugs in anything we built',
  'Small tweaks like text or image swaps',
  'Anything not working the way we quoted it',
];

const fixesQuoted = [
  'New pages or features',
  'Redesigns or larger batches of changes',
  'Changes to what the site or tool does',
];

const carePlan = [
  'Hosting, domain, and SSL renewals',
  'Security and dependency updates',
  'Backups and uptime monitoring',
];

const getTierBadgeClass = (index: number) => {
  if (index === 0) return 'border-primary/50 border-2';
  if (index === 1) return 'border-primary/70 border-4';
  return 'border-primary border-6'; // tier 3 = full
};

const guaranteedServices = [
  {
    title: 'Domain & hosting setup',
    description:
      'We handle everything from picking the right domain name for your business to configuring hosting and deploying your site. You never have to touch a control panel.',
  },
  {
    title: 'Google Business Profile setup',
    description:
      'Setup or cleanup support so your business appears clearly in local search.',
  },
  {
    title: 'Design & structure consulting',
    description:
      'Not sure what your site needs? We bring 4+ years of web design experience to help you decide on layout, structure, and what will actually work for your audience.',
  },
  {
    title: 'Domain name guidance',
    description:
      'We help you find a domain that fits your brand and budget, clear, memorable, and priced fairly. No upsells, just honest recommendations.',
  },
  {
    title: 'Photography referrals',
    description:
      "We'll connect you with trusted local photographers when you need shots for your site. Photographer fees apply, we just make the introduction.",
  },
];

export default function ServicesPage() {
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    const scrollToHash = () => {
      const { hash } = window.location;
      if (!hash) {
        return;
      }
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section
        className='relative flex h-screen flex-col items-center justify-center gap-4 px-6
          overflow-hidden text-center'
      >
        <StarsBackground className='absolute inset-0 rounded-xl' />
        <div className='relative z-10 flex max-w-3xl flex-col items-center gap-4'>
          <Text
            variant='hd-xxl'
            className={cn(
              'tracking-tight fade-in-from-bottom not-dark:text-background',
              getDelayClass(1)
            )}
          >
            From a simple site to the tools that run your business
          </Text>
          <Text
            variant='muted'
            className={cn(
              'not-dark:text-muted-background fade-in-from-bottom ',
              getDelayClass(2)
            )}
          >
            One quote, one job. We price by what each page needs to do, from a simple
            landing page up to a full admin dashboard, and fix what we build if it breaks.
          </Text>
          <Button asChild className={cn('mt-4 fade-in-from-bottom', getDelayClass(3))}>
            <Link href='#pricing'>
              How we quote <ArrowDown />
            </Link>
          </Button>
        </div>
      </section>

      <div
        id='pricing'
        className='py-16 container mx-auto flex w-full max-w-6xl flex-col gap-14 px-4
          sm:px-6 border-x lg:px-8'
      >
        <section className='space-y-6'>
          <div className={cn('space-y-2 fade-in-from-bottom', getDelayClass(1))}>
            <Text variant='hd-xl' className='tracking-tight md:text-4xl'>
              How we quote pages
            </Text>
            <Text variant='muted' className='max-w-3xl text-muted-foreground'>
              A website is usually a mix of page types. We price each page by the work it
              actually needs, so a simple about page costs less than a page with forms,
              bookings, or a custom tool behind it. You get one flat quote for the whole
              job.
            </Text>
          </div>
          <div className='grid gap-4 md:grid-cols-3'>
            {pageTiers.map((tier, index) => (
              <Card
                key={tier.label}
                className={cn(
                  'fade-in-from-bottom',
                  getDelayClass(index + 3),
                  getTierBadgeClass(index)
                )}
              >
                <CardHeader className='gap-3'>
                  <Badge variant='outline' className='w-fit bg-primary text-white'>
                    {tier.label}
                  </Badge>
                  <CardTitle>
                    <Text>{tier.name}</Text>
                  </CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className='flex flex-wrap gap-2'>
                  {tier.examples.map((example) => (
                    <Badge key={example} variant='secondary'>
                      {example}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* One quote, one job */}
        <section className='flex flex-col gap-4'>
          <Text variant='hd-xl' className={cn('fade-in-from-bottom', getDelayClass(1))}>
            One quote. One job.
          </Text>
          <Text
            variant='muted'
            className={cn(
              'max-w-3xl text-muted-foreground fade-in-from-bottom',
              getDelayClass(2)
            )}
          >
            Tell us what you need, whether it&apos;s a new site, a blog, a booking system,
            or an internal tool. We scope it, quote it once, and build it. No packages, no
            retainers, no lock-in.
          </Text>
          <div className='grid gap-4 md:grid-cols-2'>
            <Card
              className={cn(
                'fade-in-from-bottom border-primary ring-1 ring-primary/20',
                getDelayClass(3)
              )}
            >
              <CardHeader className='gap-2'>
                <CardTitle>
                  <Text>If something breaks, we fix it</Text>
                </CardTitle>
                <CardDescription>
                  <Badge variant='outline' className='text-muted-foreground'>
                    Free, on every job
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-2'>
                {fixesCovered.map((item) => (
                  <div key={item} className='flex items-start gap-2'>
                    <Check className='mt-0.5 size-3.5 shrink-0 text-primary' />
                    <Text variant='muted' size='sm'>
                      {item}
                    </Text>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className={cn('fade-in-from-bottom', getDelayClass(4))}>
              <CardHeader className='gap-2'>
                <CardTitle>
                  <Text>Bigger changes get a new quote</Text>
                </CardTitle>
                <CardDescription>
                  <Badge variant='outline' className='text-muted-foreground'>
                    Flat fee, same as the first job
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-2'>
                {fixesQuoted.map((item) => (
                  <div key={item} className='flex items-start gap-2'>
                    <Plus className='mt-0.5 size-3.5 shrink-0 text-primary' />
                    <Text variant='muted' size='sm'>
                      {item}
                    </Text>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <Text
            size='xs'
            className={cn(
              'text-muted-foreground/70 fade-in-from-bottom',
              getDelayClass(5)
            )}
          >
            Free fixes cover what we built. Issues caused by outside edits, third-party
            services, or hosting we don&apos;t manage are quoted separately. Full terms
            are in your project agreement.
          </Text>

          {/* Care plan, dashed, visually distinct */}
          <div
            className={cn(
              'fade-in-from-bottom rounded-2xl border border-primary border-dashed p-6',
              'flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between',
              getDelayClass(6)
            )}
          >
            <div className='flex flex-col gap-3'>
              <div className='flex flex-wrap items-center gap-2'>
                <Text className='font-bold'>Optional care plan</Text>
                <Badge variant='outline' className='text-muted-foreground'>
                  Monthly · cancel anytime
                </Badge>
              </div>
              <Text variant='muted' size='sm' className='max-w-xl text-muted-foreground'>
                Want us to keep it running? We handle the upkeep so your site and tools
                stay fast, secure, and online. Content and feature work stay quoted jobs.
              </Text>
              <div className='flex flex-wrap gap-2'>
                {carePlan.map((item) => (
                  <Badge key={item} variant='secondary'>
                    <Check />
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
            <Button asChild variant='secondary' className='shrink-0 sm:self-center'>
              <Link href='/contact'>
                Ask about care <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className={cn('fade-in-from-bottom', getDelayClass(7))}>
            <Button asChild>
              <Link href='/contact'>
                Get a Quote <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>

        {/* Non-profit */}
        <section
          className={cn(
            `relative rounded-2xl border overflow-hidden p-6 text-center bg-accent
            not-dark:bg-accent fade-in-from-bottom`,
            getDelayClass(1)
          )}
        >
          <FireworksBackground
            className='absolute inset-0'
            population={3}
            fireworkSpeed={2}
            fireworkSize={6}
            particleSize={1.5}
            particleSpeed={1.5}
            color={resolvedTheme === 'dark' ? '#ffffff' : '#000000'}
          />
          <div className='relative z-10 flex gap-4 flex-col items-center justify-between'>
            <div className='flex flex-col gap-3'>
              <Text variant='hd-xl' className='tracking-tight text-center'>
                Free websites for non-profits
              </Text>
              <div className='flex justify-center'>
                <Text
                  variant='muted'
                  className='text-muted-foreground text-center max-w-xl'
                >
                  Are you a non-profit organization? We&apos;ll build your site at minimal
                  charge (may incl. domain fees or other maintenance fees). If you&apos;re
                  doing good work in your community, we want to help you show it.
                </Text>
              </div>
              <div className='flex flex-wrap justify-center gap-2'>
                {['Custom web design', 'Full development', 'On-page SEO setup'].map(
                  (feature) => (
                    <Badge key={feature} variant='secondary'>
                      <Check />
                      {feature}
                    </Badge>
                  )
                )}
              </div>
            </div>
            <Button asChild className='shrink-0 sm:self-center'>
              <Link href='/contact'>
                I&apos;m a non-profit
                <ArrowRight />
              </Link>
            </Button>
            <Text size='xs' className='text-muted-foreground/70 text-center max-w-xl'>
              Non-profit projects are completed on a best-effort basis.
            </Text>
          </div>
        </section>

        {/* Guaranteed services */}
        <section className='space-y-4'>
          <div className={cn('space-y-1 fade-in-from-bottom', getDelayClass(1))}>
            <Text variant='hd-xl' className='tracking-tight'>
              Included in every project
            </Text>
            <Text variant='muted' className='text-muted-foreground'>
              Every job comes with these at no extra cost.
            </Text>
          </div>
          <div className='grid gap-4 sm:grid-cols-2'>
            {guaranteedServices.map((item, index) => (
              <Card
                key={item.title}
                className={cn('fade-in-from-bottom gap-0', getDelayClass(index + 1))}
              >
                <CardHeader className='pb-1'>
                  <CardTitle>
                    <Text size='sm'>{item.title}</Text>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Text variant='muted' size='sm' className='text-muted-foreground'>
                    {item.description}
                  </Text>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Not sure */}
        <section
          className={cn(
            'rounded-2xl border bg-muted/60 p-6 text-center fade-in-from-bottom',
            getDelayClass(1)
          )}
        >
          <Text variant='hd-xl' className='tracking-tight'>
            Not sure what you need?
          </Text>
          <Text variant='muted' className='mx-auto mt-2 max-w-2xl text-muted-foreground'>
            Tell us how your business runs today and we&apos;ll recommend the simplest
            thing that fixes it.
          </Text>
          <Button asChild className='mt-5'>
            <Link href='/contact'>
              Let&apos;s talk
              <ArrowRight />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
