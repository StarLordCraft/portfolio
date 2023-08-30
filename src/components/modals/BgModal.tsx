"use client"
import { useRef, useEffect } from 'react';

import { Project } from '@/app/(pages)/work/page';

export default function BgModal({
  children,
  project,
}: {
  children: React.ReactNode;
  project: Project | null;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  console.log('rendering');
  
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={`min-h-screen w-full h-full fixed z-50 top-0 left-0 flex justify-center items-center
    ${project && 'translate-x-0 bg-black'} translate-x-[-200%] transition-all duration-300`}>
      <div ref={modalRef}>{children}</div>
    </div>
  );
}
