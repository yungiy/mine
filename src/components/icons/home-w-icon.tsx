import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import homeWIcon from '@/assets/icons/home-white.svg'

export default function HomeWhiteIcon({ className }: { className?: string }) {
  return (
    <Image
      src={homeWIcon}
      alt="home"
      className={twMerge('h-5 w-5', className)}
    />
  );
}