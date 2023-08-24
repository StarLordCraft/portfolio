"use client"

import { useState } from 'react'
import Logo from '@/../public/next.svg'
import Image from "next/image";
import Link from 'next/link';

import ToggleTheme from "./ToggleTheme";

export default function ResponsiveNavBar() 
{
    const [isOpen, setIsOpen] = useState(false);

    function _setIsOpen() {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <nav className="transition-all duration-300 flex md:hidden items-center justify-between pt-10 px-10 h-full z-40 mb-5 relative bg-backgroundLight dark:bg-backgroundDark">
                <h1 className="flex items-center gap-2 font-bold dark:text-white">
                    <Image src={Logo} width="40" height="40" alt="LOGO" />
                    Rafael Alves
                    <ToggleTheme/>
                </h1>
                <button
                onClick={_setIsOpen}
                className="flex items-center group justify-center p-2 w-10 h-10 text-sm group rounded-lg hover:bg-interaction dark:hover:bg-interactionDark focus:outline-none focus:ring-2 focus:ring-indigo-400 gap-1 cursor-pointer">
                    <span className="material-symbols-outlined group-hover:text-white dark:text-white">
                        {isOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </nav>
            <section
            className={`transition-all duration-300 transform ${isOpen ? 'visible translate-y-0' : 'invisible -translate-y-full'} z-30 absolute md:hidden items-center bg-backgroundLight dark:bg-backgroundDark shadow-md dark:shadow-white w-full p-6`}>
                <Link href="/" className="block mt-4 md:mt-0 md:ml-4 text-slate-600 dark:text-white hover:text-interaction dark:hover:text-interactionDark">Home</Link>
                <Link href="#" className="block mt-4 md:mt-0 md:ml-4 text-slate-600 dark:text-white hover:text-interaction dark:hover:text-interactionDark">Projetos</Link>
                <Link href="#" className="block mt-4 md:mt-0 md:ml-4 text-slate-600 dark:text-white hover:text-interaction dark:hover:text-interactionDark">Sobre</Link>
                <Link href="#" className="inline-block mt-4 bg-interaction dark:bg-interactionDark p-2 rounded text-white">Vamos Criar Algo Juntos</Link>
            </section>
        </>
    );
}
