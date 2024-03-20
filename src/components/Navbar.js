import React from "react";
import { NavLink } from "react-router-dom";
// import "../style/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
      <div className="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/sobreMi">
                Sobre mí
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/habilidades">
                Habilidades
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/proyectos">
                Proyectos
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
