import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../../contexts/PostContext";
import RowPosts from "./RowPosts";

function TablePosts() {
  const { postsList, obtenerPosts } = useContext(PostContext);

  useEffect(() => {
    obtenerPosts();
    // eslint-disable-next-line
  }, []);

  if (postsList.length === 0)
    return (
      <center>
        <p>No existen clientes.</p>
      </center>
    );

  return (
    <div className="table-container">
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Acciones</th>
            <th>Title</th>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
          {postsList.map((post) => (
            <RowPosts post={post} key={post.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablePosts;
