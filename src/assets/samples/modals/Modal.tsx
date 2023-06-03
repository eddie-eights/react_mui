import React, { useState } from "react";

import "./Modal.css";

export const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);
  return (
    <>
      <button onClick={toggleModal}>紺ちゃんを表示</button>
      <div style={{ display: modalOpen ? "initial" : "none" }}>
        <div className="modal__inner">
          <div className="modal__close" onClick={toggleModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <img src="/public/ayaka_konno_01.jpeg" />
        </div>
        <div className="modal__background" onClick={toggleModal}></div>
      </div>
    </>
  );
};
