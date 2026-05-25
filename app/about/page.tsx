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
import { Text } from '@/components/Text';
import { cn } from '@/lib/utils';
import { getDelayClass } from '@/utils/animations';

const founders = [
  {
    name: 'Rin Meng',
    role: 'Co-founder & Developer',
    city: 'Kelowna, BC',
    bio: 'Rin focuses on frontend design and CMS setup, turning rough ideas into clean, fast sites that local owners can actually manage themselves.',
  },
  {
    name: 'Noah Stewart',
    role: 'Co-founder & Developer',
    city: 'Regina, SK',
    bio: 'Noah gravitates toward the backend, architecture, data flow, and the kind of complex problems most developers avoid. He makes sure what we build can scale.',
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
    description:
      'Once launched, your domain, site and its content stay in your hands. Copyright is yours, built by Web8th.',
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <div className='nb-padding'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8'>
        <section className='space-y-6'>
          <Badge className='fade-in-from-bottom'>About Web8th</Badge>
          <Text
            variant='hd-xxl'
            className={cn(
              'text-4xl leading-tight tracking-tight fade-in-from-bottom md:text-5xl',
              getDelayClass(1)
            )}
          >
            Born on the same day. Built for this.
          </Text>
          <div className='max-w-4xl space-y-4 text-muted-foreground'>
            <Text variant='muted' className={cn('fade-in-from-bottom', getDelayClass(2))}>
              We are birthday twins who got into building websites for fun. One project
              became another. Before long, friends and local business owners were asking
              us to build for them too.
            </Text>
            <Text variant='muted' className={cn('fade-in-from-bottom', getDelayClass(3))}>
              What started as a side hustle stayed personal, but it grew quickly. Instead
              of running as two separate freelancers, we brought every project under one
              shared name: Web8th.
            </Text>
            <Text variant='muted' className={cn('fade-in-from-bottom', getDelayClass(4))}>
              That gives our clients a stronger team, a clearer process, and one trusted
              place to find us. Different strengths, one standard, and a shared commitment
              to doing the work right.
            </Text>
          </div>
        </section>

        <section className='space-y-5'>
          <Text variant='hd-xl' className='text-3xl tracking-tight fade-in-from-bottom'>
            Meet the team
          </Text>
          <div className='grid gap-4 md:grid-cols-2'>
            {founders.map((founder, index) => (
              <Card
                key={founder.name}
                className={cn('fade-in-from-bottom', getDelayClass(index + 3))}
              >
                <CardHeader className='flex flex-row items-center gap-4'>
                  <Avatar className='h-full w-auto aspect-square self-stretch'>
                    <AvatarFallback className='h-full aspect-square'>
                      {founder.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{founder.name}</CardTitle>
                    <CardDescription>{founder.role}</CardDescription>
                    <Badge variant='outline'>{founder.city}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Text variant='muted-sm' className='text-sm text-muted-foreground'>
                    {founder.bio}
                  </Text>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className='space-y-5'>
          <Text variant='hd-xl' className='text-3xl tracking-tight fade-in-from-bottom'>
            Our approach
          </Text>
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
