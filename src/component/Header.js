import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <Link to="/">
        <h1 className="headerh1">TODO APP</h1>
      </Link>
      <Link to="/addtodo" className="add">
        ADD
      </Link>
    </header>
  );
}

export default Header;
