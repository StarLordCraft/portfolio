import Image from 'next/image';

import BgModal from './BgModal';

import type { Project } from '@/app/(pages)/work/page';

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
  console.log(project);

  return (
    <BgModal
      modalData={project}
      setModalData={setProjectDetails}>
      {project && (
        <div className='px-2 w-full'>
          <section className='w-full h-full bg-black dark:bg-white
           text-white dark:text-black'>
            <div className='w-full h-[350px]'>
              <Image
                src={project.image}
                alt='project image'
                width={200}
                height={200}
                className='w-full h-full object-fill'
              />
            </div>
            <div>
              <h3 className='font-bold'>{project.title}</h3>
              <p>{project.description}</p>
              {project.icons &&
                project.icons.map((icon, iconIndex) => {
                  return <div key={iconIndex}>{icon}</div>;
                })}
            </div>
          </section>
        </div>
      )}
    </BgModal>
  );
}
