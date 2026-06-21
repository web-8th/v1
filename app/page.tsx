import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: {
    absolute: 'Web8th — Web Design Studio in Kelowna & Regina',
  },
  description:
    'Web8th is a two-person web design studio serving local businesses in Kelowna, BC and Regina, SK. Custom websites, on-page SEO, and ongoing support — no templates, no agency overhead.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Web8th — Web Design Studio in Kelowna & Regina',
    description:
      'Web8th is a two-person web design studio serving local businesses in Kelowna, BC and Regina, SK. Custom websites, on-page SEO, and ongoing support — no templates, no agency overhead.',
    url: '/',
  },
};
import {
  ArrowRight,
  Columns3Cog,
  Component,
  Globe,
  Rocket,
  ScanEye,
  Sparkles,
  SquareChartGantt,
  Wrench,
  TrendingDown,
  Users,
  FlaskConical,
} from 'lucide-react';

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Separator,
} from '@/components/ui';
import { Text } from '@/components/Text';
import { GravityStarsBackground } from '@/components/animate-ui/components/backgrounds/gravity-stars';
import { cn } from '@/lib/utils';
import { getDelayClass } from '@/utils/animations';
import { SitePreview } from '@/components/SitePreview';
import { projects } from '@/data/projects';

const trustStats = [
  { label: 'Local clients served', value: '6+' },
  { label: 'Years building websites', value: '4+' },
  { label: 'Cities covered', value: '2' },
  { label: 'Founders on every project', value: '2' },
];

const serviceSnapshot = [
  {
    title: 'Launch Package',
    description:
      'Custom design, full development, and on-page SEO — with a post-launch fix and small maintenance window included.',
    cta: 'Explore Launch',
    href: '/services',

    icon: Rocket,
  },
  {
    title: 'Growth Plan',
    description:
      'Ongoing maintenance, monthly content updates, and priority support for sites that need regular care.',
    cta: 'Explore Growth',
    href: '/services',
    icon: Sparkles,
  },
  {
    title: 'À La Carte',
    description:
      'Big occasional updates quoted as a flat fee when you need a larger batch of changes.',
    cta: 'Explore À La Carte',
    href: '/services',
    icon: Wrench,
  },
];

const differentiators = [
  {
    title: 'Custom from the ground up',
    description:
      'Every site we build is designed and coded specifically for you — no templates, no shortcuts.',
    icon: Columns3Cog,
  },
  {
    title: 'Clean, modern design',
    description:
      'We put real thought into how things look and feel. Consistent, polished interfaces that reflect your brand.',
    icon: Component,
  },
  {
    title: 'SEO built in',
    description:
      'Structure, metadata, and performance are part of the build process — not something patched in later.',
    icon: Globe,
  },
  {
    title: 'Direct access to us',
    description:
      'You work with the people actually building your site. No account managers, no handoffs, no runaround.',
    icon: ScanEye,
  },
];

