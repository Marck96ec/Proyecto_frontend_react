import React, { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import Modal from "react-bootstrap/Modal";

function ModalC(props) {
  const { showModal, modalTitle, setShowModal, setModalTitle } =
    useContext(ModalContext);

  return (
    <Modal
      show={showModal}
      onHide={() => {
        setShowModal(false);
        setModalTitle("");
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
    </Modal>
  );
}

export default ModalC;
