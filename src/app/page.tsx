import Image from 'next/image'

import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';

import ProjectsBtn from '@/components/ProjectsBtn';
import Animate from '@/components/Animate';

export default function Home() {
  return (
    <section className='bg-primaryLight/10 h-full'>
      <div className='w-full h-full
      dark:bg-gradient-to-r dark:from-primaryDark/10 dark:via-black/30 dark:to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40
        xl:text-left h-full container mx-auto'>

          <Animate 
          element={'h1'}
          animation={'down'} duration={0.2}
          styles='h1 dark:text-white'>
            Transforming Ideas <br/> Into 
            <span className="text-indigo-500 dark:text-accent"> Digital Reality</span>
         </Animate>
         
          <Animate 
          element={'p'}
          animation={'down'} duration={0.3}
          styles='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-black dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis laboriosam culpa
            in esse dolorum tempore quam asperiores nemo debitis! Dolor consectetur dignissimos
            molestiae maiores est possimus obcaecati provident ipsa dolore?
         </Animate>

          <Animate 
          element={'div'}
          animation={'down'} duration={0.4}
          styles='xl:flex hidden relative'>
           <ProjectsBtn/>
         </Animate>

         <Animate 
         element={'div'}
         animation={'down'} duration={0.4}
         styles='flex justify-center xl:hidden relative'>
           <ProjectsBtn/>
         </Animate>
        </div>
      </div>
    </section>
  )
}
