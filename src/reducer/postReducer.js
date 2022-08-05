import {
  ELIMINAR_POST,
  MODIFICAR_POST,
  OBTENER_POST,
  OBTENER_POSTS,
  REGISTRAR_POST,
} from "../const/actionsTypes";

export default (state, action) => {
  switch (action.type) {
    case OBTENER_POSTS:
      return {
        ...state,
        postsList: action.payload,
      };
    case REGISTRAR_POST:
      return {
        ...state,
        postsList: [...state.postsList, action.payload],
      };
    case OBTENER_POST:
      return {
        ...state,
        postActual: action.payload,
      };

    case MODIFICAR_POST:
      return {
        ...state,
        postsList: state.postsList.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };

    case ELIMINAR_POST:
      return {
        ...state,
        postsList: state.postsList.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};
