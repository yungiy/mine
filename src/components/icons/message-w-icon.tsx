import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import messageWIcon from '@/assets/icons/message-white.svg'

export default function MessageWhiteIcon({ className }: { className?: string }) {
  return (
    <Image
      src={messageWIcon}
      alt="message"
      className={twMerge('h-5 w-5', className)}
    />
  );
}