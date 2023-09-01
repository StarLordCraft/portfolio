import Image from 'next/image';
import avatar from '@/../public/avatar.png';
export default function Avatar() {
  return (
    <div className='hidden xl:flex'>
      <Image
        src={avatar}
        width={737}
        height={678}
        alt='/'
        className='w-full h-full translate-z-0'
      />
    </div>
  );
}
