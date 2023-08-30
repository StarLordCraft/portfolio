import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
} from 'react-icons/rx';


import WorkSlider from '@/components/work/WorkSlider';
import Bulb from '@/components/Bulb';
import Circles from '@/components/Circles';

export interface WorkData {
    readonly icon: React.JSX.Element;
    readonly title: string;
    readonly description: string;
}

const workData: WorkData[] = [
    {
        icon: <RxCrop />,
        title: "Branding",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eaque, reiciendis, dolor atque, expedita voluptatibus ipsa impedit a repellat non quia! Sed nemo aperiam tenetur provident impedit modi ullam quae.'
    },
    {
        icon: <RxPencil2 />,
        title: "Design",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eaque, reiciendis, dolor atque, expedita voluptatibus ipsa impedit a repellat non quia! Sed nemo aperiam tenetur provident impedit modi ullam quae.'
    },
    {
        icon: <RxDesktop />,
        title: "Development",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eaque, reiciendis, dolor atque, expedita voluptatibus ipsa impedit a repellat non quia! Sed nemo aperiam tenetur provident impedit modi ullam quae.'
    },
    {
        icon: <RxReader />,
        title: "Copywriting",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eaque, reiciendis, dolor atque, expedita voluptatibus ipsa impedit a repellat non quia! Sed nemo aperiam tenetur provident impedit modi ullam quae.'
    },
    {
        icon: <RxRocket />,
        title: "SEO",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt eaque, reiciendis, dolor atque, expedita voluptatibus ipsa impedit a repellat non quia! Sed nemo aperiam tenetur provident impedit modi ullam quae.'
    },
]

export default function Page()
{
    return (
        <div className='h-full dark:bg-primaryDark/30 py-36 flex items-center
        dark:text-white'>
            <Circles />
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row gap-x-8'>
                    <section className='text-center flex xl:w-[30vw] flex-col
                    lg:text-left mb-4 xl:mb-0'>
                        <h2 className='h2 xl:mt-8 fadeInUp'>My <span className='text-indigo-500 dark:text-accent'>
                            Services
                        </span>.</h2>
                        <p className='fadeInUp mb-4 max-2-[400px] mx-auto lg:mx-0 text-black dark:text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Iusto nulla eum sapiente voluptate architecto,
                            ab recusandae eligendi laudantium odio quod. Dolorem,
                            unde eligendi eos dolore eveniet exercitationem voluptatibus 
                            dicta perferendis.
                        </p>
                    </section>
                    <div className='w-full xl:w-[60%] fadeInDown'>
                        <WorkSlider 
                        workData={workData} />
                    </div>
                </div>
            </div>
            <Bulb />
        </div>
    );
}