export default function HomePage() {
  return (
    <div className=''>
      {/* Hero */}
      <section
        className='relative flex h-screen flex-col items-center justify-center gap-4 px-6
          overflow-hidden text-center'
      >
        <Image
          src='/okanagan.jpg'
          alt=''
          className='absolute inset-0 rounded-xl brightness-20 object-cover'
          fill
        />
        <GravityStarsBackground className='absolute inset-0 rounded-xl' />
        <div className='relative z-10 flex max-w-3xl flex-col items-center gap-4'>
          <Text
            variant='hd-xxl'
            className={cn(
              'tracking-tight fade-in-from-bottom not-dark:text-background',
              getDelayClass(2)
            )}
          >
            Your local web team in Kelowna & Regina
          </Text>
          <Text
            variant='muted'
            className={cn(
              'not-dark:text-muted-background fade-in-from-bottom ',
              getDelayClass(3)
            )}
          >
            We are two developers who build custom websites for local businesses — clean
            design, thoughtful UX, and SEO that works from day one. No templates, no
            agency overhead.
          </Text>
          <div
            className={cn(
              'mt-4 flex flex-wrap justify-center gap-3 fade-in-from-bottom',
              getDelayClass(4)
            )}
          >
            <Button asChild variant='secondary' size='lg'>
              <Link href='/portfolio'>
                See Our Work <SquareChartGantt />
              </Link>
            </Button>
            <Button asChild size='lg'>
              <Link href='/contact'>
                Get a Free Quote <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className='container mx-auto flex justify-center'>
        <div
          className='px-4 py-16 flex w-full max-w-6xl flex-col gap-20 lg:px-8
            justify-center border-x'
        >
          <section className='space-y-6'>
            <div className={cn('space-y-2 fade-in-from-bottom', getDelayClass(1))}>
              <Text variant='hd-xl' className='tracking-tight md:text-4xl'>
                Services at a glance
              </Text>
              <Text variant='muted' className='max-w-2xl text-muted-foreground'>
                Pick the level of support that fits your business right now.
                Straightforward scopes, clear outcomes, no lock-in.
              </Text>
            </div>
            <div className='grid gap-4 md:grid-cols-3'>
              {serviceSnapshot.map((service, index) => (
                <Card
                  key={service.title}
                  className={cn('fade-in-from-bottom', getDelayClass(index + 4))}
                >
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <service.icon className='size-4 text-primary' />
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant='link' className='px-0'>
                      <Link href={service.href}>
                        {service.cta} <ArrowRight />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className='grid items-center gap-8 md:grid-cols-2'>
            <div className='space-y-5'>
              <Text
                variant='hd-xl'
                className={cn(
                  'tracking-tight fade-in-from-bottom md:text-4xl',
                  getDelayClass(1)
                )}
              >
                Why local businesses choose Web8th
              </Text>
              <div className='space-y-4 mb-8 md:mb-0'>
                {differentiators.map((item, index) => (
                  <div
                    key={item.title}
                    className={cn(
                      'flex gap-3 fade-in-from-bottom',
                      getDelayClass(index + 3)
                    )}
                  >
                    <item.icon size={50} className='text-primary' />
                    <div>
                      <Text variant='label' className='font-medium'>
                        {item.title}
                      </Text>
                      <Text variant='muted' size='sm' className='text-sm text-muted-foreground'>
                        {item.description}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: stacked mockup + floating stat card */}
            <div
              className={cn('relative fade-in-from-right px-6 py-8 ', getDelayClass(3))}
            >
              {/* Slightly rotated background card for depth */}
              <div
                className='absolute inset-6 rotate-2 rounded-lg border border-border
                  bg-muted/40 shadow-md'
              />

              {/* Main site preview */}
              <div className='relative'>
                <SitePreview
                  className='drop-shadow-none shadow-md'
                  src='/fullpage-tsengphoto.png'
                  alt='Tseng Photo website preview'
                  url='https://tsengphoto.ca'
                  title='Tseng Photo'
                />
              </div>

              {/* Floating stat card — top right */}
              <Card
                className='absolute -top-8 left-1/2 -translate-x-1/2 z-10 p-2 sm:p-3
                  rotate-1 shadow-lg flex flex-row gap-1 sm:gap-4 items-center
                  whitespace-nowrap'
              >
                <div className='flex items-center gap-2'>
                  <TrendingDown className='size-5 text-primary shrink-0' />
                  <div>
                    <Text size='lg' className='font-semibold'>
                      88%
                    </Text>
                    <Text variant='muted' size='sm' className='leading-tight'>
                      cost reduction
                    </Text>
                  </div>
                </div>
                <Separator orientation='vertical' className='h-8' />
                <div className='flex items-center gap-2'>
                  <Users className='size-5 text-primary shrink-0' />
                  <div>
                    <Text size='lg' className='font-semibold'>
                      6+
                    </Text>
                    <Text variant='muted' size='sm' className='leading-tight'>
                      clients served
                    </Text>
                  </div>
                </div>
                <Separator orientation='vertical' className='h-8' />
                <div className='flex items-center gap-2'>
                  <FlaskConical className='size-5 text-primary shrink-0' />
                  <div>
                    <Text size='lg' className='font-semibold'>
                      4+
                    </Text>
                    <Text variant='muted' size='sm' className='leading-tight'>
                      years building
                    </Text>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className='space-y-6'>
            <div className={cn('space-y-2 fade-in-from-bottom', getDelayClass(1))}>
              <Text variant='hd-xl' className='tracking-tight md:text-4xl'>
                A few recent builds
              </Text>
              <Text variant='muted' className='max-w-2xl text-muted-foreground'>
                Real websites for people and businesses in our communities.
              </Text>
            </div>
            <div className='grid gap-4 md:grid-cols-2'>
              {projects.slice(0, 4).map((project) => (
                <SitePreview
                  key={project.url}
                  src={project.imgSrc}
                  alt={project.title}
                  url={project.url}
                  title={project.title}
                  description={project.description}
                  tags={[...project.tags]}
                />
              ))}
            </div>
            <Card className='flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between p-5'>
              <div>
                <Text variant='label' className='font-medium'>
                  See every project we&apos;ve shipped
                </Text>
                <Text variant='muted' size='sm' className='text-muted-foreground'>
                  Full breakdowns, live links, and the story behind each build.
                </Text>
              </div>
              <Button asChild className='shrink-0'>
                <Link href='/portfolio'>
                  View full portfolio <ArrowRight />
                </Link>
              </Button>
            </Card>
          </section>

          <section
            className={cn(
              'rounded-2xl border bg-accent/50 p-8 text-center fade-in-from-bottom',
              getDelayClass(1)
            )}
          >
            <Text variant='hd-xl' className='tracking-tight'>
              Ready to get started?
            </Text>
            <Text
              variant='muted'
              className='mx-auto mt-3 max-w-2xl text-muted-foreground'
            >
              Tell us about your business and what you need. We'll figure out the right
              approach together — no commitment required.
            </Text>
            <Separator className='mx-auto my-6 max-w-md' />
            <Button asChild size='lg'>
              <Link href='/contact'>Book a Free Call</Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}
