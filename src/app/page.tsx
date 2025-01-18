import Button from '@/components/common/button';
import CheckBox from '@/components/common/check-box';
import Input from '@/components/common/input';

export default function Home() {
  return (
    <div className='p-4'>
      <Input type={'search'} className='border' />
      <Button className='bg-black'>안녕</Button>
      <CheckBox className='border bg-neutral-200' />
    </div>
  );
}