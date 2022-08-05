import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar is-primary">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h2>Proyecto Frontend</h2>
        </Link>
      </div>
    </div>
  );
}
export default Header;
