import { Url } from 'next/dist/shared/lib/router/router';

import Avatar from '@/components/Avatar';
import Circles from '@/components/Circles';
import Counter from '@/app/[lang]/about/_components/Counter';
import AboutHero from '@/app/[lang]/about/_components/AboutHero';

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

export interface InfoItem {
  readonly title: string;
  readonly stage?: string;
  readonly icons?: React.JSX.Element[];
  readonly link?: Url;
}

export interface AboutDataItem {
  readonly title: string;
  readonly info: InfoItem[];
  readonly icons?: React.JSX.Element[];
}

const aboutData: AboutDataItem[] = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend Development',
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
        title: 'Backend Development',
        icons: [
          <SiPhp key={1} />,
          <SiNodedotjs key={2} />,
          <FaLaravel key={3} />,
          <SiNextdotjs key={4} />,
          <SiMysql key={5} />,
          <SiMongodb key={6} />,
          <SiFirebase key={7} />,
        ],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: '+30.000,00 R$ High School Scholarship',
        stage: '2020 - 2022',
        link: 'https://portal.montesclaros.mg.gov.br/noticia/educacao/prefeitura-realiza-cerimonia-de-encerramento-do-projeto-eu-vou-fazer-a-prova-brasil',
      },
      {
        title: 'Silver Medal - OBA',
        stage: '2020 - 2021',
        link: 'http://www.oba.org.br/site/index.php/zerouminforma.com.br/estudante-da-escola-do-sesi-de-dourados-recebe-medalha-de-ouro-na-olimpiada-brasileira-de-astronomia-e-astronautica/?p=conteudo&idcat=22&pag=conteudo&acao=mostra&idaluno=2483&olimp=oba&ed=2020',
      },
      {
        title: 'Gold Medal - OBA',
        stage: '2021 - 2022',
        link: 'http://www.oba.org.br/site/index.php/zerouminforma.com.br/estudante-da-escola-do-sesi-de-dourados-recebe-medalha-de-ouro-na-olimpiada-brasileira-de-astronomia-e-astronautica/?p=conteudo&idcat=22&pag=conteudo&acao=mostra&idaluno=413251&olimp=oba&ed=2021',
      },
      {
        title: 'Bronze Medal - OBA',
        stage: '2022 - 2023',
        link: 'http://www.oba.org.br/site/index.php/zerouminforma.com.br/estudante-da-escola-do-sesi-de-dourados-recebe-medalha-de-ouro-na-olimpiada-brasileira-de-astronomia-e-astronautica/?p=conteudo&idcat=22&pag=conteudo&acao=mostra&idaluno=949023&olimp=oba&ed=2022',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title:
          'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

export default function Page() {
  return (
    <section className='h-full dark:bg-primaryDark/30 py-32 text-center dark:text-white xl:text-left'>
      <Circles />
      <div
        className='hidden xl:flex absolute bottom-0 -left-[235px]
          fadeInRight'>
        <Avatar />
      </div>
      <main
        className='container mx-auto h-full flex flex-col items-center
          xl:flex-row gap-x-6'>
        <section className='flex-1 flex flex-col justify-center'>
          <h2 className='h2 fadeInRight'>
            Captivating{' '}
            <span className='text-indigo-500 dark:text-accent'>
              stories
            </span>{' '}
            birth magnificent Apps
          </h2>
          <p
            className='max-w-[500px] mx-auto xl:mx-9 mb-6 xl:mb-12 px-2 xl:px-0 
            text-black/60 dark:text-white/60 fadeInRight'>
            I began freelancing as a developer since 2023. Since then,
            I ve done remote work for agencies and collabored on
            digital products for business and consumer use.
          </p>

          <div
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto
            xl:mx-0 mb-8 fadeInRight'>
            <section className='flex flex-1 xl:gap-x-6'>
              <Counter
                start={0}
                end={new Date().getFullYear() - 2023 || 1}
                duration={8}
                title='Years of experience'
              />
              <Counter
                start={0}
                end={3}
                duration={8}
                title='Satisfied Clients'
              />

              <Counter
                start={0}
                end={30}
                duration={8}
                title='Finished Projects'
              />

              <Counter
                start={0}
                end={4}
                duration={8}
                title='Winning Awards'
                last={true}
              />
            </section>
          </div>
        </section>
        <AboutHero aboutData={aboutData} />
      </main>
    </section>
  );
}
