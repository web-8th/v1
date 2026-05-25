'use client';

import { useState } from 'react';

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from '@/components/ui';
import { Text } from '@/components/Text';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const payload = { name, email, businessName, budgetRange, message };
    console.log('Contact form submit:', payload);
    toast.success('Thanks for reaching out. We will get back to you soon.');
  };

  return (
    <div className='nb-padding'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8'>
        <section className='space-y-3'>
          <Badge className='fade-in-from-bottom'>Contact</Badge>
          <Text
            variant='hd-xxl'
            className='text-4xl tracking-tight fade-in-from-bottom delay-[100ms]
              md:text-5xl'
          >
            Let&apos;s build something together
          </Text>
          <Text
            variant='muted'
            className='max-w-3xl text-muted-foreground fade-in-from-bottom delay-[200ms]'
          >
            Whether you have a full brief or just an idea, we&apos;d love to hear from
            you.
          </Text>
        </section>

        <section className='grid gap-6 lg:grid-cols-[2fr_1fr]'>
          <Card className='fade-in-from-bottom'>
            <CardHeader>
              <CardTitle>Tell us about your project</CardTitle>
              <CardDescription>
                Share the basics. We will reply with a clear next step.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='name'>Name</Label>
                <Input
                  id='name'
                  value={name}
                  placeholder='John Doe'
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  value={email}
                  placeholder='john@example.com'
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='businessName'>Business Name (optional)</Label>
                <Input
                  id='businessName'
                  value={businessName}
                  placeholder='Acme Inc.'
                  onChange={(event) => setBusinessName(event.target.value)}
                />
              </div>

              <div className='space-y-2'>
                <Label>Budget Range (optional)</Label>
                <Select value={budgetRange} onValueChange={setBudgetRange}>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Select a range' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='non-profit'>I'm a non-profit</SelectItem>
                    <SelectItem value='under-2k'>Under $250</SelectItem>
                    <SelectItem value='2k-5k'>$250 - $500</SelectItem>
                    <SelectItem value='5k-10k'>$500 - $1,000</SelectItem>
                    <SelectItem value='10k-plus'>$1,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className='space-y-2'>
                <Label htmlFor='message'>Message</Label>
                <Textarea
                  id='message'
                  value={message}
                  placeholder='Your message here...'
                  onChange={(event) => setMessage(event.target.value)}
                  rows={6}
                />
              </div>

              <Button onClick={handleSubmit} className='w-full sm:w-auto'>
                Send Message
              </Button>
            </CardContent>
          </Card>
          <div className='flex flex-col'>
            <Text variant='hd-lg'>Socials</Text>
            <Text variant='bd-sm'>Here's where you can find us.</Text>
            <div className='flex flex-col gap-4 mt-4'>
              <Link
                href='https://www.linkedin.com/in/nostew/'
                target='_blank'
                rel='noopener noreferrer'
                className='border border-foreground/40 rounded-xl h-20 drop-shadow-lg flex
                  items-center justify-between gap-4 p-4 bg-accent hover:bg-accent/50
                  t200e'
              >
                <Image
                  src='/icons/linkedin-linked-in-svgrepo-com.svg'
                  alt='LinkedIn'
                  className='invert-100 not-dark:invert-0'
                  width={48}
                  height={48}
                />
                <Text variant='hd-sm'>Noah Stewart</Text>
              </Link>
              <Link
                href='https://www.linkedin.com/in/rinmeng/'
                target='_blank'
                rel='noopener noreferrer'
                className='border border-foreground/40 rounded-xl h-20 drop-shadow-lg flex
                  items-center justify-between gap-4 p-4 bg-accent hover:bg-accent/50
                  t200e'
              >
                <Image
                  src='/icons/linkedin-linked-in-svgrepo-com.svg'
                  alt='LinkedIn'
                  className='invert-100 not-dark:invert-0'
                  width={48}
                  height={48}
                />
                <Text variant='hd-sm'>Rin Meng</Text>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
