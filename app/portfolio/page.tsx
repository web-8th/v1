import { Text } from '@/components/Text';
import { cn } from '@/lib/utils';
import { getDelayClass } from '@/utils/animations';
import { SitePreview } from '@/components/SitePreview';

const projects = [
  {
    title: "Don's Fences & Services",
    description:
      "A website and custom invoicing system built for Don's Fences & Services, a fencing and contracting business in Kelowna. The site went from concept to live in 2 days. Don previously filled out every invoice by hand in a Word document — the new system replaces that with a simple flow: add a client, create an invoice, add line items, and send. The client receives a professional PDF invoice by email within seconds, all built in 6 hours.",
    tags: ['Web Design', 'SEO', 'Custom CMS', 'Invoicing System'],
    url: 'https://donsfences.ca',
    imgSrc: '/fullpage-donsfns.png',
  },
  {
    title: 'Tseng Photo',
    description:
      'A photography portfolio and booking website built for Matthew Tseng — our first real client outside of school projects, taken on pro bono to prove what we could deliver. Migrated him off Squarespace, cutting his annual costs by 88%. Fast, smooth animations, and an image system built to keep every photo loading quickly at scale.',
    tags: ['Web Design', 'SEO', 'Custom CMS'],
    url: 'https://tsengphoto.ca',
    imgSrc: '/fullpage-tsengphoto.png',
  },
  {
    title: 'InspirED Sask',
    description:
      "InspirED aims to educate citizens in society to promote a better environment. They focus on fostering practical education rather than traditional academic education. The site includes a custom admin panel where InspirED's team can log in to write, edit, and manage their own blog posts — no developer needed for day-to-day updates.",
    tags: ['Web Design', 'SEO', 'Custom CMS'],
    url: 'https://www.inspiredsk.ca/',
    imgSrc: '/fullpage-inspired.png',
  },
  {
    title: 'KDT @ SUO',
    description:
      "A website built for the Kpop Dance Team (KDT), a club under the SUO at the University of British Columbia Okanagan. We led the website's development and ongoing maintenance as Digital Producer, including a custom CMS that lets the club manage their own content — links, member positions, contacts, and sponsors — without needing a developer. Now on its fourth version, the site is built for speed and discoverability.",
    tags: ['Web Design', 'SEO', 'Custom CMS'],
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
