import Button from '@/components/common/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Button className=''>
        <Link href='/login'>로그인하기</Link>
      </Button>
      <Button>
        <Link href='main'>둘러보기</Link>
      </Button>
    </>
  );
}
