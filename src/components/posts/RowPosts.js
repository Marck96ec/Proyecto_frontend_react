import React, { useContext, useState } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { PostContext } from "../../contexts/PostContext";
import Modal from "react-bootstrap/Modal";
import Axios from "axios";

function RowPosts({ post }) {
  const { setShowModal, setModalTitle } = useContext(ModalContext);
  const { obtenerPost, eliminarPost } = useContext(PostContext);

  const [comentarios, setComentarios] = useState([]);

  const handleModificarPost = () => {
    obtenerPost(post);
    setModalTitle("Modificar Cliente");
    setShowModal(true);
  };

  const handleVerComentarios = async (props) => {
    const resultado = await Axios.get(`/posts/${props}/comments`);
    setComentarios(resultado.data);
    setShow(true);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const itemscomentarios = comentarios.map((comentario) => {
    return (
      <ul key={comentario.id}>
        <li type="square">
          <small>{comentario.name}</small>:<strong>{comentario.email}</strong>
          <br />
          <p>{comentario.body}</p>
        </li>
      </ul>
    );
  });

  return (
    <>
      <tr>
        <td>
          <button
            className="button is-small is-info mr-1"
            title="Modificar"
            onClick={() => handleModificarPost()}
          >
            <span className="icon is-small ">
              <i className="fas fa-edit"></i>
            </span>
          </button>
          <button
            className="button is-small is-danger"
            title="Eliminar"
            onClick={() => eliminarPost(post.id)}
          >
            <span className="icon is-small ">
              <i className="fas fa-trash-alt"></i>
            </span>
          </button>
        </td>
        <td>{post.title}</td>
        <td>
          {post.body}{" "}
          <button
            className="button is-small is-info"
            title="Ver comentarios"
            onClick={() => handleVerComentarios(post.id)}
          >
            Comentarios
          </button>
        </td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Comentarios</Modal.Title>
        </Modal.Header>
        <Modal.Body>{itemscomentarios}</Modal.Body>
      </Modal>
    </>
  );
}

export default RowPosts;
