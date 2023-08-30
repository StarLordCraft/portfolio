
import BgModal from './BgModal';

export default function WorkModal({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
}) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <BgModal
          isOpen={modalOpen}
          setIsOpen={setModalOpen}>

          </BgModal>
      )}
    </>
  );
}
