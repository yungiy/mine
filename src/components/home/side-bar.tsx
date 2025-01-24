import Link from 'next/link';
import HomeWhiteIcon from '../icons/home-w-icon';
import MessageWhiteIcon from '../icons/message-w-icon';
import SearchWhiteIcon from '../icons/search-w-icon';
import NotiWhiteIcon from '../icons/noti-w-icon';

export default function SideBar() {
  return (
    <nav className='h-dvh w-16 flex-col p-2 border-r border-stone-200'>
      <Link href='/main'>
        <p className='flex items-center justify-center py-6 px-2 rounded pb-9'>
          <HomeWhiteIcon className='h-6 w-6'/>
        </p>
      </Link>
      <Link href='/messages'>
        <p className='flex items-center justify-center py-3 px-2 rounded'>
          <MessageWhiteIcon className='h-6 w-6' />
        </p>
      </Link>
      <Link href='/search'>
        <p className='flex items-center justify-center py-3 px-2 rounded'>
          <SearchWhiteIcon className='h-6 w-6' />
        </p>
      </Link>
      <Link href='/notification' >
        <p className='flex items-center justify-center py-3 px-2  rounded'>
          <NotiWhiteIcon className='h-6 w-6'/>
        </p>
      </Link>
      {/* <Link href='/mypage'>
        <p className='flex items-center justify-center p-2 rounded'>
          <MyPageIcon/>
        </p>
      </Link> */}
    </nav>
  );
}
