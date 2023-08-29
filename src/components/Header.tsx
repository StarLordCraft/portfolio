import Link from "next/link";
import Image from "next/image";

import ToggleTheme from "./ToggleTheme";
import Socials from "./Socials";

export default function Header()
{
    return (
    <header className="absolute z-30 w-full flex items-center
     px-16 xl:px-0 xl:h-[90px]">
        <section className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between
             items-center gap-y-6 py-8">
                <div className="flex justify-between items-center w-full">
                    <Link href={"/"}>
                        <Image src={'/logo.png'} width={40} height={40}
                        alt="" priority={true} />
                    </Link>
                    <ToggleTheme />
                </div>
                <Socials/>
            </div>
        </section>
    </header>
    );
}