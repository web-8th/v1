import Link from 'next/link';
import { ArrowRight, CircleCheck } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { getDelayClass } from '@/utils/animations';

const tiers = [
  {
    name: 'Launch Package',
    model: 'One-time flat fee',
    includes: ['Custom web design', 'Full development', 'On-page SEO setup'],
    bestFor: 'Businesses that need a great site and want to own it outright.',
    cta: 'Get a Quote',
    href: '/contact',
  },
  {
    name: 'Growth Plan',
    model: 'Monthly retainer (minimum 3 months)',
    includes: [
      'Everything in Launch',
      'Ongoing maintenance',
      'Monthly updates',
      'Priority support',
    ],
    bestFor: 'Businesses that want a long-term partner to keep things fresh.',
    cta: 'Get a Quote',
    href: '/contact',
    popular: true,
  },
  {
    name: 'À La Carte',
    model: 'Per-change flat fee',
    includes: [
      'You send a list of updates',
      'We review and quote a flat fee',
      'You approve and we implement the batch',
    ],
    bestFor: 'Clients with an existing site who need occasional help.',
    cta: 'Send Us Your List',
    href: '/contact',
  },
];

const addOns = [
  {
    title: 'SEO audit',
    description:
      'A practical review of technical SEO, on-page content, and quick win opportunities.',
  },
  {
    title: 'Google Business Profile setup',
    description:
      'Setup or cleanup support so your business appears clearly in local search.',
  },
  {
    title: 'Logo / brand refresh (referred out)',
    description:
      'We can connect you with trusted local creatives when you need a visual refresh.',
  },
  {
    title: 'Domain & hosting setup help',
    description:
      'Guidance on purchasing, connecting, and configuring your domain and hosting stack.',
  },
];

export default function ServicesPage() {
  return (
    <div className='nb-padding'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 sm:px-6 lg:px-8'>
        <section className='space-y-4'>
          <Badge className='fade-in-from-bottom'>Services</Badge>
          <h1
            className='text-4xl tracking-tight fade-in-from-bottom
              delay-[100ms] md:text-5xl'
          >
            Flexible support for where your business is right now
          </h1>
          <p className='max-w-3xl text-muted-foreground fade-in-from-bottom delay-[200ms]'>
            Start with a one-time launch, keep momentum with ongoing help, or send us a
            list when you need updates.
          </p>
        </section>

        <section className='grid gap-4 md:grid-cols-3'>
          {tiers.map((tier, index) => (
            <Card
              key={tier.name}
              className={cn(
                'fade-in-from-bottom',
                tier.popular && 'border-primary ring-1 ring-primary/20',
                getDelayClass(index + 3)
              )}
            >
              <CardHeader>
                <div className='mb-2 flex items-center justify-between gap-2'>
                  <CardTitle>{tier.name}</CardTitle>
                  {tier.popular ? <Badge>Most Popular</Badge> : null}
                </div>
                <CardDescription>{tier.model}</CardDescription>
              </CardHeader>
              <CardContent className='space-y-4'>
                <div className='space-y-2'>
                  {tier.includes.map((item) => (
                    <div key={item} className='flex items-start gap-2 text-sm'>
                      <CircleCheck className='mt-0.5 size-4 text-primary' />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className='text-sm text-muted-foreground'>
                  <strong className='text-foreground'>Best for:</strong> {tier.bestFor}
                </p>
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
        </section>

        <section
          className='rounded-2xl border bg-muted/60 p-6 text-center fade-in-from-bottom'
        >
          <h2 className='text-2xl tracking-tight md:text-3xl'>
            Not sure which fits?
          </h2>
          <p className='mx-auto mt-2 max-w-2xl text-muted-foreground'>
            Tell us where you are now and we will recommend the simplest path forward.
          </p>
          <Button asChild variant='outline' className='mt-5'>
            <Link href='/contact'>Let&apos;s talk</Link>
          </Button>
        </section>

        <section className='space-y-4'>
          <h2 className='text-3xl tracking-tight fade-in-from-bottom'>
            Optional add-ons
          </h2>
          <Accordion type='single' collapsible className='w-full rounded-xl border px-4'>
            {addOns.map((item, index) => (
              <AccordionItem key={item.title} value={`addon-${index}`}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent className='text-muted-foreground'>
                  {item.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </div>
  );
}
