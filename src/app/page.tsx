import ProjectsBtn from '@/components/ProjectsBtn';
import Avatar from '@/components/Avatar';
import ParticlesContainer from '@/components/ParticlesContainer';

export default function Page() {
  return (
    <div className='bg-primaryDark/10 h-full'>
      <main
        className='w-full h-full
      dark:bg-gradient-to-r dark:from-primaryDark/10 dark:via-black/30 dark:to-black/10'>
        <section
          className='text-center flex flex-col justify-center xl:pt-40
        xl:text-left h-full container mx-auto'>
          <h1 className='h1 dark:text-white fadeInDown'>
            Transforming Ideas <br /> Into
            <span className='text-indigo-500 dark:text-accent'>
              {' '}
              Digital Reality
            </span>
          </h1>
          <p
            className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-black dark:text-white
          fadeInDown'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Omnis laboriosam culpa in esse dolorum tempore quam
            asperiores nemo debitis! Dolor consectetur dignissimos
            molestiae maiores est possimus obcaecati provident ipsa
            dolore?
          </p>
          <div className='xl:flex hidden relative fadeInDown'>
            <ProjectsBtn />
          </div>
          <div className='flex justify-center xl:hidden relative fadeInDown'>
            <ProjectsBtn />
          </div>
        </section>
        <section className='w-[1200px] h-full absolute right-0 bottom-0 fadeInUp'>
          <div
            className='dark:xl:bg-explosion dark:xl:bg-right dark:xl:bg-no-repeat
           w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>

          <ParticlesContainer />

          <div
            className='w-full h-full max-w-[737px] max-h-[678px] 
            absolute -bottom-32 lg:bottom-0 lg:right-[8%] translate-z-0'>
            <Avatar />
          </div>
        </section>
      </main>
    </div>
  );
}
