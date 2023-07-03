import React from 'react'
import "../style/Home.css";
import fotoTipo from "../assets/fotoPerfil.jpg"
const Home = () => {
    return (
        <div className="home-container">
          <div className="profile">
            {/* <h1 className="profile-text">
              Soy <span>Juan Ochando</span>
              <br />
               desarrollador <span>Backend</span>
            </h1> */}
            <h1 className="home-name">Soy Juan Ochando </h1>
            <h1 className="home-funcion">Desarrollador BackEnd</h1>

            <img className="profile-image" src={fotoTipo} alt="" />
          </div>
          
        </div>
      );
    };

export default Home