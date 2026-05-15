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
import { useToast } from '@/hooks/use-toast';

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
          <h1
            className='text-4xl tracking-tight fade-in-from-bottom delay-[100ms]
              md:text-5xl font-serif'
          >
            Let&apos;s build something together
          </h1>
          <p className='max-w-3xl text-muted-foreground fade-in-from-bottom delay-[200ms]'>
            Whether you have a full brief or just an idea, we&apos;d love to hear from
            you.
          </p>
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
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className='space-y-2'>
                <Label htmlFor='businessName'>Business Name (optional)</Label>
                <Input
                  id='businessName'
                  value={businessName}
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
                  onChange={(event) => setMessage(event.target.value)}
                  rows={6}
                />
              </div>

              <Button onClick={handleSubmit} className='w-full sm:w-auto'>
                Send Message
              </Button>
            </CardContent>
          </Card>

          <div className='grid gap-4 fade-in-from-bottom delay-[100ms]'>
            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>Rin Meng</CardTitle>
                <CardDescription>Kelowna, BC</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  className='text-sm text-primary underline underline-offset-4'
                  href='mailto:rin@web8th.com'
                >
                  rin@web8th.com
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className='text-lg'>Noah Stewart</CardTitle>
                <CardDescription>Regina, SK</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  className='text-sm text-primary underline underline-offset-4'
                  href='mailto:nostew@web8th.com'
                >
                  nostew@web8th.com
                </a>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
