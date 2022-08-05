import React from "react";
import { ModalContextProvider } from "../../contexts/ModalContext";
import Header from "./Header";
import Menu from "./Menu";

function Layout(props) {
  return (
    <ModalContextProvider>
      <div>
        <Header />
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter">
              <Menu />
            </div>
            <div className="column">{props.children}</div>
          </div>
        </div>
      </div>
    </ModalContextProvider>
  );
}

export default Layout;
