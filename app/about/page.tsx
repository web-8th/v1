import { Handshake, MessageCircle, ShieldCheck, Store } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui';
import { cn } from '@/lib/utils';
import { getDelayClass } from '@/utils/animations';

const founders = [
  {
    name: 'Rin Meng',
    role: 'Co-founder & Developer',
    city: 'Kelowna, BC',
    bio: 'Rin Meng focuses on clear layout systems and fast page performance. He works closely with local owners to turn rough ideas into practical websites.',
  },
  {
    name: 'Noah Stewart',
    role: 'Co-founder & Developer',
    city: 'Regina, SK',
    bio: 'Noah Stewart brings a product mindset to every build, balancing design polish with maintainable structure so clients can grow without starting over.',
  },
];

const principles = [
  {
    title: 'Local first',
    description:
      'We understand how local businesses earn trust and we build with that in mind.',
    icon: Store,
  },
  {
    title: 'Clear communication',
    description:
      'You always know what is happening, what is next, and what decisions matter.',
    icon: MessageCircle,
  },
  {
    title: 'No lock-in contracts',
    description:
      'We scope based on what you need now, not on long agreements you do not want.',
    icon: Handshake,
  },
  {
    title: 'You own your site',
    description: 'Once launched, your site and content stay in your hands.',
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <div className='nb-padding'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8'>
        <section className='space-y-6'>
          <Badge className='fade-in-from-bottom'>About Web8th</Badge>
          <h1
            className='text-4xl leading-tight tracking-tight
              fade-in-from-bottom delay-[100ms] md:text-5xl'
          >
            Born on the same day. Built for this.
          </h1>
          <div className='max-w-4xl space-y-4 text-muted-foreground'>
            <p className='fade-in-from-bottom delay-[200ms]'>
              We are birthday twins who got into building websites for fun. One project
              became another. Before long, friends and local business owners were asking
              us to build for them too.
            </p>
            <p className='fade-in-from-bottom delay-[300ms]'>
              What started as a side hustle stayed personal, but it grew quickly. Instead
              of running as two separate freelancers, we brought every project under one
              shared name: Web8th.
            </p>
            <p className='fade-in-from-bottom delay-[400ms]'>
              That gives our clients a stronger team, a clearer process, and one trusted
              place to find us. Different strengths, one standard, and a shared commitment
              to doing the work right.
            </p>
          </div>
        </section>

        <section className='space-y-5'>
          <h2 className='text-3xl tracking-tight fade-in-from-bottom'>
            Meet the team
          </h2>
          <div className='grid gap-4 md:grid-cols-2'>
            {founders.map((founder, index) => (
              <Card
                key={founder.name}
                className={cn('fade-in-from-bottom', getDelayClass(index + 3))}
              >
                <CardHeader className='flex flex-row items-start gap-4'>
                  <Avatar className='mt-1'>
                    <AvatarFallback>
                      {founder.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{founder.name}</CardTitle>
                    <CardDescription>{founder.role}</CardDescription>
                    <Badge variant='outline' className='mt-2'>
                      {founder.city}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className='text-sm text-muted-foreground'>{founder.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className='space-y-5'>
          <h2 className='text-3xl tracking-tight fade-in-from-bottom'>
            Our approach
          </h2>
          <div className='grid gap-4 sm:grid-cols-2'>
            {principles.map((item, index) => (
              <Card
                key={item.title}
                className={cn('fade-in-from-bottom', getDelayClass(index + 4))}
              >
                <CardHeader>
                  <CardTitle className='flex items-center gap-2 text-lg'>
                    <item.icon className='size-4 text-primary' />
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
