import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import TopLeftImage from '@/components/TopLeftImage';
import NavBar from '@/components/NavBard';
import Header from '@/components/Header';
import Transition from '@/components/Transition';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rafael Alves',
  description: 'Conheça seu futuro programador FullStack',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
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
        className={`${inter.className}transition-all duration-300 bg-backgroundLight dark:bg-backgroundDark bg-no-repeat bg-cover w-screen h-screen`}>
        <TopLeftImage />
        <NavBar />
        <Header />
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
