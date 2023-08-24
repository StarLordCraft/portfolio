"use client"

import { useState } from 'react'
import Logo from '@/../public/next.svg'
import Image from "next/image";
import Link from 'next/link';

export default function ResponsiveNavBar() 
{
    const [isOpen, setIsOpen] = useState(false);

    function _setIsOpen() {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <nav className="flex md:hidden items-center justify-between pt-10 px-10 h-full z-40 relative bg-white">
                <h1 className="flex items-center gap-2 font-bold">
                    <Image src={Logo} width="40" height="40" alt="LOGO" />
                    Rafael Alves
                </h1>
                <button
                onClick={_setIsOpen}
                className="flex items-center group justify-center p-2 w-10 h-10 text-sm group rounded-lg hover:bg-interaction focus:outline-none focus:ring-2 focus:ring-indigo-400 gap-1 cursor-pointer">
                    <span className="material-symbols-outlined group-hover:text-white">
                        {isOpen ? 'close' : 'menu'}
                    </span>
                </button>
            </nav>
            <section
            className={`transition-all duration-300 transform ${isOpen ? 'visible translate-y-0' : 'invisible -translate-y-full'} z-30 absolute md:hidden items-center bg-white shadow-md w-full p-6`}>
                <Link href="/" className="block mt-4 md:mt-0 md:ml-4 text-slate-600 hover:text-interaction">Home</Link>
                <Link href="#" className="block mt-4 md:mt-0 md:ml-4 text-slate-600 hover:text-interaction">Projetos</Link>
                <Link href="#" className="block mt-4 md:mt-0 md:ml-4 text-slate-600 hover:text-interaction">Sobre</Link>
                <Link href="#" className="inline-block mt-4 bg-blue-500 p-2 rounded text-white">Vamos Criar Algo Juntos</Link>
            </section>
        </>
    );
}
