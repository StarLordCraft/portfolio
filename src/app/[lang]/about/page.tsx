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

import type { Locale } from '@/i18n.config';
import { getDictionary } from '@/lang/dictionary';

export interface InfoItem {
  readonly title: string;
  readonly stage?: string;
  readonly icons?: React.JSX.Element[];
  readonly link?: Url;
  readonly proof?: string;
}

export interface AboutDataItem {
  readonly title: string;
  readonly info: InfoItem[];
  readonly icons?: React.JSX.Element[];
}


export default async function Page({
  params,
}: {
  params: { lang: Locale };
}) {
  const locale = await getDictionary(params.lang, 'about');
  const aboutData: AboutDataItem[] = [
    {
      title: locale.skills.title,
      info: [
        {
          title: locale.skills.frontend,
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
          title: locale.skills.backend,
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
      title: locale.awards.title,
      info: [
        {
          title: locale.awards.school,
          stage: '2020 - 2022',
          link: 'https://portal.montesclaros.mg.gov.br/noticia/educacao/prefeitura-realiza-cerimonia-de-encerramento-do-projeto-eu-vou-fazer-a-prova-brasil',
          proof: locale.awards.proof,
        },
        {
          title: locale.awards.OBA2020,
          stage: '2020 - 2021',
          link: 'http://www.oba.org.br/site/index.php/zerouminforma.com.br/estudante-da-escola-do-sesi-de-dourados-recebe-medalha-de-ouro-na-olimpiada-brasileira-de-astronomia-e-astronautica/?p=conteudo&idcat=22&pag=conteudo&acao=mostra&idaluno=2483&olimp=oba&ed=2020',
          proof: locale.awards.proof,
        },
        {
          title: locale.awards.OBA2021,
          stage: '2021 - 2022',
          link: 'http://www.oba.org.br/site/index.php/zerouminforma.com.br/estudante-da-escola-do-sesi-de-dourados-recebe-medalha-de-ouro-na-olimpiada-brasileira-de-astronomia-e-astronautica/?p=conteudo&idcat=22&pag=conteudo&acao=mostra&idaluno=413251&olimp=oba&ed=2021',
          proof: locale.awards.proof,
        },
        {
          title: locale.awards.OBA2022,
          stage: '2022 - 2023',
          link: 'http://www.oba.org.br/site/index.php/zerouminforma.com.br/estudante-da-escola-do-sesi-de-dourados-recebe-medalha-de-ouro-na-olimpiada-brasileira-de-astronomia-e-astronautica/?p=conteudo&idcat=22&pag=conteudo&acao=mostra&idaluno=949023&olimp=oba&ed=2022',
          proof: locale.awards.proof,
        },
      ],
    },
    {
      title: locale.experience.title,
      info: [
        {
          title: locale.experience.freelancer,
          stage: '2022 - 2023',
        },
        {
          title: locale.experience.personal,
          stage: '2021 - 2023',
        },
      ],
    },
    {
      title: 'credentials',
      info: [
        {
          title: locale.credentials.academic,
          stage: '2023 - 2027',
        },
        {
          title: locale.credentials.courses,
          stage: '2021 - ????',
        }
      ],
    },
  ];
  
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
            {locale.title}
            <span className='text-indigo-500 dark:text-accent'>
              {locale.aboutHighlight}
            </span>
            {locale.aboutTitle2}
          </h2>
          <p
            className='max-w-[500px] mx-auto xl:mx-9 mb-6 xl:mb-12 px-2 xl:px-0 
            text-black/60 dark:text-white/60 fadeInRight'>
            {locale.about}
          </p>

          <div
            className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto
            xl:mx-0 mb-8 fadeInRight'>
            <section className='flex flex-1 xl:gap-x-6'>
              <Counter
                start={0}
                end={new Date().getFullYear() - 2023 || 1}
                duration={8}
                title={locale.counters.experience}
              />
              <Counter
                start={0}
                end={3}
                duration={8}
                title={locale.counters.clients}
              />

              <Counter
                start={0}
                end={30}
                duration={8}
                title={locale.counters.projects}
              />

              <Counter
                start={0}
                end={4}
                duration={8}
                title={locale.counters.awards}
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
