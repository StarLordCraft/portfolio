import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from "react-icons/rx";

import WorkSlider from "@/components/work/WorkSlider";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";

export interface Slide {
  readonly title: string;
  readonly path: string;
}

export interface WorkData {
  readonly slides: { readonly images: Slide[] }[];
}

const workData: WorkData = {
  slides: [
    {
      images: [
        {
          title: "title1",
          path: "/thumb1.jpg",
        },
        {
          title: "title2",
          path: "/thumb2.jpg",
        },
        {
          title: "title3",
          path: "/thumb3.jpg",
        },
        {
          title: "title4",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title5",
          path: "/thumb5.jpg",
        },
        {
          title: "title6",
          path: "/thumb6.jpg",
        },
        {
          title: "title7",
          path: "/thumb7.jpg",
        },
        {
          title: "title8",
          path: "/thumb8.jpg",
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <div
      className="h-full dark:bg-primaryDark/30 py-36 flex items-center
        dark:text-white">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <section
            className="text-center flex xl:w-[30vw] flex-col
                    lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8 fadeInUp">
              My{" "}
              <span className="text-indigo-500 dark:text-accent">
                Work
              </span>
              .
            </h2>
            <p className="fadeInUp mb-4 max-2-[400px] mx-auto lg:mx-0 text-black dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iusto nulla eum sapiente voluptate architecto, ab
              recusandae eligendi laudantium odio quod. Dolorem, unde
              eligendi eos dolore eveniet exercitationem voluptatibus
              dicta perferendis.
            </p>
          </section>
          <div className="w-full xl:w-[60%] fadeInDown">
            <WorkSlider workData={workData} />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
}
