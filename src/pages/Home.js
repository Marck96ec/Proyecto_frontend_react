import React from "react";
import Layout from "../components/commons/Layout";
function Home() {
  return (
    <Layout>
      <div className="panel ">
        <div className="panel-heading">Proyecto</div>
        <div className="box">
          <h3>Requerimientos</h3> Funcionalidad completa para CRUD.
          <ul>
            <ol>•Listar los post en una tabla.</ol>
            <ol>• Permitir Editar, Crear, con modales</ol>
            <ol>• Permitir Eliminar POST.</ol>
            <ol> • Todas las acciones del CRUD, deben utilizar APIs.</ol>
            <ol> • API: https://jsonplaceholder.typicode.com/posts</ol>
            <ol>
              {" "}
              • Visualizar loscomentarios de Post
              <ul>
                <ol>o Visualizar los comentarios en un modal</ol>
                <ol>
                  o https://jsonplaceholder.typicode.com/posts/postId/comments
                </ol>
              </ul>
            </ol>
            <ol>
              • Tener configuración de rutas para ingresar a la funcionalidad de
              mantenimiento de POST. General
            </ol>
            <ol>
              • Tener las rutas correspondientes para ingresar a funcionalidades
            </ol>
            <ol>• Utilizar componentes funcionales</ol>
            <ol>
              • Utilizar React-Bootstrap para la UI (Especial para los Modales).
            </ol>
            <ol>o Tablas opcional.</ol>
          </ul>
          <hr></hr>
          <h2>Aspectos evaluación</h2>.
          <ul>
            <ol>• Código que compile.</ol>
            <ol> • Cumplir con los requerimientos</ol>
            <ol>• Organización del código</ol>
            <ol> • Utilización de state, props, context, hooks</ol>
            <ol> • Utilización de controles UI</ol>
            <ol> • Configuración de Rutas</ol>
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
