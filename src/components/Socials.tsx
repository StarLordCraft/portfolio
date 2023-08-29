import Link from "next/link";

import { RiWhatsappLine, RiMailLine } from 'react-icons/ri';
import { ImLinkedin2, ImGithub } from 'react-icons/im';

export default function Socials ()
{
    return (
        <div className="flex items-center gap-4">
            <Link href=""
            className="block hover:bg-green-600 p-0.5 rounded-full group">
                <RiWhatsappLine className="group-hover:text-white text-black dark:text-white
                 text-3xl"/>
            </Link>
            <Link href="https://www.linkedin.com/in/rafael-alves-087456210/" target="_blank"
            className="block hover:bg-blue-800 p-0.5 group">
                <ImLinkedin2 className="group-hover:white text-black dark:text-white
                 text-3xl"/>
            </Link>
            <Link href="https://github.com/StarLordCraft" target="_blank"
            className="block hover:bg-white p-0.5 group rounded-full">
                <ImGithub className="group-hover:text-black text-black dark:text-white
                 text-3xl"/>
            </Link>
            <Link href="/contact"
            className="block hover:bg-accent p-0.5 group">
                <RiMailLine className="group-hover:text-white text-black dark:text-white
                 text-3xl"/>
            </Link>

        </div>
    );
}