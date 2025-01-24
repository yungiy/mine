import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import searchWhiteIcon from '@/assets/icons/search-white.svg'

export default function SearchWhiteIcon({ className }: { className?: string }) {
  return (
    <Image
      src={searchWhiteIcon}
      alt="search"
      className={twMerge('h-5 w-5', className)}
    />
  );
}