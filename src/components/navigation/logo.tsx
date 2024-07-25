import { Link } from "react-router-dom";
import "./logo.css";
import React from "react";
function Logo() {
  return (
    <div className="header-bottom-left">
      <Link className="logo-link" to="/">
        <p>My</p>
        <p>Store</p>
      </Link>
    </div>
  );
}

export default Logo;
