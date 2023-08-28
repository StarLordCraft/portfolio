import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
  } from 'react-icons/hi2';

import Image from "next/image";
import Link from "next/link";

import Logo from '@/../public/next.svg'

import ResponsiveNavBar from "./ResponsiveNavBar";

import ToggleTheme from "./ToggleTheme";

export const navData = [
    { name: 'home', path: '/', icon: <HiHome /> },
    { name: 'about', path: '/about', icon: <HiUser /> },
    { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
    { name: 'work', path: '/work', icon: <HiViewColumns /> },
    {
      name: 'testimonials',
      path: '/testimonials',
      icon: <HiChatBubbleBottomCenterText />,
    },
    {
      name: 'contact',
      path: '/contact',
      icon: <HiEnvelope />,
    },
  ];

function LargeNavBar()
{
    return (
        <nav 
        className="transition-all duration-300 hidden md:flex items-center justify-evenly mt-10 mb-5 px-10 h-full">
            <h1 className="flex items-center gap-2 font-bold text-black dark:text-white">
                <Image src={Logo} 
                width="40" height="40" alt="LOGO" />
                Rafael Alves
                <ToggleTheme/>
            </h1>

            <div className="flex justify-evenly">
                <Link href="/" className="block mt-4 md:mt-0 md:ml-4 text-slate-600 dark:text-white hover:text-interaction dark:hover:text-interactionDark">Home</Link>
                <Link href="#" className="block mt-4 md:mt-0 md:ml-4 text-slate-600 dark:text-white hover:text-interaction dark:hover:text-interactionDark">Projetos</Link>
                <Link href="#" className="block mt-4 md:mt-0 md:ml-4 text-slate-600 dark:text-white hover:text-interaction dark:hover:text-interactionDark">Sobre</Link>
            </div>

            <Link href="#"
            className="bg-interaction dark:bg-interactionDark p-2 rounded text-white">
                Vamos Criar Algo Juntos
            </Link>
        </nav>
    );
}

export default function NavBar()
{
    return (
        <header className="transition-all duration-300 fixed w-full top-0 z-40 bg-backgroundLight dark:bg-backgroundDark shadow dark:shadow-white">
            <LargeNavBar /> 
            <ResponsiveNavBar />     
        </header>
    );
}