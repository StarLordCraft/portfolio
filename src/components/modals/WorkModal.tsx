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

  return (
    <BgModal
      modalData={project}
      setModalData={setProjectDetails}>

    </BgModal>
  );
}
