import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Image from 'next/image';

import bgSite from '@/../public/site-bg-dark.svg';

import TopLeftImage from '@/components/TopLeftImage';
import NavBar from '@/components/NavBard';
import Header from '@/components/Header';
import Transition from '@/components/Transition';

import type { Locale } from '@/i18n.config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rafael Alves',
  description: 'Conheça seu futuro programador FullStack',
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <head>
        <link
          rel='icon'
          href='/favicon.ico'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@200&display=swap'
        />
      </head>
      <body
        className={`${inter.className} transition-all duration-300 bg-backgroundLight w-screen h-screen`}>
        <Image
          src={bgSite}
          alt=''
          width={10}
          height={10}
          className='w-full h-full hidden dark:block absolute -z-10 object-cover'
        />
        <TopLeftImage />
        <NavBar lang={params.lang} />
        <Header />
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
