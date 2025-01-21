import Link from 'next/link';
import HomeWhiteIcon from '../icons/home-w-icon';
import MessageWhiteIcon from '../icons/message-w-icon';

export default function SideBar() {
  return (
    <nav className='h-dvh w-16 flex-col p-2 border-r border-stone-200'>
      <Link href='/main'>
        <p className='flex items-center justify-center p-2 rounded pb-14'>
          <HomeWhiteIcon />
        </p>
      </Link>
      <Link href='/messages'>
        <p className='flex items-center justify-center p-2 rounded'><MessageWhiteIcon/></p>
      </Link>
      <Link href='/search'>
        <p className='flex items-center justify-center p-2 rounded'><SearchWhiteIcon/></p>
      </Link>
      <Link href='/mypage'>
        <p className='flex items-center justify-center p-2 rounded'></p>
      </Link>
    </nav>
  );
}
