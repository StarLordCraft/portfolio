import {
  RxCrop,
  RxDesktop,
  RxReader,
  RxRocket,
} from 'react-icons/rx';

import ServiceSlider from './_components/ServiceSlider';
import Bulb from '@/components/Bulb';
import Circles from '@/components/Circles';

import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lang/dictionary';

export interface ServicesData {
  readonly icon: React.JSX.Element;
  readonly title: string;
  readonly description: string;
}


export default async function Page({
  params,
}: {
  params: { lang: Locale };
}) {
  const locale = await getDictionary(params.lang, 'services');
  const servicesData: ServicesData[] = [
    {
      icon: <RxCrop />,
      title: 'Branding',
      description: locale.branding,
    },
  
    {
      icon: <RxDesktop />,
      title: locale.development.title,
      description: locale.development.description,
    },
    {
      icon: <RxReader />,
      title: 'Copywriting',
      description: locale.copywriting,
    },
    {
      icon: <RxRocket />,
      title: 'SEO',
      description: locale.SEO,
    },
  ];

  return (
    <main
      className='h-full dark:bg-primaryDark/30 py-36 flex items-center
        dark:text-white'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <section
            className='text-center flex xl:w-[30vw] flex-col
                    lg:text-left mb-4 xl:mb-0'>
            <h2 className='h2 xl:mt-8 fadeInUp'>
              {locale.servicesTitle}
              <span className='text-indigo-500 dark:text-accent'>
                {locale.servicesTitleHightlight}
              </span>
              .
            </h2>
            <p className='fadeInUp mb-4 max-2-[400px] mx-auto lg:mx-0 text-black dark:text-white'>
              {locale.servicesSubtitle}
            </p>
          </section>
          <div className='w-full xl:w-[60%] fadeInDown'>
            <ServiceSlider servicesData={servicesData} />
          </div>
        </div>
      </div>
      <Bulb />
    </main>
  );
}
