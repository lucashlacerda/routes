import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* Se comporta como um link normal */}
      <Link to="/">Home</Link>
      {/* Quando ativo, adiciona a classe active na anchor tag. Utilizado somente em navbars*/}
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
    </nav>
  );
};

export default Navbar;
