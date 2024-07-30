import { Link } from "react-router-dom";
import "./logo.css";
import React from "react";
import logoIcon from "../../assets/Logo.svg";
function Logo() {
  return (
    <div className="header-bottom-left">
      <Link className="logo-link" to="/">
        <img src={logoIcon} alt="Logo" />
      </Link>
    </div>
  );
}

export default Logo;
