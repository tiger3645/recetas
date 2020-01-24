import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="title">Recetas</h1>
      </Link>
    </div>
  );
};

export default Header;
