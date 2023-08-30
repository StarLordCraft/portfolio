import WorkSlider from "@/components/work/WorkSlider";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";

export interface Project {
  readonly title: string;
  readonly image: string;
}

export interface WorkData {
  readonly slides: { readonly content: Project[] }[];
}

const workData: WorkData = {
  slides: [
    {
      content: [
        {
          title: "title1",
          image: "/bg-explosion.png",
        },
        {
          title: "title2",
          image: "/bg-explosion.png",
        },
        {
          title: "title3",
          image: "/bg-explosion.png",
        },
        {
          title: "title4",
          image: "/bg-explosion.png",
        },
      ],
    },
    {
      content: [
        {
          title: "title5",
          image: "/bg-explosion.png",
        },
        {
          title: "title6",
          image: "/bg-explosion.png",
        },
        {
          title: "title7",
          image: "/bg-explosion.png",
        },
        {
          title: "title8",
          image: "/bg-explosion.png",
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <div
      className="h-full dark:bg-primaryDark/30 py-32 flex items-center
        dark:text-white">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <section
            className="text-center flex xl:w-[30vw] flex-col
                    lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-12 fadeInUp">
              My{" "}
              <span className="text-indigo-500 dark:text-accent">
                Work
              </span>
              .
            </h2>
            <p className="fadeInUp mb-4 max-2-[400px] mx-auto lg:mx-0 
            text-black dark:text-white">
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
