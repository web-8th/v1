'use client';

import { useEffect } from 'react';
import Link from 'next/link';

import { ArrowDown, ArrowRight, Check, X } from 'lucide-react';

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { Text } from '@/components/Text';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { getDelayClass } from '@/utils/animations';
import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars';
import { FireworksBackground } from '@/components/animate-ui/components/backgrounds/fireworks';

const allFeatures = [
  'Custom web design',
  'Full development',
  'On-page SEO setup',
  'Small maintenance after launch',
  'Small bug fixes after launch',
  'Ongoing maintenance',
  'Monthly content updates',
  'Performance & scalability management',
  'Priority support',
  'Big occasional updates',
];

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
      'A page that performs a function, like a contact form, newsletter signup, or booking request.',
    examples: ['Contact form', 'Newsletter signup', 'Quote request'],
  },
  {
    label: 'Tier 3',
    name: 'Feature page',
    description:
      'A page with built-in functionality, like a blog, admin page, or custom content management system.',
    examples: ['Blog', 'Admin page', 'Editable content'],
  },
  {
    label: 'Special',
    name: 'Admin page',
    description:
      'Required for any dynamic pages or if you would like to edit content yourself.',
    examples: ['Blog admin', 'Editable content', 'Custom CMS'],
  },
];

const inspiredBreakdown = [
  {
    count: '2',
    label: 'Static pages',
    detail: 'About, Team',
    links: [
      { label: 'About', href: 'https://www.inspiredsk.ca/about' },
      { label: 'Team', href: 'https://www.inspiredsk.ca/team' },
    ],
  },
  {
    count: '2',
    label: 'Feature pages',
    detail: 'Home, Blog',
    links: [
      { label: 'Home', href: 'https://www.inspiredsk.ca/' },
      { label: 'Blog', href: 'https://www.inspiredsk.ca/blog' },
    ],
  },
  {
    count: '1',
    label: 'Functional page',
    detail: 'Contact',
    links: [{ label: 'Contact', href: 'https://www.inspiredsk.ca/contact' }],
  },
  {
    count: '1',
    label: 'Admin page',
    detail: 'To manage content',
    links: [],
  },
];

const fixedTiers = [
  {
    name: 'Launch Package',
    model: 'One-time flat fee',
    includes: [
      'Custom web design',
      'Full development',
      'On-page SEO setup',
      'Small maintenance after launch',
      'Small bug fixes after launch',
    ],
    bestFor:
      'Every project starts here — a fully built, SEO-ready site you own outright. One post-launch fix is included, and small maintenance after launch stays covered.',
    cta: 'Get a Quote',
    href: '/contact',
  },
  {
    name: 'Growth Plan',
    model: 'Monthly retainer · minimum 3 months',
    includes: [
      'Custom web design',
      'Full development',
      'On-page SEO setup',
      'Ongoing maintenance',
      'Monthly content updates',
      'Performance & scalability management',
      'Priority support',
    ],
    bestFor:
      'For businesses that want a dedicated partner after launch. We handle ongoing maintenance, content updates, performance, and the small fixes that come after launch.',
    cta: 'Get a Quote',
    href: '/contact',
    popular: true,
  },
];

