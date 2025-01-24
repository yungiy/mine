import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import notiIcon from '@/assets/icons/noti-white.svg'

export default function NotiWhiteIcon({ className }: { className?: string }) {
  return (
    <Image
      src={notiIcon}
      alt="notification"
      className={twMerge('h-5 w-5', className)}
    />
  );
}