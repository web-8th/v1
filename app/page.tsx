import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Handshake,
  MapPin,
  MessageCircle,
  Rocket,
  Sparkles,
  SquareArrowOutUpRight,
  Wrench,
} from 'lucide-react';

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
  Separator,
} from '@/components/ui';
import { Text } from '@/components/Text';
import { cn } from '@/lib/utils';
import { getDelayClass } from '@/utils/animations';

const trustStats = [
  { label: 'Local clients served', value: '6+' },
  { label: 'Years building websites', value: '4+' },
  { label: 'Cities covered', value: '2' },
  { label: 'Founders behind every project', value: '2' },
];

const serviceSnapshot = [
  {
    title: 'Launch Package',
    description: 'Custom design, full development, and on-page SEO setup.',
    cta: 'Explore Launch',
    href: '/services',
    icon: Rocket,
  },
  {
    title: 'Growth Plan',
    description: 'Ongoing updates, maintenance, and priority support.',
    cta: 'Explore Growth',
    href: '/services',
    icon: Sparkles,
  },
  {
    title: 'À La Carte',
    description: 'Batch updates quoted as a flat fee when you need help.',
    cta: 'Explore À La Carte',
    href: '/services',
    icon: Wrench,
  },
];

const differentiators = [
  {
    title: 'Local expertise',
    description: 'We build for real businesses in Kelowna and Regina.',
    icon: MapPin,
  },
  {
    title: 'Two builders, one team',
    description: 'You get focused execution without big-agency overhead.',
    icon: Handshake,
  },
  {
    title: 'Clear communication',
    description: 'No technical jargons. Just updates with comprehensible explanations.',
    icon: MessageCircle,
  },
  {
    title: 'No bloated contracts',
    description: 'Straightforward scopes, practical timelines, and no lock-in.',
    icon: BadgeCheck,
  },
];

const teaserProjects = [
  {
    title: 'Tseng Photo',
    summary:
      'A website built for a photographer, Matthew Tseng, who had reduced their spending by 88% annually, switching from SquareSpace to a custom-built site.',
    tags: ['Web Design', 'SEO', 'Custom CMS'],
    url: 'https://tsengphoto.ca',
  },
  {
    title: 'InspirED Sask',
    summary:
      'InspirED aims to educate citizens in society to promote a better environment. They focus on fostering practical education rather than traditional academic education.',
    tags: ['Web Design', 'SEO', 'Custom CMS'],
    url: 'https://www.inspiredsk.ca/',
  },
  {
    title: 'KPop Dance Team',
    summary:
      'A website for the Kpop Dance Team, a club under the SUO at the University of British Columbia Okanagan.',
    tags: ['Web Design', 'Custom CMS'],
    url: 'https://kdtsuo.vercel.app',
  },
];

