import WorkSlider from './_components/WorkSlider';
import Bulb from '@/components/Bulb';
import Circles from '@/components/Circles';

import { StaticImageData } from 'next/image';

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

import {
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPhp,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiMysql,
} from 'react-icons/si';
export interface Project {
  readonly title: string;
  readonly description: string;
  readonly icons?: React.JSX.Element[];
  readonly deploy: string;
  readonly image: StaticImageData;
  readonly source: string;
}

import project1 from '@/../public/bg-explosion.png';

export interface WorkData {
  readonly slides: { readonly content: Project[] }[];
}

const workData: WorkData = {
  slides: [
    {
      content: [
        {
          title: 'title1',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eaque, reiciendis, dolor atque, expedita voluptatibus ipsa impedit a repellat non quia! Sed nemo aperiam tenetur provident impedit modi ullam quae.',
            deploy: '',
            image: project1,
            source: '',
            icons: [
              <FaHtml5 key={1} />,
              <FaCss3 key={2} />,
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
          title: 'title2',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eaque, reiciendis, dolor atque, expedita voluptatibus ipsa impedit a repellat non quia! Sed nemo aperiam tenetur provident impedit modi ullam quae.',
            deploy: '',
            image: project1,
            source: '',
        },
        {
          title: 'title3',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eaque, reiciendis, dolor atque, expedita voluptatibus ipsa impedit a repellat non quia! Sed nemo aperiam tenetur provident impedit modi ullam quae.',
            deploy: '',
            image: project1,
            source: '',
        },
        {
          title: 'title4',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eaque, reiciendis, dolor atque, expedita voluptatibus ipsa impedit a repellat non quia! Sed nemo aperiam tenetur provident impedit modi ullam quae.',
            deploy: '',
            image: project1,
            source: '',
        },
      ],
    },
    {
      content: [
        {
          title: 'title5',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eaque, reiciendis, dolor atque, expedita voluptatibus ipsa impedit a repellat non quia! Sed nemo aperiam tenetur provident impedit modi ullam quae.',
            deploy: '',
            image: project1,
            source: '',
        },
        {
          title: 'title6',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eaque, reiciendis, dolor atque, expedita voluptatibus ipsa impedit a repellat non quia! Sed nemo aperiam tenetur provident impedit modi ullam quae.',
            deploy: '',
            image: project1,
            source: '',
        },
        {
          title: 'title7',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eaque, reiciendis, dolor atque, expedita voluptatibus ipsa impedit a repellat non quia! Sed nemo aperiam tenetur provident impedit modi ullam quae.',
            deploy: '',
            image: project1,
            source: '',
        },
        {
          title: 'title8',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eaque, reiciendis, dolor atque, expedita voluptatibus ipsa impedit a repellat non quia! Sed nemo aperiam tenetur provident impedit modi ullam quae.',
            deploy: '',
            image: project1,
            source: '',
        },
      ],
    },
  ],
};

export default function Page() {
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
              My{' '}
              <span className='text-indigo-500 dark:text-accent'>
                Work
              </span>
              .
            </h2>
            <p
              className='fadeInUp mb-4 max-2-[400px] mx-auto lg:mx-0 
            text-black dark:text-white'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iusto nulla eum sapiente voluptate architecto, ab
              recusandae eligendi laudantium odio quod. Dolorem, unde
              eligendi eos dolore eveniet exercitationem voluptatibus
              dicta perferendis.
            </p>
          </section>
          <div className='w-full xl:w-[60%] fadeInDown'>
            <WorkSlider workData={workData} />
          </div>
        </div>
      </div>
      <Bulb />
    </main>
  );
}
