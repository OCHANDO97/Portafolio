import React from 'react'
import "../style/Home.css";
import fotoTipo from "../assets/foto.jpg"
const Home = () => {
    return (
        <div className="home-container">
          <div className="profile">
  
            <h1 className="home-name">Soy Juan Ochando </h1>
            <h1 className="home-funcion">Desarrollador de Software</h1>

            <img className="profile-image" src={fotoTipo} alt="" />
          </div>
          
        </div>
      );
    };

export default Home