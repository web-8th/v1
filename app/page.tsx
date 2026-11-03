import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: {
    absolute: 'Web8th | Websites and Web Tools in Kelowna & Regina',
  },
  description:
    'Web8th is a two-person studio in Kelowna, BC and Regina, SK. We build websites that do real work for your business: blogs, bookings, client portals, admin dashboards, and integrations with the tools you already use.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Web8th | Websites and Web Tools in Kelowna & Regina',
    description:
      'Web8th is a two-person studio in Kelowna, BC and Regina, SK. We build websites that do real work for your business: blogs, bookings, client portals, admin dashboards, and integrations with the tools you already use.',
    url: '/',
  },
};
import {
  ArrowRight,
  CalendarCheck,
  Columns3Cog,
  Component,
  FileText,
  FlaskConical,
  Globe,
  LayoutDashboard,
  Newspaper,
  Plug,
  ScanEye,
  ShieldCheck,
  SquareChartGantt,
  TrendingDown,
  Users,
  Wrench,
} from 'lucide-react';

import {
  Button,
  Card,
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

const whatWeBuild = [
  {
    title: 'Business websites',
    description: 'Fast, custom-designed sites with SEO built in from day one.',
    icon: Globe,
  },
  {
    title: 'Content you control',
    description:
      'Blogs, galleries, and editable pages you can update yourself without calling us.',
    icon: Newspaper,
  },
  {
    title: 'Forms and bookings',
    description:
      'Quote requests, appointment booking, and signups that land straight in your inbox or system.',
    icon: CalendarCheck,
  },
  {
    title: 'Internal tools and dashboards',
    description:
      'Admin panels, client portals, and invoicing tools that replace spreadsheets and paperwork.',
    icon: LayoutDashboard,
  },
  {
    title: 'Integrations',
    description:
      'Connect your site to the tools you already use, like payments, email, or scheduling.',
    icon: Plug,
  },
];

const howWeWork = [
  {
    title: 'One quote. One job.',
    description:
      'Tell us what you need. We scope it, give you one flat quote, and build it. No packages to compare, no tiers to decode.',
    icon: FileText,
  },
  {
    title: 'If something breaks, we fix it',
    description:
      'Bugs in anything we built are on us, and so are small tweaks like text or image swaps. Bigger changes or new features get their own flat quote, same as the first job.',
    icon: Wrench,
  },
  {
    title: 'Optional care plan',
    description:
      'Want us to keep it running? We handle hosting, security updates, backups, and monitoring so your site and tools stay fast and online.',
    icon: ShieldCheck,
  },
];

const differentiators = [
  {
    title: 'Built around your business',
    description:
      'We learn how you work first, then build the site and tools to match. Nothing generic, no templates.',
    icon: Columns3Cog,
  },
  {
    title: 'Grows with you',
    description:
      'Start with a simple site and add a blog, booking, or admin tools later without starting over.',
    icon: Component,
  },
  {
    title: 'SEO and performance built in',
    description:
      'Structure, metadata, and speed are part of the build, not something patched in later.',
    icon: Globe,
  },
  {
    title: 'Direct access to us',
    description:
      'You talk to the people writing the code. No account managers, no handoffs, no runaround.',
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
            Websites that work as hard as you do
          </Text>
          <Text
            variant='muted'
            className={cn(
              'not-dark:text-muted-background fade-in-from-bottom ',
              getDelayClass(3)
            )}
          >
            We&apos;re two developers in Kelowna and Regina who build websites around how
            your business actually runs. That can be a fast, SEO-ready site, a blog you
            update yourself, or the booking system, dashboard, or internal tool your team
            uses every day. No templates, no agency overhead.
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
                What we build
              </Text>
              <Text variant='muted' className='max-w-2xl text-muted-foreground'>
                Not just pages. We build the parts of your website that save you time and
                bring in work.
              </Text>
            </div>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
              {whatWeBuild.map((item, index) => (
                <Card
                  key={item.title}
                  className={cn('fade-in-from-bottom', getDelayClass(index + 2))}
                >
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <item.icon className='size-4 text-primary' />
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          <section className='space-y-6'>
            <div className={cn('space-y-2 fade-in-from-bottom', getDelayClass(1))}>
              <Text variant='hd-xl' className='tracking-tight md:text-4xl'>
                How we work
              </Text>
              <Text variant='muted' className='max-w-2xl text-muted-foreground'>
                One simple model for every project, big or small. No retainers, no
                lock-in.
              </Text>
            </div>
            <div className='grid gap-4 md:grid-cols-3'>
              {howWeWork.map((item, index) => (
                <Card
                  key={item.title}
                  className={cn('fade-in-from-bottom', getDelayClass(index + 3))}
                >
                  <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                      <item.icon className='size-4 text-primary' />
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div
              className={cn('flex justify-center fade-in-from-bottom', getDelayClass(6))}
            >
              <Button asChild variant='link' className='px-0'>
                <Link href='/services'>
                  How quoting works <ArrowRight />
                </Link>
              </Button>
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
                      <Text
                        variant='muted'
                        size='sm'
                        className='text-sm text-muted-foreground'
                      >
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
                Real sites and tools for people and businesses in our communities.
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
            <Card className='flex flex-col items-center gap-4 p-6 text-center'>
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
              Tell us what your business needs, whether it&apos;s a new site or a tool to
              fix a workflow that&apos;s slowing you down. We&apos;ll scope it and send
              one flat quote, no commitment required.
            </Text>
            <Separator className='mx-auto my-6 max-w-md' />
            <Button asChild size='lg'>
              <Link href='/contact'>Get a Free Quote</Link>
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}
