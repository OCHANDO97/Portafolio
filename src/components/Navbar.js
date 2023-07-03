import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <NavLink to="/home" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/sobreMi" >Sobre mí</NavLink>
        </li>
        <li>
          <NavLink to="/habilidades" >Habilidades</NavLink>
        </li>
        <li>
          <NavLink to="/proyectos" >Proyectos</NavLink>
        </li>
        <li>
          <NavLink to="/contacto" >Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;