const alaCarte = {
  name: 'À La Carte',
  model: 'Per-change flat fee · no retainer',
  includes: ['Post-launch fix included', 'Big occasional updates'],
  bestFor:
    'For big occasional updates, seasonal changes, or larger batches of edits. We quote the work as a flat fee, and post-launch fixes are included.',
  cta: 'Send Us Your List',
  href: '/contact',
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
            Flexible support for where your business is right now
          </Text>
          <Text
            variant='muted'
            className={cn(
              'not-dark:text-muted-background fade-in-from-bottom ',
              getDelayClass(2)
            )}
          >
            We quote websites by the mix of static, functional, and feature pages they
            need, then match the right support package for launch and after.
          </Text>
          <Button asChild className={cn('mt-4 fade-in-from-bottom', getDelayClass(3))}>
            <Link href='#pricing'>
              View pricing <ArrowDown />
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
              actually needs, then add an admin page whenever content should stay
              editable.
            </Text>
          </div>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
            {pageTiers.map((tier, index) => (
              <Card
                key={tier.label}
                className={cn('fade-in-from-bottom', getDelayClass(index + 3))}
              >
                <CardHeader className='gap-3'>
                  <Badge variant='outline' className='w-fit text-muted-foreground'>
                    {tier.label}
                  </Badge>
                  <CardTitle>
                    <Text topLevel variant='bd-md'>
                      {tier.name}
                    </Text>
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

        {/* Fixed tiers, 2-column grid */}
        <section className='flex flex-col gap-4'>
          <Text variant='hd-xl' className={cn('fade-in-from-bottom', getDelayClass(1))}>
            Service packages
          </Text>
          <Text
            variant='muted'
            className={cn(
              'max-w-3xl text-muted-foreground fade-in-from-bottom',
              getDelayClass(2)
            )}
          >
            Whether you need a site built and handed off, or a long-term partner to keep
            things running and growing — we have a plan for that.
          </Text>
          <div className='grid gap-4 md:grid-cols-2'>
            {fixedTiers.map((tier, index) => (
              <Card
                key={tier.name}
                className={cn(
                  'fade-in-from-bottom flex flex-col gap-4',
                  tier.popular && 'border-primary ring-1 ring-primary/20',
                  getDelayClass(index + 4)
                )}
              >
                <CardHeader className='gap-2'>
                  <div className='flex items-center justify-between gap-2'>
                    <CardTitle>
                      <Text topLevel variant='bd-md'>
                        {tier.name}
                      </Text>
                    </CardTitle>
                    {tier.popular ? <Badge>Most Popular</Badge> : null}
                  </div>
                  <CardDescription>
                    <Badge variant='outline' className='text-muted-foreground'>
                      {tier.model}
                    </Badge>
                  </CardDescription>
                  {/* Best for, elevated above feature list */}
                  <div
                    className='rounded-lg bg-muted/60 px-3 py-2.5 text-sm
                      text-muted-foreground'
                  >
                    <span className='font-semibold text-foreground'>Best for: </span>
                    {tier.bestFor}
                  </div>
                </CardHeader>

                <CardContent className='space-y-4 flex-1'>
                  {/* Feature list, X rows quieted */}
                  <div className='space-y-2'>
                    {allFeatures
                      .filter((feature) => tier.includes.includes(feature))
                      .map((feature) => (
                        <div key={feature} className='flex items-start gap-2'>
                          <Check className='mt-0.5 size-3.5 shrink-0 text-primary' />
                          <Text variant='muted-sm'>{feature}</Text>
                        </div>
                      ))}
                  </div>
                </CardContent>

                <CardFooter>
                  <Button asChild className='w-full'>
                    <Link href={tier.href}>
                      {tier.cta} <ArrowRight />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* À La Carte, horizontal, dashed, visually distinct */}
          <div
            className={cn(
              'fade-in-from-bottom rounded-2xl border border-primary border-dashed p-6',
              'flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between',
              getDelayClass(6)
            )}
          >
            <div className='flex flex-col gap-3'>
              <div className='flex flex-wrap items-center gap-2'>
                <Text topLevel variant='bd-md' className='font-bold'>
                  {alaCarte.name}
                </Text>
                <Badge variant='outline' className='text-muted-foreground'>
                  {alaCarte.model}
                </Badge>
              </div>
              <Text variant='muted-sm' className='max-w-xl text-muted-foreground'>
                {alaCarte.bestFor}
              </Text>
              <div className='flex flex-wrap gap-2'>
                {alaCarte.includes.map((feature) => (
                  <Badge key={feature} variant={'secondary'}>
                    <Check />
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
            <Button asChild variant='secondary' className='shrink-0 sm:self-center'>
              <Link href={alaCarte.href}>
                {alaCarte.cta} <ArrowRight />
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
              <Text topLevel variant='hd-xxl' className='tracking-tight text-center'>
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
                I'm a non-profit
                <ArrowRight />
              </Link>
            </Button>
            <Text
              variant='bd-xs'
              className='text-muted-foreground/70 text-center max-w-xl'
            >
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
              No matter which plan you choose, these come standard.
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
                    <Text topLevel variant='bd-sm'>
                      {item.title}
                    </Text>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Text variant='muted-sm' className='text-muted-foreground'>
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
            Not sure which fits?
          </Text>
          <Text variant='muted' className='mx-auto mt-2 max-w-2xl text-muted-foreground'>
            Tell us where you are now and we&apos;ll recommend the simplest path forward.
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
