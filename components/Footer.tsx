import Image from 'next/image';

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
      </div>
    </footer>
  );
}
