import Image from "next/image";
export default function Avatar()
{
    return(
        <div className="hidden xl:flex">
            <Image src={'/avatar.png'} 
            width={737} height={678} 
            alt='/'
            className="w-full h-full translate-z-0"
            />
        </div>
    );
}