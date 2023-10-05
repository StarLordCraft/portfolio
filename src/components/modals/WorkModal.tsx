import Image from 'next/image';
import Link from 'next/link';

import BgModal from './BgModal';

import { AiOutlineClose } from 'react-icons/ai';

import type { Project } from '@/app/[lang]/work/page';

export default function WorkModal({
  project,
  setProjectDetails,
}: {
  project: Project | null;
  setProjectDetails: (project: Project | null) => void;
}) {
  const closeModal = () => {
    setProjectDetails(null);
  };

  return (
    <BgModal
      modalData={project}
      setModalData={setProjectDetails}>
      {project && (
        <div className='px-2 w-full fadeInLeft'>
          <section
            className={`w-full h-full bg-white dark:bg-black
           text-black dark:text-white rounded-lg shadow-lg shadow-slate-100
           dark:shadow-black max-w-[550px] relative`}>
            <button
              className='absolute top-2 right-2 text-white text-3xl
            hover:text-accent'
              onClick={() => setProjectDetails(null)}>
              <AiOutlineClose />
            </button>
            <div className='w-full h-[350px] rounded-t-lg mb-5'>
              <Image
                src={project.image}
                alt='project image'
                width={200}
                height={200}
                className='w-full h-full object-fill rounded-t-lg'
              />
            </div>
            <div className='px-10 w-full'>
              <h3 className='font-bold text-xl'>{project.title}</h3>
              <p className='break-words text-left text-black dark:text-white my-5'>
                {project.description}
              </p>
              {project.icons && (
                <div className='flex gap-x-2 text-xl'>
                  {project.icons.map((icon, iconIndex) => {
                    return <div key={iconIndex}>{icon}</div>;
                  })}
                </div>
              )}
            </div>
            <div className='flex mt-4 gap-x-[1%] w-full'>
              <Link
                href={project.deploy}
                target={"_blank"}
                className='block w-[49%] text-center py-5 hover:bg-indigo-500 
                dark:hover:bg-accent hover:font-bold rounded-b-lg text-white
                dark:text-black bg-black dark:bg-white'>
                See Project
              </Link>
              <Link
                href={project.source}
                target={"_blank"}
                className='block w-[50%] text-center py-5 hover:bg-indigo-500 
                dark:hover:bg-accent hover:font-bold rounded-b-lg text-white
                dark:text-black bg-black dark:bg-white'>
                See Source
              </Link>
            </div>
          </section>
        </div>
      )}
    </BgModal>
  );
}
