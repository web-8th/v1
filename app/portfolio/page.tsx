import { Text } from '@/components/Text';
import { cn } from '@/lib/utils';
import { getDelayClass } from '@/utils/animations';
import { SitePreview } from '@/components/SitePreview';

const projects = [
  {
    title: 'Tseng Photo',
    description:
      'A website built for a photographer, Matthew Tseng, who had reduced their spending by 88% annually, switching from SquareSpace to a custom-built site.',
    tags: ['Web Design', 'SEO', 'Custom CMS'],
    url: 'https://tsengphoto.ca',
    imgSrc: '/fullpage-tsengphoto.png',
  },
  {
    title: 'InspirED Sask',
    description:
      'InspirED aims to educate citizens in society to promote a better environment. They focus on fostering practical education rather than traditional academic education.',
    tags: ['Web Design', 'SEO', 'Custom CMS'],
    url: 'https://www.inspiredsk.ca/',
    imgSrc: '/fullpage-inspired.png',
  },
  {
    title: 'KPop Dance Team',
    description:
      'A website for the Kpop Dance Team, a club under the SUO at the University of British Columbia Okanagan.',
    tags: ['Web Design', 'Custom CMS'],
    url: 'https://kdtsuo.vercel.app',
    imgSrc: '/fullpage-kdtsuo.png',
  },
];

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
            summary={project.description}
            tags={project.tags}
          />
        ))}
      </section>
    </div>
  );
}
