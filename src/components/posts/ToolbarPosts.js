import React, { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { PostContext } from "../../contexts/PostContext";
function ToolbarPosts() {
  const { setShowModal, setModalTitle } = useContext(ModalContext);
  const { obtenerPost } = useContext(PostContext);

  const handleAbrirModal = () => {
    setModalTitle("Registrar nuevo post");
    setShowModal(true);
    obtenerPost(null);
  };

  return (
    <div className="container">
      <button
        className="button is-small is-primary"
        onClick={() => handleAbrirModal()}
      >
        <span className="icon is-small ">
          <i className="fas fa-plus"></i>
        </span>
        <span>Registrar Nuevo</span>
      </button>
    </div>
  );
}

export default ToolbarPosts;
