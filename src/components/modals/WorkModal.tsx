"use client"

import { useState } from 'react';

import BgModal from "./BgModal";

export default function WorkModal()
{
    const [modalOpen, setModalOpen] = useState(true);
    
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <BgModal isOpen={modalOpen} setIsOpen={setModalOpen}>
            Teste
        </BgModal>
    );
}