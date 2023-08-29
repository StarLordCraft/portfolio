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


const aboutData = [
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
        <section className="h-full dark:bg-primaryDark/30 py-32 text-center xl:text-left">
            <Circles />
            <div className="hidden xl:flex absolute bottom-0 -left-[376px]
             fadeInRight">
              <Avatar />
            </div>
            <section className="container mx-auto h-full flex flex-col items-center
             xl:flex-row gap-x-6">
              <div>

              </div>
              <div>
                {aboutData.map((item, itemIndex) => {
                  return (
                    <section key={itemIndex}
                    className="cursor-pointer capitalize xl:text-lg
                    relative after:w-8 after:h-[2px] after:bg-white after:-bottom-1">
                      {item.title}
                    </section>
                  )
                })}
              </div>
            </section>
        </section>
    );
}