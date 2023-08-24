import Image from "next/image";
import Link from "next/link";

import Logo from '@/../public/next.svg'

import ResponsiveNavBar from "./ResponsiveNavBar";

import ToggleTheme from "./ToggleTheme";

function LargeNavBar()
{
    return (
        <nav 
        className="hidden md:flex items-center relative justify-around mt-10 px-10 h-full">
            <h1 className="flex items-center gap-2 font-bold">
                <Image src={Logo} 
                width="40" height="40" alt="LOGO" />
                Rafael Alves
                <ToggleTheme/>
            </h1>

            <div className="flex">
                <Link href="/" className="block mt-4 md:mt-0 md:ml-4 text-slate-600 hover:text-interaction">Home</Link>
                <Link href="#" className="block mt-4 md:mt-0 md:ml-4 text-slate-600 hover:text-interaction">Projetos</Link>
                <Link href="#" className="block mt-4 md:mt-0 md:ml-4 text-slate-600 hover:text-interaction">Sobre</Link>
            </div>

            <Link href="#" 
            className="bg-interaction p-2 rounded text-white">
                Vamos Criar Algo Juntos
            </Link>
        </nav>
    );
}

export default function NavBar()
{
    return (
        <header className="fixed w-full top-0 z-40 bg-backgroundLight dark:bg-backgroundDark">
            <LargeNavBar /> 
            <ResponsiveNavBar />     
        </header>
    );
}