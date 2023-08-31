'use client';

import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FaQuoteLeft } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TestimonialSlider({
  testimonialData,
}: {
  testimonialData: string[];
}) {
  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Navigation]}
      className='h-[400px]'>
      {testimonialData.map((person: string, index: number) => {
        return (
          <SwiperSlide key={index}>
            <div className='mt-5 items-center gap-x-8 h-full px-16
            flex justify-center'>
              <section
                className='flex-1 flex flex-col justify-center
                before:w-[1px] xl:before:bg-white/20 xl:before:absolute
                xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                <div className='mb-4'>
                  <FaQuoteLeft
                    className='text-4xl xl:text-6xl
                    text-black/20 dark:text-white/20
                        mx-auto md:mx-0'
                  />
                </div>
                <p
                  className='text-black dark:text-white/40
                xl:text-lg texnt-center md:text-left'>
                  {person}
                </p>
              </section>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
