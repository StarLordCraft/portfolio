'use client';

import Image from 'next/image';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BsArrowRight } from 'react-icons/bs';

import { WorkData, Slide } from '@/app/(pages)/work/page';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function WorkSlider({
  workData,
}: {
  workData: WorkData;
}) {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]">
      {workData.slides.map((slide, index: number) => {
        return (
          <SwiperSlide key={index}>
            <section
              className="grid grid-cols-2 grod-rows-2 gap-4
                cursor-pointer">
              {slide.images.map((image, index: number) => {
                return (
                  <section
                    className="relative rounded-lg overflow-hidden
                     flex items-center justify-center group">
                    <div
                      className="flex items-center justify-center
                    relative overflow-hidden">
                      <Image
                        src={image.path}
                        width={500}
                        height={500}
                        alt=""
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-l
                      from-transparent via-[#e838cc] to-[#4e22bd] opacity-0
                      group-hover:opacity-80 transition-all duration-700"></div>
                    </div>
                  </section>
                );
              })}
            </section>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
