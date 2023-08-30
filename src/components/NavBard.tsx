"use client";

import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

import Link from "next/link";

import { usePathname } from "next/navigation";

interface NavData {
  readonly name: string;
  readonly path: string;
  readonly icon: React.JSX.Element;
}

const navData: NavData[] = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];
export default function NavBar() {
  const pathName = usePathname();

  return (
    <nav
      className="flex flex-col items-center gap-y-4 xl:justify-center
      fixed h-max bottom-0 xl:right-[2%] z-20 w-full xl:w-16 xl:max-w-md
      xl:h-screen"
    >
      <div
        className="flex w-full xl:flex-col items-center justify-between
      xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-black/10 dark:bg-white/10
      xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full dark:text-white"
      >
        {navData.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path == pathName && "text-indigo-500 dark:text-accent"
              }
                relative flex items-center group hover:text-indigo-500 hover:dark:text-accent
                transition-all duration-300`}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div
                  className="bg-black dark:bg-white relative flex text-white dark:text-black items-center
                        p-[6px] rounded-[3px]"
                >
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>

                  <div
                    className="border-solid border-l-black dark:border-l-white
                            border-l-8 border-y-transparent border-y-[6px] border-r-0
                            absolute -right-2"
                  ></div>
                </div>
              </div>

              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
