"use client"

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

import { useState } from "react";
import CountUp from 'react-countup';

import Avatar from "@/components/Avatar";
import Circles from '@/components/Circles';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaLaravel,
  FaFigma,
  FaVuejs,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPhp,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiMysql,
} from "react-icons/si";

export interface InfoItem {
  title: string;
  stage?: string;
  icons?: React.JSX.Element[];
  link?: Url;
}

export interface AboutDataItem {
  title: string;
  info: InfoItem[];
  icons?: React.JSX.Element[];
}

const aboutData: AboutDataItem[] = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaBootstrap />,
          <SiTailwindcss />,
          <FaFigma />,
          <FaJs />,
          <SiTypescript />,
          <FaReact />,
          <FaVuejs />,
          <SiNextdotjs />,
        ],
      }as const,
      {
        title: 'Backend Development',
        icons: [
          <SiPhp />,
          <FaLaravel />,
          <SiNodedotjs />,
          <SiMysql />,
          <SiMongodb />,
          <SiFirebase />
        ],
      }as const,
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: "+30.000,00 R$ High School Scholarship",
        stage: '2020 - 2022',
        link: 'https://portal.montesclaros.mg.gov.br/noticia/educacao/prefeitura-realiza-cerimonia-de-encerramento-do-projeto-eu-vou-fazer-a-prova-brasil',
      },
      {
        title: 'Silver Medal - OBA',
        stage: '2020 - 2021',
        link: 'http://www.oba.org.br/site/index.php/zerouminforma.com.br/estudante-da-escola-do-sesi-de-dourados-recebe-medalha-de-ouro-na-olimpiada-brasileira-de-astronomia-e-astronautica/?p=conteudo&idcat=22&pag=conteudo&acao=mostra&idaluno=2483&olimp=oba&ed=2020',
      }as const,
      {
        title: 'Gold Medal - OBA',
        stage: '2021 - 2022',
        link: 'http://www.oba.org.br/site/index.php/zerouminforma.com.br/estudante-da-escola-do-sesi-de-dourados-recebe-medalha-de-ouro-na-olimpiada-brasileira-de-astronomia-e-astronautica/?p=conteudo&idcat=22&pag=conteudo&acao=mostra&idaluno=413251&olimp=oba&ed=2021',
      }as const,
      {
        title: 'Bronze Medal - OBA',
        stage: '2022 - 2023',
        link: 'http://www.oba.org.br/site/index.php/zerouminforma.com.br/estudante-da-escola-do-sesi-de-dourados-recebe-medalha-de-ouro-na-olimpiada-brasileira-de-astronomia-e-astronautica/?p=conteudo&idcat=22&pag=conteudo&acao=mostra&idaluno=949023&olimp=oba&ed=2022',
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
            <div className="hidden xl:flex absolute bottom-0 -left-[235px]
             fadeInRight">
              <Avatar />
            </div>
            <main className="container mx-auto h-full flex flex-col items-center
             xl:flex-row gap-x-6">

              <section className="flex-1 flex flex-col justify-center">
                <h2 className="h2">Captivating <span className="text-indigo-500 dark:text-accent">
                  stories</span> birth magnificent
                 Apps</h2>
                <p className="max-w-[500px] mx-auto xl:mx-9 mb-6 xl:mb-12 px-2 xl:px-0 text-black/60 dark:text-white/60">
                  I began freelancing as a developer since 2023. Since then, I've done
                  remote work for agencies and collabored on digital products for
                  business and consumer use.
                </p>
                <div>counters</div>
              </section>

              <section className="flex flex-col w-full xl:max-w-[48%] h-[480px] overflow-auto md:overflow-hidden">
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
                      max-w-max gap-x-2 gap-y-2 md:gap-y-0 items-center justify-center dark:text-white">
                        
                        <div className="font-bold mb-0">{item.title}</div>
                        <div className="hidden md:flex">-</div>
                        {item?.stage && <div>{item?.stage}</div>}
                        {item.link && <Link href={item.link} target="_blanc"
                        className=" hover:text-indigo-500 dark:hover:text-accent relative after:w-8 after:h-[2px] after:bg-black after:dark:bg-white
                        after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300
                         hover:after:w-full hover:after:bg-indigo-500 dark:hover:after:bg-accent">See Proof</Link>}
                        
                        <div className="flex gap-x-4 lg:pr-12 flex-wrap">
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