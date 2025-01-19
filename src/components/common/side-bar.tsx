import Link from 'next/link';

export default function SideBar() {
  return (
    <nav className='flex-col p-2 bg-stone-100 h-dvh'>
      <Link href='/main'>
        <p className='flex items-center p-2 rounded'>
          홈
        </p>
      </Link>
      <Link href='/message'>
        <p className='flex items-center p-2 rounded'>
          메세지
        </p>
      </Link>
      <Link href='/friend'>
        <p className='flex items-center p-2 rounded'>
          친구
        </p>
      </Link>
      <Link href='/mypage'>
        <p className='flex items-center p-2 rounded'>
          마이페이지
        </p>
      </Link>
    </nav>
  );
}
