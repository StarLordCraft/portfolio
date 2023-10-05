import WorkSlider from './_components/WorkSlider';
import Bulb from '@/components/Bulb';
import Circles from '@/components/Circles';

import type { StaticImageData } from 'next/image';

import type { Locale } from '@/i18n.config';
import { getDictionary } from '@/lang/dictionary';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaLaravel,
  FaFigma,
  FaVuejs,
  FaBootstrap,
} from 'react-icons/fa';

import { TbBrandCpp } from 'react-icons/tb';

import {
  SiTypescript,
  SiPhp,
  SiTailwindcss,
  SiSfml,
} from 'react-icons/si';
export interface Project {
  readonly title: string;
  readonly description: string;
  readonly icons?: React.JSX.Element[];
  readonly deploy: string;
  readonly image: StaticImageData;
  readonly source: string;
}

export interface WorkData {
  readonly slides: { readonly content: Project[] }[];
}

import rafaEventsIMG from 'public/Projetos/rafa-events.png';
import tetrisIMG from 'public/Projetos/tetris.png';
import admDashIMG from 'public/Projetos/admDash.png';
import gamesIMG from 'public/Projetos/games.jpeg';
import hangmanGameIMG from 'public/Projetos/hangmanGame.png';
import rafaPayIMG from 'public/Projetos/rafa-pay.png';
import memeGeneratorIMG from 'public/Projetos/memeGenerator.png';
import airBnBIMG from 'public/Projetos/airBnB.png';

export default async function Page({
  params,
}: {
  params: { lang: Locale };
}) {
  const locale = await getDictionary(params.lang, 'work');
  const workData: WorkData = {
    slides: [
      {
        content: [
          {
            title: 'Rafa Events',
            description: locale.projects.rafaEvents,
            deploy: 'https://rafa-events.vercel.app/',
            image: rafaEventsIMG,
            source: 'https://github.com/StarLordCraft/likeMeetUp.com',
            icons: [
              <FaLaravel key={1} />,
              <SiPhp key={2} />,
              <FaBootstrap key={3} />,
              <SiTailwindcss key={4} />,
              <FaFigma key={5} />,
              <FaJs key={6} />,
              <SiTypescript key={7} />,
              <FaReact key={8} />,
              <FaVuejs key={9} />,
            ],
          },
          {
            title: 'Tetris',
            description: locale.projects.tetris,
            deploy: 'https://tetris-lime.vercel.app/',
            image: tetrisIMG,
            source: 'https://github.com/StarLordCraft/TETRIS',
            icons: [
              <FaHtml5 key={1} />,
              <FaCss3 key={2} />,
              <FaJs key={3} />,
              <SiTypescript key={4} />,
              <FaFigma key={5} />,
            ],
          },
          {
            title: 'Admin Dashboard',
            description: locale.projects.admDash,
            deploy: 'https://admin-dashboard-iota-sable.vercel.app/',
            image: admDashIMG,
            source: 'https://github.com/StarLordCraft/AdminDashboard',
            icons: [
              <FaHtml5 key={1} />,
              <FaCss3 key={2} />,
              <FaJs key={3} />,
              <SiTypescript key={4} />,
              <FaFigma key={5} />,
            ],
          },
          {
            title: 'Games',
            description: locale.projects.games,
            deploy: '',
            image: gamesIMG,
            source: 'https://github.com/StarLordCraft/Games',
            icons: [<TbBrandCpp key={1} />, <SiSfml key={2} />],
          },
        ],
      },
      {
        content: [
          {
            title: 'Hangman Game',
            description: locale.projects.hangmanGame,
            deploy: 'https://vue-hang-man.vercel.app/',
            image: hangmanGameIMG,
            source: 'https://github.com/StarLordCraft/vueHangManGame',
            icons: [
              <FaHtml5 key={1} />,
              <FaCss3 key={2} />,
              <FaJs key={3} />,
              <SiTypescript key={4} />,
              <FaFigma key={5} />,
              <FaVuejs key={6} />,
            ],
          },
          {
            title: 'Rafa Pay',
            description: locale.projects.rafaPay,
            deploy: 'https://rafapay.vercel.app/',
            image: rafaPayIMG,
            source: 'https://github.com/StarLordCraft/CreditCard',
            icons: [
              <FaHtml5 key={1} />,
              <FaCss3 key={2} />,
              <FaJs key={3} />,
              <SiTypescript key={4} />,
              <FaFigma key={5} />,
            ],
          },
          {
            title: 'Meme Generator',
            description: locale.projects.memeGenerator,
            deploy: 'https://meme-generator-ashy-nu.vercel.app/',
            image: memeGeneratorIMG,
            source: 'https://github.com/StarLordCraft/-MemeGenerator',
            icons: [
              <FaHtml5 key={1} />,
              <FaCss3 key={2} />,
              <FaJs key={3} />,
              <SiTypescript key={4} />,
              <FaFigma key={5} />,
              <FaReact key={6} />,
            ],
          },
          {
            title: 'AirBnB',
            description: locale.projects.airBnB,
            deploy: 'https://airbnb-orpin-ten.vercel.app/',
            image: airBnBIMG,
            source: 'https://github.com/StarLordCraft/AirBnB',
            icons: [
              <FaHtml5 key={1} />,
              <FaCss3 key={2} />,
              <FaJs key={3} />,
              <SiTypescript key={4} />,
              <FaFigma key={5} />,
              <FaReact key={6} />,
            ],
          },
        ],
      },
    ],
  };
  return (
    <main
      className='h-full dark:bg-primaryDark/30 py-32 flex items-center
        dark:text-white'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <section
            className='text-center flex xl:w-[30vw] flex-col
                    lg:text-left mb-4 xl:mb-0'>
            <h2 className='h2 xl:mt-12 fadeInUp'>
              {locale.title}{' '}
              <span className='text-indigo-500 dark:text-accent'>
                {locale.titleHighlight}
              </span>
              .
            </h2>
            <p
              className='fadeInUp mb-4 max-2-[400px] mx-auto lg:mx-0 
            text-black dark:text-white'>
              {locale.copy}
            </p>
          </section>
          <div className='w-full xl:w-[60%] fadeInDown'>
            <WorkSlider
              workData={workData}
              locale={locale.modal}
            />
          </div>
        </div>
      </div>
      <Bulb />
    </main>
  );
}
