"use client";
import { useState } from "react";
import Link from "next/link";

import { AboutDataItem, InfoItem } from "@/app/(pages)/about/page";

export default function AboutHero({
  aboutData,
}: {
  aboutData: AboutDataItem[];
}) {
  const [index, setIndex] = useState<number>(0);
  return (
    <section
      className="flex flex-col w-full xl:max-w-[48%] h-[480px] overflow-auto md:overflow-hidden
        fadeInLeft">
      <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
        {aboutData.map((item: AboutDataItem, itemIndex: number) => {
          return (
            <button
              key={itemIndex}
              className={`${
                index === itemIndex &&
                "text-indigo-800 dark:text-accent after:w-full after:bg-indigo-800 dark:after:bg-accent"
              } 
                    cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-black after:dark:bg-white
                    after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300`}
              onClick={() => setIndex(itemIndex)}>
              {item.title}
            </button>
          );
        })}
      </div>
      <div className="py-2 xl:py-6 flex flex-col gap-y-4 items-center xl:items-start">
        {aboutData[index].info.map(
          (item: InfoItem, index: number) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col md:flex-row
                    max-w-max gap-x-2 gap-y-2 md:gap-y-0 items-center justify-center dark:text-white">
                <div className="font-bold mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                {item?.stage && <div>{item?.stage}</div>}
                {item.link && (
                  <Link
                    href={item.link}
                    target="_blanc"
                    className=" hover:text-indigo-500 dark:hover:text-accent relative after:w-8 after:h-[2px] after:bg-black after:dark:bg-white
                    after:absolute after:left-0 after:-bottom-1 after:transition-all after:duration-300
                        hover:after:w-full hover:after:bg-indigo-500 dark:hover:after:bg-accent">
                    See Proof
                  </Link>
                )}

                <div className="flex gap-x-4 lg:pr-12 flex-wrap">
                  {item.icons?.map(
                    (icon: React.JSX.Element, iconIndex: number) => {
                      return (
                        <div key={iconIndex} className="text-2xl">
                          {icon}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
