import { Infinity } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from './Text';

const START_YEAR = 2025;

export function Footer() {
  const currentYear = new Date().getFullYear();
  const yearLabel =
    currentYear > START_YEAR ? `${START_YEAR} - ${currentYear}` : `${START_YEAR}`;

  return (
    <footer className='border-t'>
      <div
        className='mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-6
          text-center sm:px-6 lg:px-8'
      >
        <p className='text-sm text-muted-foreground'>&copy; {yearLabel}</p>
        <Image
          src='/icons/logo_black_svg_600px.svg'
          alt='Web8th logo'
          width={180}
          height={57}
          className='h-auto w-60 dark:invert'
        />
        <Text variant='muted'>brought to you by</Text>
        <div className='flex items-center gap-3'>
          <Link href='https://rinm.dev' target='_blank'>
            <Image
              src='/rmlogov2.png'
              alt='Rin logo'
              width={40}
              height={40}
              className='object-cover'
            />
          </Link>
          <Link href='https://nostew.me' target='_blank'>
            <Image
              src='https://raw.githubusercontent.com/noahstew/personal-website-3.0/master/public/favicon.png'
              alt='Noah logo'
              width={40}
              height={40}
              className='object-cover rounded'
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
