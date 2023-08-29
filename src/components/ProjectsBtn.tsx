import Image from "next/image";
import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";
export default function ProjectsBtn()
{
    return (
        <div className="mx-auto xl:mx-0 bg-black dark:bg-transparent rounded-full w-[210px] h-[210px] flex items-center justify-center">
            <Link href="/work" className="relative w-[200px] h-[200px] flex items-center justify-center
             bg-circleStar bg-cover bg-center bg-no-repeat group z-10"> 
                <Image src="/rounded-text.png" alt="" 
                width={200} height={200}
                className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]" />
                <HiArrowRight className="absolute text-4xl text-white
                 group-hover:translate-x-2 transition-al duration-300"/>
            </Link>
        </div>
    );
}