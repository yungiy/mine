import Headers from '@/components/common/headers';
import SideBar from '@/components/home/side-bar';

export default function Main() {
  return (
    <div className='flex'>
      <section>
        <SideBar />
      </section>
      <section>
        <Headers />
      </section>
    </div>
  );
}
