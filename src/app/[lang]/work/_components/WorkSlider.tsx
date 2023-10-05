'use client';

import Image from 'next/image';

import { useState } from 'react';

import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { BsArrowRight } from 'react-icons/bs';

import { WorkData, Project } from '@/app/[lang]/work/page';

import WorkModal from '@/components/modals/WorkModal';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function WorkSlider({
  workData,
  locale
}: {
  workData: WorkData;
  locale: any;
}) {
  const [projectDetails, setProjectDetails] =
    useState<Project | null>(null);

  const handleSeeMore = (project: Project, event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.stopPropagation();
    setProjectDetails(project);
  };

  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='h-fit'>
        {workData.slides.map((slide, slideIndex: number) => {
          return (
            <SwiperSlide key={slideIndex}>
              <section
                className='grid grid-cols-2 grod-rows-2 gap-4
                cursor-pointer'>
                {slide.content.map(
                  (project: Project, projectIndex: number) => {
                    return (
                      <div key={projectIndex}>
                        <button
                          className='relative rounded-lg
                     flex items-center justify-center group text-white'
                          onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSeeMore(project, event)}>
                          <div
                            className='flex items-center justify-center
                    relative overflow-hidden'>
                            <Image
                              src={project.image}
                              width={500}
                              height={500}
                              alt=''
                            />
                            <div
                              className='absolute inset-0 bg-gradient-to-l
                      from-transparent via-[#e838cc] to-[#4e22bd] opacity-0
                      group-hover:opacity-80 transition-all duration-700'></div>
                            <div
                              className='absolute bottom-0 translate-y-full
                      group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                      transition-all duration-300'>
                              <div
                                className='flex items-center gap-x-2 
                        text-[13px] tracking-[0.2em]'>
                                <h3 className='delay-100'>See</h3>
                                <h2
                                  className='translate-y-[500%] group-hover:translate-y-0
                             transition-all duration-300 delay-150'>
                                  Project
                                </h2>
                                <div
                                  className='text-xl translate-y-[500%] 
                            group-hover:translate-y-0 transition-all duration-300 delay-200'>
                                  <BsArrowRight />
                                </div>
                              </div>
                            </div>
                          </div>
                        </button>
                      </div>
                    );
                  }
                )}
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <WorkModal
        project={projectDetails}
        setProjectDetails={setProjectDetails}
        locale={locale}
      />
    </>
  );
}
