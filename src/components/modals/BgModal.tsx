import { useRef, useEffect } from 'react';
import type { Project } from '@/app/[lang]/work/page';

export default function BgModal({
  children,
  modalData,
  setModalData,
}: {
  children: React.ReactNode;
  modalData: Project | null;
  setModalData: (data: Project | null) => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeModal = () => {
      setModalData(null);
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
  }, [modalData, setModalData]);

  return (
    <div
      className={`min-h-screen w-[0] h-full fixed z-[100] top-0 left-0 flex justify-center items-center
    ${
      modalData ? 'bg-black/50 dark:bg-white/50 w-full' : ''
    } transition-all duration-500`}>
      <div
        ref={modalRef}
        className='flex items-center justify-center'>
        {children}
      </div>
    </div>
  );
}
