import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
  } from 'react-icons/hi2';

import Link from "next/link";

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
export default function NavBar()
{
    return (
     <nav>
      <div className='flex w-full xl:flex-col items-center justify-between
      xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-80 bg-white/10
      xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl rounded-full'>
        {navData.map((link, index) => {
            return <Link href={link.path} key={index}>{link.icon}</Link>
        })}
      </div>
     </nav>
    );
}