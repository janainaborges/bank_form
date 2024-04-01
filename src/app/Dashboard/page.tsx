"use client";

import Modal from "@/components/Modals/Modal";
import { useState } from "react";

export default function Dashboard() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={{width: "100%"}}>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && <Modal closeModal={closeModal} />}
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}
