import { useRef, useEffect } from 'react';
import type { Project } from '@/app/(pages)/work/page';

export default function BgModal({
  children,
  project,
  setProjectDetails,
}: {
  children: React.ReactNode;
  project: Project | null;
  setProjectDetails: (project: Project | null) => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeModal = () => {
      setProjectDetails(null);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [project, setProjectDetails]);

  return (
    <div
      className={`min-h-screen w-[0] h-full fixed z-[100] top-0 left-0 flex justify-center items-center
    ${project ? 'bg-black/20 dark:bg-white/20 min-w-full' : ''} transition-all duration-300`}
    >
      <div ref={modalRef}>{children}</div>
    </div>
  );
}
