'use client';

import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { RxArrowTopRight } from 'react-icons/rx';

import { ServicesData } from '@/app/[lang]/services/page';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Link from 'next/link';

export default function ServiceSlider({
  servicesData,
}: {
  servicesData: ServicesData[];
}) {
  return (
    <Swiper
      breakpoints={{
        520: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[348px]'>
      {servicesData.map((service: ServicesData, index: number) => {
        return (
          <SwiperSlide
            key={index}
            className='overflow-y-auto h-full'>
            <a
              href='/contact'
              className='bg-[rgba(55,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)]
                    h-full rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 transition-all duration-300
                    sm:gap-x-0 group cursor-pointer text-black dark:text-white/40 relative'>
              <div className='text-4xl text-indigo-500 dark:text-accent font-bold'>
                {service.icon}
              </div>

              <div>
                <h3 className='text-black dark:text-white font-bold my-2'>
                  {service.title}
                </h3>
                <p className='max-w-[350px] leading-normal text-black dark:text-white/40'>
                  {service.description}
                </p>
              </div>

              <div className='text-3xl absolute bottom-7'>
                <RxArrowTopRight
                  className='group-hover:rotate-45 group-hover:text-indigo-500
                            dark:group-hover:text-accent transition-all duration-300'
                />
              </div>
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
