import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
function RoutesBasic() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesBasic;
