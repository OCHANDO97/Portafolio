import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Proyectos.css';
import imagenListaCompra from "../assets/listaCompra.png";
import imagenApiRestaurante from "../assets/apiRestaurante.png";

const Proyectos = () => {
  return (
    <div className="article-container">
      <div className="article-item">
        <Link to="/listaCompra">
          <p>LISTA COMPRA</p>
          <img src={imagenListaCompra} alt="" />
        </Link>
      </div>
      <div className="article-item">
        <Link to="/apiRestaurante">
          <p>API RESTAURANTE</p>
          <img src={imagenApiRestaurante} alt="" />
         
        </Link>
      </div>
      
      
    </div>
  );
};

export default Proyectos;