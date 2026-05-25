'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Form,
  FormField,
  FormItem,
  FormMessage,
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
import { canSendEmail, getRemainingCooldown, markEmailSent } from '@/lib/rate-limit';
import { cn } from '@/lib/utils';
import { getDelayClass } from '@/utils/animations';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<{ formError: string }>({
    defaultValues: { formError: '' },
  });

  const formatCooldown = (milliseconds: number) => {
    if (milliseconds <= 0) return '0m';
    const totalSeconds = Math.ceil(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    if (minutes === 0) return `${seconds}s`;
    if (seconds === 0) return `${minutes}m`;
    return `${minutes}m ${seconds}s`;
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    form.clearErrors('formError');

    if (!name.trim() || !email.trim() || !message.trim()) {
      form.setError('formError', {
        message: 'Please share your name, email, and a message.',
      });
      return;
    }

    if (!canSendEmail()) {
      const remaining = getRemainingCooldown();
      form.setError('formError', {
        message: `Please wait ${formatCooldown(remaining)} before sending again.`,
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          businessName: businessName.trim() || undefined,
          budgetRange: budgetRange || undefined,
          message: message.trim(),
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error || 'Failed to send message.');
      }

      markEmailSent();
      toast.success('Thanks for reaching out. We will get back to you soon.');
      form.clearErrors('formError');
      setName('');
      setEmail('');
      setBusinessName('');
      setBudgetRange('');
      setMessage('');
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to send message.';
      form.setError('formError', { message: errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='nb-padding'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8'>
        <section className='space-y-3'>
          <Text
            variant='hd-xxl'
            className={cn(
              'text-4xl tracking-tight fade-in-from-bottom md:text-5xl',
              getDelayClass(1)
            )}
          >
            Let&apos;s build something together
          </Text>
          <Text
            variant='muted'
            className={cn(
              'max-w-3xl text-muted-foreground fade-in-from-bottom',
              getDelayClass(2)
            )}
          >
            Whether you have a full brief or just an idea, we&apos;d love to hear from
            you.
          </Text>
        </section>

        <section className='grid gap-6 lg:grid-cols-[2fr_1fr]'>
          <Card className={cn('fade-in-from-bottom', getDelayClass(3))}>
            <CardHeader>
              <CardTitle>Tell us about your project</CardTitle>
              <CardDescription>
                Share the basics. We will reply with a clear next step.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <Form {...form}>
                <div className='space-y-4'>
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

                  <FormField
                    name='formError'
                    render={() => (
                      <FormItem>
                        <FormMessage className='text-red-500 fade-in-from-bottom' />
                      </FormItem>
                    )}
                  />

                  <Button
                    onClick={handleSubmit}
                    className='w-full sm:w-auto'
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </Form>
            </CardContent>
          </Card>
          <div className={cn('flex flex-col fade-in-from-bottom', getDelayClass(4))}>
            <Text variant='hd-lg' className={cn('fade-in-from-bottom', getDelayClass(5))}>
              Socials
            </Text>
            <Text variant='bd-sm' className={cn('fade-in-from-bottom', getDelayClass(6))}>
              Here's where you can find us.
            </Text>
            <div className={cn('flex flex-col gap-4 mt-4', getDelayClass(7))}>
              <Link
                href='https://www.linkedin.com/in/nostew/'
                target='_blank'
                rel='noopener noreferrer'
                className={cn(
                  `border border-foreground/40 rounded-xl h-20 drop-shadow-lg flex
                  items-center justify-between gap-4 p-4 bg-accent hover:bg-accent/50
                  t200e fade-in-from-bottom`,
                  getDelayClass(8)
                )}
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
                className={cn(
                  `border border-foreground/40 rounded-xl h-20 drop-shadow-lg flex
                  items-center justify-between gap-4 p-4 bg-accent hover:bg-accent/50
                  t200e fade-in-from-bottom`,
                  getDelayClass(9)
                )}
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
