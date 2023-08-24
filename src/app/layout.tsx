import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {useEffect} from 'react';

import NavBar from '@/components/NavBard';
import Footer from '@/components/Footer';

import detectColorTheme from '@/utils/detectColorTheme';

const inter = Inter({ subsets: ['latin'] })
const style = [
  inter.className,
]

export const metadata: Metadata = {
  title: 'Rafael Alves',
  description: 'Conheça seu futuro programador FullStack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    const colorScheme = detectColorTheme();
    document.documentElement.classList.add(colorScheme); // Add 'dark' or 'light' class to the root element
  }, []);

  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@200&display=swap" />
      </head>
      <body className={style.toString()}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
