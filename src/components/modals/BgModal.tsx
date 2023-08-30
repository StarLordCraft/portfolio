import React, { useRef, useEffect } from 'react';

export default function BgModal({
  children,
  isOpen,
  setIsOpen
}: {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div className={`bg-transparent min-h-screen w-full h-full fixed z-50 top-0 left-0 flex justify-center items-center
    ${isOpen && 'translate-x-0 bg-bg-black/30'} translate-x-[-200%] transition-all duration-300`}>
      <div ref={modalRef}>{children}</div>
    </div>
  );
}
