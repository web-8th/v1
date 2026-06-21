import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, SquareArrowOutUpRight } from 'lucide-react';
import { Badge, Button } from '@/components/ui';
import { cn } from '@/lib/utils';

interface SitePreviewProps {
  src: string;
  alt: string;
  url: string;
  title: string;
  summary?: string;
  tags?: string[];
  className?: string;
}

export function SitePreview({
  src,
  alt,
  url,
  title,
  summary,
  tags,
  className,
}: SitePreviewProps) {
  return (
    <div
      className={cn(
        'overflow-hidden flex flex-col justify-between rounded-lg',
        'drop-shadow-xl border border-border bg-card',
        className
      )}
    >
      {/* Browser chrome */}
      <div
        className='flex items-center gap-1.5 border-b border-border bg-muted/60 px-3
          py-2'
      >
        <span className='size-2 rounded-full bg-red-400' />
        <span className='size-2 rounded-full bg-yellow-400' />
        <span className='size-2 rounded-full bg-green-500' />
        <span
          className='ml-2 flex-1 truncate rounded border border-border bg-background
            px-2 py-0.5 font-mono text-[11px] text-muted-foreground'
        >
          {url}
        </span>
        <ArrowLeft className='size-4 text-foreground' />
        <ArrowRight className='size-4 text-foreground' />
      </div>

      {/* Scrollable preview */}
      <div className='h-72 overflow-y-auto overflow-x-hidden'>
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={5000}
          className='w-full h-auto block'
        />
      </div>

      {/* Summary */}
      {summary && (
        <div className='flex-1 border-t border-border px-3 pt-3'>
          <p className='text-sm text-muted-foreground'>{summary}</p>
        </div>
      )}

      {/* Badges */}
      {tags?.length && (
        <div className='flex flex-wrap gap-1.5 px-3 py-3'>
          {tags.map((tag) => (
            <Badge key={tag} variant='secondary'>
              {tag}
            </Badge>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className='flex items-center justify-between border-t border-border px-3 py-2'>
        <span className='text-sm font-medium'>{title}</span>
        <Link
          href={url}
          target='_blank'
          className='flex items-center gap-1 text-xs text-primary hover:text-foreground'
        >
          <Button className='cursor-pointer'>
            View live
            <SquareArrowOutUpRight className='size-3' />
          </Button>
        </Link>
      </div>
    </div>
  );
}
