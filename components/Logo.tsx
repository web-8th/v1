import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  iconSize?: number;
  showText?: boolean;
  onClick?: () => void;
}

export function Logo({ className, iconSize = 20, showText = true, onClick }: LogoProps) {
  return (
    <div className='flex items-center gap-3'>
      <Button variant='link' className={cn('p-0 m-0', className)}>
        <Link href='/'>
          <Image
            className='not-dark:invert-100'
            src='/icons/8th_svg.svg'
            alt='Logo'
            width={Math.round(iconSize * 1.5)}
            height={Math.round(iconSize * 1.5 * (1079 / 1905))}
            style={{ width: iconSize * 1.5, height: 'auto' }}
          />
        </Link>
      </Button>
    </div>
  );
}
