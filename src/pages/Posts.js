import React, { useContext } from "react";
import Layout from "../components/commons/Layout";
import TablePosts from "../components/posts/TablePosts";
import ToolbarPosts from "../components/posts/ToolbarPosts";
import ModalC from "../components/commons/ModalC";
import FormPosts from "../components/posts/FormPosts";
import { PostContextProvider } from "../contexts/PostContext";

function Posts() {
  return (
    <Layout>
      <PostContextProvider>
        <div className="panel ">
          <div className="panel-heading">Posts</div>
          <div className="box">
            <ToolbarPosts />
            <TablePosts />
          </div>
        </div>
        <ModalC>
          <FormPosts />
        </ModalC>
      </PostContextProvider>
    </Layout>
  );
}
export default Posts;
