import Link from 'next/link';
import Image from 'next/image';

import ToggleTheme from './ToggleTheme';
import Socials from './Socials';

import logo from '@/../public/logo.png';
import type { Locale } from '@/i18n.config';

export default function Header({lang}: {lang:Locale}): React.JSX.Element
{
  return (
    <header
      className='absolute z-30 w-full flex items-center
     px-16 xl:px-0 xl:h-[90px] mt-5'>
      <section className='container mx-auto'>
        <div
          className='flex flex-col justify-between
             items-center gap-y-4'>
          <div className='flex justify-between items-center w-full'>
            <a href={'/'}>
              <Image
                src={logo}
                width={40}
                height={40}
                alt=''
                priority={true}
              />
            </a>
            <ToggleTheme lang={lang}/>
          </div>
          <Socials />
        </div>
      </section>
    </header>
  );
}