export default function HomePage() {
  return (
    <div className='nb-padding'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-20 px-4 sm:px-6 lg:px-8'>
        <section
          className={cn(
            'relative overflow-hidden rounded-2xl border bg-card/60 p-8 fade-in-from-bottom md:p-12',
            getDelayClass(0)
          )}
        >
          <div
            className='pointer-events-none absolute inset-0 bg-gradient-to-b from-muted/70
              to-card'
          />
          <div className='relative z-10 max-w-3xl'>
            <Badge className={cn('mb-4 fade-in-from-bottom', getDelayClass(1))}>
              Your work, visible.
            </Badge>
            <Text
              variant='hd-xxl'
              className={cn(
                'text-4xl leading-tight tracking-tight fade-in-from-bottom md:text-6xl',
                getDelayClass(2)
              )}
            >
              Your local web team in Kelowna & Regina
            </Text>
            <Text
              variant='muted'
              className={cn(
                'mt-5 text-lg text-muted-foreground fade-in-from-bottom md:text-xl',
                getDelayClass(3)
              )}
            >
              We are two developers building under one shared name: Web8th. You get direct
              access to the people doing the work, practical advice rooted in local
              markets, and a site that is built to support your business.
            </Text>
            <div
              className={cn(
                'mt-8 flex flex-wrap gap-3 fade-in-from-bottom',
                getDelayClass(4)
              )}
            >
              <Button asChild size='lg'>
                <Link href='/contact'>
                  Get a Free Quote <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant='outline' size='lg'>
                <Link href='/portfolio'>See Our Work</Link>
              </Button>
            </div>
          </div>
        </section>

        <section
          className={cn(
            'grid gap-4 rounded-2xl border bg-muted/60 p-5 fade-in-from-bottom sm:grid-cols-2 lg:grid-cols-4',
            getDelayClass(1)
          )}
        >
          {trustStats.map((item, index) => (
            <div
              key={item.label}
              className={cn('fade-in-from-bottom', getDelayClass(index + 2))}
            >
              <Text variant='bd-xl' className='text-2xl font-semibold'>
                {item.value}
              </Text>
              <Text variant='muted-sm' className='text-sm text-muted-foreground'>
                {item.label}
              </Text>
            </div>
          ))}
        </section>

        <section className='space-y-6'>
          <div className={cn('space-y-2 fade-in-from-bottom', getDelayClass(1))}>
            <Text variant='hd-xl' className='text-3xl tracking-tight md:text-4xl'>
              Services at a glance
            </Text>
            <Text variant='muted' className='max-w-2xl text-muted-foreground'>
              Pick the level of support that fits your business right now. We keep scopes
              simple and outcomes clear.
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
                'text-3xl tracking-tight fade-in-from-bottom md:text-4xl',
                getDelayClass(1)
              )}
            >
              Why local businesses choose Web8th
            </Text>
            <div className='space-y-4'>
              {differentiators.map((item, index) => (
                <div
                  key={item.title}
                  className={cn(
                    'flex gap-3 fade-in-from-bottom',
                    getDelayClass(index + 3)
                  )}
                >
                  <item.icon className='mt-0.5 size-5 text-primary' />
                  <div>
                    <Text variant='label' className='font-medium'>
                      {item.title}
                    </Text>
                    <Text variant='muted-sm' className='text-sm text-muted-foreground'>
                      {item.description}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Card
            className={cn(
              'fade-in-from-right border-dashed bg-accent/40 p-6',
              getDelayClass(3)
            )}
          >
            <div
              className='flex min-h-64 items-center justify-center rounded-lg border
                border-border bg-card text-center'
            >
              <Text variant='muted-sm' className='max-w-xs text-sm text-muted-foreground'>
                Visual placeholder for a local map, founder photo, or process
                illustration.
              </Text>
            </div>
          </Card>
        </section>

        <section className='space-y-6'>
          <div className={cn('space-y-2 fade-in-from-bottom', getDelayClass(1))}>
            <Text variant='hd-xl' className='text-3xl tracking-tight md:text-4xl'>
              A few recent builds
            </Text>
            <Text variant='muted' className='max-w-2xl text-muted-foreground'>
              Real-world websites for people and businesses in our communities.
            </Text>
          </div>
          <div className='grid gap-4 md:grid-cols-3'>
            {teaserProjects.map((project, index) => (
              <Card
                key={project.title}
                className={cn(
                  'fade-in-from-bottom flex justify-between',
                  getDelayClass(index + 5)
                )}
              >
                <CardHeader className='space-y-4'>
                  <div
                    className={cn(
                      `flex h-36 items-center justify-center rounded-md border text-sm
                      text-muted-foreground`,
                      index % 2 === 0 ? 'bg-muted' : 'bg-accent/40'
                    )}
                  >
                    <Text as='span' variant='muted-sm'>
                      Project preview placeholder
                    </Text>
                  </div>
                  <div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className='mt-1'>{project.summary}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className='space-y-4'>
                  <div className='flex flex-wrap gap-2'>
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant='secondary'>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardFooter className='px-0 flex justify-end'>
                    <Link href={project.url} target='_blank'>
                      <Button variant='link' className='cursor-pointer'>
                        View Live Site
                        <SquareArrowOutUpRight />
                      </Button>
                    </Link>
                  </CardFooter>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section
          className={cn(
            'rounded-2xl border bg-accent/50 p-8 text-center fade-in-from-bottom',
            getDelayClass(1)
          )}
        >
          <Text variant='hd-xl' className='text-3xl tracking-tight'>
            Ready to get started?
          </Text>
          <Text variant='muted' className='mx-auto mt-3 max-w-2xl text-muted-foreground'>
            Tell us what you are building and where you are stuck. We will map out the
            next step together.
          </Text>
          <Separator className='mx-auto my-6 max-w-md' />
          <Button asChild size='lg'>
            <Link href='/contact'>Book a Free Call</Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
