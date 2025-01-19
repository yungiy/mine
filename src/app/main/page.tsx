import SideBar from '@/components/common/side-bar';

export default function Main() {
  return (
    <div className='flex'>
      <section >
        <SideBar />
      </section>
      <section>
        안녕
      </section>
    </div>
  );
}