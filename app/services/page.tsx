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
import { GravityStarsBackground } from '@/components/animate-ui/components/backgrounds/gravity-stars';
import { cn } from '@/lib/utils';
import { getDelayClass } from '@/utils/animations';

const allFeatures = [
  'Custom web design',
  'Full development',
  'On-page SEO setup',
  'Ongoing maintenance',
  'Monthly content updates',
  'Performance & scalability management',
  'Priority support',
];

const fixedTiers = [
  {
    name: 'Launch Package',
    model: 'One-time flat fee',
    includes: ['Custom web design', 'Full development', 'On-page SEO setup'],
    bestFor:
      'Every project starts here, a fully built, SEO-ready site you own outright. We will handle from design to deployment.',
    cta: 'Get a Quote',
    href: '/contact',
    popular: true,
  },
  {
    name: 'Growth Plan',
    model: 'Monthly retainer · starting at 3 months',
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
      'For businesses that want a dedicated partner post-launch, we handle content, performance, and infrastructure as you scale.',
    cta: 'Get a Quote',
    href: '/contact',
  },
];

const alaCarte = {
  name: 'À La Carte',
  model: 'Per-batch flat fee · no retainer',
  includes: [
    'Custom web design',
    'Full development',
    'On-page SEO setup',
    'Per-batch flat fee updates',
    'Small fixes at no extra charge',
  ],
  bestFor:
    'For occasional updates, seasonal changes, or post-launch fixes. No commitment, just send us a list when you need something done.',
  cta: 'Get a Quote',
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
  return (
    <div>
      {/* Hero */}
      <section
        className='relative flex h-screen flex-col items-center justify-center gap-4
          overflow-hidden text-center'
      >
        <GravityStarsBackground className='absolute inset-0 rounded-xl' />
        <div className='relative z-10 flex max-w-3xl flex-col items-center gap-4'>
          <Text
            variant='hd-xxl'
            className={cn('tracking-tight fade-in-from-bottom', getDelayClass(1))}
          >
            Flexible support for where your business is right now
          </Text>
          <Text
            variant='muted'
            className={cn('text-muted-foreground fade-in-from-bottom', getDelayClass(2))}
          >
            Start with a one-time launch, keep momentum with ongoing help, or send us a
            list when you need updates.
          </Text>
          <Button
            asChild
            variant='secondary'
            className={cn('mt-4 fade-in-from-bottom', getDelayClass(3))}
          >
            <Link href='#pricing'>
              View pricing <ArrowDown />
            </Link>
          </Button>
        </div>
      </section>

      <div
        className='nb-padding mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 sm:px-6
          lg:px-8'
      >
        {/* Fixed tiers, 2-column grid */}
        <section id='pricing' className='flex flex-col gap-4'>
          <Text
            variant='hd-xl'
            className={cn('fade-in-from-bottom', getDelayClass(1))}
          >
            Our Pricing
          </Text>
          <div className='grid gap-4 md:grid-cols-2'>
            {fixedTiers.map((tier, index) => (
              <Card
                key={tier.name}
                className={cn(
                  'fade-in-from-bottom flex flex-col justify-between gap-4',
                  tier.popular && 'border-primary ring-1 ring-primary/20',
                  getDelayClass(index + 3)
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

                <CardContent className='space-y-4'>
                  {/* Feature list, X rows quieted */}
                  <div className='space-y-2'>
                    {allFeatures.map((feature) => {
                      const included = tier.includes.includes(feature);
                      return (
                        <div key={feature} className='flex items-start gap-2'>
                          {included ? (
                            <Check className='mt-0.5 size-3.5 shrink-0 text-primary' />
                          ) : (
                            <X className='mt-0.5 size-3.5 shrink-0 text-muted-foreground' />
                          )}
                          <Text
                            variant='muted-sm'
                            className={cn(
                              included ? 'text-foreground' : 'text-muted-foreground'
                            )}
                          >
                            {feature}
                          </Text>
                        </div>
                      );
                    })}
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
              getDelayClass(5)
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
        <div
          className={cn(
            'flex gap-4 flex-col items-center justify-between fade-in-from-bottom',
            getDelayClass(6)
          )}
        >
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
                charge (may incl. domain fees). If you&apos;re doing good work in your
                community, we want to help you show it.
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
          <div className='flex justify-center'>
            <Text
              variant='bd-xs'
              className='text-muted-foreground/70 text-center max-w-xl'
            >
              Non-profit projects are completed on a best-effort basis.
            </Text>
          </div>
        </div>

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
          <Text variant='hd-xl' className='tracking-tight md:text-3xl'>
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
