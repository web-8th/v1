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
import { getDelayClass } from '@/utils/animations';

const projects = [
  {
    name: 'Client Project 1',
    description: 'Placeholder summary for a local business website focused on bookings.',
    tags: ['Web Design', 'SEO'],
  },
  {
    name: 'Client Project 2',
    description: 'Placeholder summary for a clean service website with strong CTA flow.',
    tags: ['Small Business', 'Content'],
  },
  {
    name: 'Client Project 3',
    description: 'Placeholder summary for a personal brand website and lead capture.',
    tags: ['Landing Page', 'Strategy'],
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
            className='max-w-3xl text-muted-foreground fade-in-from-bottom delay-[100ms]'
          >
            A selection of sites we&apos;ve built for local businesses and individuals.
          </Text>
        </section>

        {/* TODO: Replace placeholder cards with real client projects */}
        <section className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <Card
              key={project.name}
              className={cn('fade-in-from-bottom', getDelayClass(index + 3))}
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
                  <CardTitle>{project.name}</CardTitle>
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
                <Button disabled className='w-full'>
                  View Live Site
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
}
