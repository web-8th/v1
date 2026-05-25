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
import { getDelayClass } from '@/utils/animations';
import Link from 'next/link';
import { SquareArrowOutUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Tseng Photo',
    description:
      'A website built for a photographer, Matthew Tseng, who had reduced their spending by 88% annually, switching from SquareSpace to a custom-built site.',
    tags: ['Web Design', 'SEO', 'Custom CMS'],
    url: 'https://tsengphoto.ca',
  },
  {
    title: 'InspirED Sask',
    description:
      'InspirED aims to educate citizens in society to promote a better environment. They focus on fostering practical education rather than traditional academic education.',
    tags: ['Web Design', 'SEO', 'Custom CMS'],
    url: 'https://www.inspiredsk.ca/',
  },
  {
    title: 'KPop Dance Team',
    description:
      'A website for the Kpop Dance Team, a club under the SUO at the University of British Columbia Okanagan.',
    tags: ['Web Design', 'Custom CMS'],
    url: 'https://kdtsuo.vercel.app',
  },
];

export default function PortfolioPage() {
  return (
    <div className='nb-padding'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8'>
        <section className='space-y-3'>
          <Text
            variant='hd-xxl'
            className='text-4xl tracking-tight fade-in-from-bottom md:text-5xl font-serif'
          >
            Portfolio
          </Text>
          <Text
            variant='muted'
            className={cn(
              'max-w-3xl text-muted-foreground fade-in-from-bottom',
              getDelayClass(1)
            )}
          >
            A selection of sites we&apos;ve built for local businesses and individuals.
          </Text>
        </section>

        {/* TODO: Replace placeholder cards with real client projects */}
        <section className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={cn(
                'fade-in-from-bottom justify-between',
                getDelayClass(index + 3)
              )}
            >
              <CardHeader className='space-y-4'>
                <div
                  className={cn(
                    `flex h-40 items-center justify-center rounded-md border text-sm
                    text-muted-foreground`,
                    index % 2 === 0 ? 'bg-muted' : 'bg-accent/40'
                  )}
                >
                  <Text as='span' variant='muted-sm'>
                    Project image placeholder
                  </Text>
                </div>
                <div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className='mt-1'>
                    {project.description}
                  </CardDescription>
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
                <CardFooter className='w-full px-0'>
                  <Link href={project.url} target='_blank' className='w-full'>
                    <Button className='w-full cursor-pointer'>
                      View Live Site
                      <SquareArrowOutUpRight />
                    </Button>
                  </Link>
                </CardFooter>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
}
