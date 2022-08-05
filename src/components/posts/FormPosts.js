import React, { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { PostContext } from "../../contexts/PostContext";
import Form from "react-bootstrap/Form";
import Axios from "axios";

function FormPosts() {
  const { showModal, modalTitle, setShowModal, setModalTitle } =
    useContext(ModalContext);

  const { registrarPosts, postActual, obtenerPost, actualizarPost, user } =
    useContext(PostContext);

  const postDefault = {
    userId: "",
    title: "",
    body: "",
  };

  const [posts, setPosts] = useState(postDefault);
  const [mensaje, setMensaje] = useState(null);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    if (postActual !== null) {
      setPosts({
        ...postActual,
      });
    } else {
      setPosts(postDefault);
    }
    // eslint-disable-next-line
  }, [postActual]);

  useEffect(() => {
    Axios.get("/users").then((response) => {
      setUsuarios(response.data);
    });
  }, []);

  const handleChange = (e) => {
    setPosts({
      ...posts,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (
      posts.userId === "" ||
      posts.title.trim() === "" ||
      posts.body.trim() === ""
    ) {
      setMensaje("El usuario, titulo, post son obligatorios");
      return;
    }

    if (postActual !== null) {
      actualizarPost(obtenerPostEnviar());
    } else {
      registrarPosts(obtenerPostEnviar());
    }

    cerrarModal();
  };

  const limpiarForm = () => {
    setMensaje(null);
    setPosts(postDefault);
  };

  const cerrarModal = () => {
    limpiarForm();
    setShowModal(false);
    obtenerPost(null);
  };

  const obtenerPostEnviar = () => {
    let postTemp = { ...posts };
    return postTemp;
  };

  const itemsUsuarios = usuarios.map((usuario) => {
    return (
      <option key={usuario.id} value={usuario.id}>
        {usuario.name}
      </option>
    );
  });

  return (
    <form onSubmit={handleOnSubmit}>
      {mensaje ? <div className="notification is-danger">{mensaje}</div> : null}
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">userId</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <Form.Select
                className="input"
                name="userId"
                aria-label="Usuarios"
                style={{ width: "100%" }}
                onChange={handleChange}
              >
                <option value={postActual !== null ? user.id : ""}>
                  {postActual !== null ? user.name : "Seleccione un usuario"}
                </option>
                {itemsUsuarios}
              </Form.Select>
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Title</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Ingrese su title"
                name="title"
                value={posts.title}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Post</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded has-icons-left">
              <input
                autoComplete="off"
                className="input"
                type="text"
                placeholder="Ingrese su post"
                name="body"
                value={posts.body}
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <i className="fa-solid fa-prescription-bottle"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label"></div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-primary mr-1">
                Guardar
              </button>
              <button
                type="button"
                className="button"
                onClick={() => cerrarModal()}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormPosts;
