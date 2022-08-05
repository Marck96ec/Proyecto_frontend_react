import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="panel">
      <p className="panel-heading">Menu</p>
      <div className="panel-block">
        <Link to="/" className="button is-fullwidth">
          <div className="icon">
            <i className="fas fa-home"></i>
          </div>
          <div>Inicio</div>
        </Link>
      </div>
      <div className="panel-block">
        <Link to="/posts" className="button is-fullwidth">
          <div className="icon">
            <i className="fas fa-users"></i>
          </div>
          <div>Posts</div>
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
