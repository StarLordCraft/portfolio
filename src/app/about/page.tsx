"use client"

import { useState } from "react";

import Avatar from "@/components/Avatar";
import Circles from '@/components/Circles';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

interface InfoItem {
  title: string;
  stage?: string;
  icons?: React.JSX.Element[];
}

interface AboutDataItem {
  title: string;
  info: InfoItem[];
  icons?: React.JSX.Element[];
}

const aboutData: AboutDataItem[] = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      }as const,
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      }as const,
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      }as const,
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      }as const,
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      }as const,
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      }as const,
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      }as const,
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      }as const,
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      }as const,
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      }as const,
    ],
  },
];

export default function Page()
{
    const [index, setIndex] = useState <number> (0);
    return (
        <section className="h-full dark:bg-primaryDark/30 py-32 text-center dark:text-white xl:text-left">
            <Circles />
            <div className="hidden xl:flex absolute bottom-0 -left-[376px]
             fadeInRight">
              <Avatar />
            </div>
            <main className="container mx-auto h-full flex flex-col items-center
             xl:flex-row gap-x-6">
              <section className="flex-1 flex flex-col justify-center">

              </section>

              <section className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
                <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                  {aboutData.map((item: AboutDataItem, itemIndex: number) => {
                    return (
                      <button key={itemIndex}
                      className={`${index === itemIndex && 'text-indigo-800 dark:text-accent after:w-full after:bg-indigo-800 dark:after:bg-accent'} 
                      cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-black after:dark:bg-white
                      after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300`}
                      onClick={() => setIndex(itemIndex)}>
                        {item.title}
                      </button>
                    )
                  })}
                </div>
                <div className="py-2 xl:py-6 flex flex-col gap-y-4 items-center xl:items-start">
                  {aboutData[index].info.map((item: InfoItem, itemIndex: number) => {
                    return (
                      <div key={itemIndex} className="flex-1 flex flex-col md:flex-row 
                      max-w-max gap-2 items-center dark:text-white">
                        <div>{item.title}</div>
                        
                        <div className="hidden md:flex">-</div>
                        {item?.stage && <div>{item?.stage}</div>}
                        
                        <div className="flex gap-x-4">
                          {item.icons?.map((icon: React.JSX.Element, iconIndex: number) => {
                              return (
                                <div key={iconIndex} className="text-2xl">{icon}</div>
                              );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

            </main>
        </section>
    );
}