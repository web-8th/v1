// components/SitePreview.tsx
import Image from 'next/image';
import Link from 'next/link';
import { SquareArrowOutUpRight } from 'lucide-react';

interface SitePreviewProps {
  src: string;
  alt: string;
  url: string;
  title: string;
  imageHeight?: number; // actual px height of your full-page PNG
}

export function SitePreview({
  src,
  alt,
  url,
  title,
  imageHeight = 2400,
}: SitePreviewProps) {
  return (
    <div className='overflow-hidden rounded-lg border border-border bg-card'>
      {/* Browser chrome */}
      <div
        className='flex items-center gap-1.5 border-b border-border bg-muted/60 px-3 py-2'
      >
        <span className='size-2 rounded-full bg-red-400' />
        <span className='size-2 rounded-full bg-yellow-400' />
        <span className='size-2 rounded-full bg-green-500' />
        <span
          className='ml-2 flex-1 truncate rounded border border-border bg-background px-2
            py-0.5 font-mono text-[11px] text-muted-foreground'
        >
          {url.replace('https://', '')}
        </span>
      </div>

      {/* Scrollable preview */}
      <div className='h-72 overflow-y-auto overflow-x-hidden'>
        <div className='relative w-full' style={{ height: imageHeight }}>
          <Image src={src} alt={alt} fill className='object-cover object-top' />
        </div>
      </div>

      {/* Footer */}
      <div className='flex items-center justify-between border-t border-border px-3 py-2'>
        <span className='text-sm font-medium'>{title}</span>
        <Link
          href={url}
          target='_blank'
          className='flex items-center gap-1 text-xs text-muted-foreground
            hover:text-foreground'
        >
          View live <SquareArrowOutUpRight className='size-3' />
        </Link>
      </div>
    </div>
  );
}
