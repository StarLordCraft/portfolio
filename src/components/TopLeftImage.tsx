import Image from 'next/image';
import topLeftImg from '@/../public/top-left-img.png';
export default function TopLeftImage() {
  return (
    <section className='absolute left-0 top-0'>
      <div
        className='hidden dark:block mix-blend-color-dodge
            z-10 w-[200px] xl:w-[400px]'>
        <Image
          src={topLeftImg}
          alt=''
          width={400}
          height={400}
        />
      </div>
      <div className='blur w-[200px] xl:w-[400px] dark:hidden'></div>
    </section>
  );
}
