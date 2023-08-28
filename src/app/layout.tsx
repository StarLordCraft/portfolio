import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NavBar from '@/components/NavBard';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rafael Alves',
  description: 'Conheça seu futuro programador FullStack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className}transition-all duration-300 bg-backgroundLight dark:bg-backgroundDark`}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
