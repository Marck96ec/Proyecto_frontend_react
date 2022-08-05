import React, { createContext, useReducer, useState } from "react";
import {
  ELIMINAR_POST,
  MODIFICAR_POST,
  OBTENER_POST,
  OBTENER_POSTS,
  REGISTRAR_POST,
} from "../const/actionsTypes";
import PostReducer from "../reducer/postReducer";
import Axios from "axios";
import Swal from "sweetalert2";

export const PostContext = createContext();

export const PostContextProvider = (props) => {
  const initialState = {
    postsList: [],
    postActual: null,
  };

  const [user, setUser] = useState();

  const [state, dispatch] = useReducer(PostReducer, initialState);

  const obtenerPosts = async () => {
    const resultado = await Axios.get("/posts");

    dispatch({
      type: OBTENER_POSTS,
      payload: resultado.data,
    });
  };

  const registrarPosts = async (post) => {
    try {
      const resultado = await Axios.post("/posts", post);
      console.log(resultado.data);
      dispatch({
        type: REGISTRAR_POST,
        payload: resultado.data,
      });
      Swal.fire({
        icon: "success",
        title: "Correcto",
        text: "Post registrado correctamente",
        toast: true,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo obtener los posts",
        toast: true,
      });
      console.log(error);
    }
  };

  const obtenerPost = async (post) => {
    try {
      let postEncontrado = null;
      if (post !== null) {
        const resultado = await Axios.get(`/posts/${post.id}`);
        const resultadoUserId = await Axios.get(`/users/${post.userId}`);
        setUser(resultadoUserId.data);
        postEncontrado = resultado.data;
      } else {
        postEncontrado = post;
      }

      dispatch({
        type: OBTENER_POST,
        payload: postEncontrado,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo obtener el post",
        toast: true,
      });
      console.log(error);
    }
  };

  const actualizarPost = async (post) => {
    try {
      const resultado = await Axios.put(`/posts/${post.id}`, post);
      console.log(resultado.data);
      dispatch({
        type: MODIFICAR_POST,
        payload: resultado.data,
      });
      Swal.fire({
        icon: "success",
        title: "Correcto",
        text: "Post modificado correctamente",
        toast: true,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo modificar el post",
        toast: true,
      });
      console.log(error);
    }
  };

  const eliminarPost = async (id) => {
    try {
      Swal.fire({
        title: "Desea eliminar?",
        text: "Se eliminara el post seleccionado",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
      }).then(async (result) => {
        if (result.value) {
          const resultado = await Axios.delete(`/posts/${id}`);
          console.log(resultado.data);
          dispatch({
            type: ELIMINAR_POST,
            payload: id,
          });
          Swal.fire({
            icon: "success",
            title: "Correcto",
            text: "Post eliminado correctamente",
            toast: true,
          });
        }
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo eliminar el post",
        toast: true,
      });
      console.log(error);
    }
  };

  return (
    <PostContext.Provider
      value={{
        postsList: state.postsList,
        postActual: state.postActual,
        user,

        obtenerPosts,
        registrarPosts,
        obtenerPost,
        actualizarPost,
        eliminarPost,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};
