import { Text } from '@/components/Text';
import { cn } from '@/lib/utils';
import { getDelayClass } from '@/utils/animations';
import { SitePreview } from '@/components/SitePreview';
import { projects } from '@/data/projects';

export default function PortfolioPage() {
  return (
    <div
      className='nb-padding container mx-auto flex w-full max-w-6xl flex-col gap-10 px-4
        sm:px-6 lg:px-8 border-x'
    >
      <section className='space-y-3'>
        <Text
          variant='hd-xxl'
          className={cn(
            'text-4xl tracking-tight fade-in-from-bottom md:text-5xl font-serif',
            getDelayClass(1)
          )}
        >
          Portfolio
        </Text>
        <Text
          variant='muted'
          className={cn(
            'max-w-3xl text-muted-foreground fade-in-from-bottom',
            getDelayClass(2)
          )}
        >
          A selection of sites we&apos;ve built for local businesses and individuals.
        </Text>
      </section>
      <section className={'grid gap-4 lg:grid-cols-2'}>
        {projects.map((project, index) => (
          <SitePreview
            className={cn('fade-in-from-bottom', getDelayClass(index + 3))}
            key={project.url}
            src={project.imgSrc}
            alt={project.title}
            url={project.url}
            title={project.title}
            description={project.description}
            tags={[...project.tags]}
          />
        ))}
      </section>
    </div>
  );
}
