import React from "react";
import "../style/Habilidades.css";

const Habilidades = () => {
  return (
    <>
      <div className="container my-5 d-flex flex-wrap ">
        <div className="card m-5" style={{ width: `20rem` }}>
          <div className="card-body">
            <h5 className="px-5 fw-bold">Back-end: </h5>
            <div className="accordion accordion-flush" id="accordionOne" >
              <div className="accordion-item ">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#php-laravel"
                    
                  >
                    PHP Laravel
                  </button>
                </h2>
                <div id="php-laravel" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                  <div className="accordion-body">
                    <p>Creación de API REST endpoints, usando diseño MVC</p>
                    <p>Usando Laravel Sanctum para autentificación</p>
                    <p>
                      Aplicando TDD a funcionalizades con PHPUnit para mejor
                      desarrollo
                    </p>
                    <p>
                      Orientado a objetos , aplicando modelos de diseños,
                      factory method, builder entre otros
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#node"
                  >
                    Node.js
                  </button>
                </h2>
                <div id="node" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                  <div className="accordion-body">
                    <p>Creación de API REST endpoints, usando diseño MVC</p>
                    <p>Aplicando web scraping, con playwright. </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#python"
                    
                  >
                    Python
                  </button>
                </h2>
                <div id="python" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                  <div className="accordion-body">
                    <p>
                      aplicando TDD a funcionalizades con PyTest para mejor
                      desarrollo
                    </p>
                    <p>
                      Orientado a objetos , aplicando modelos de diseños,
                      factory method, builder entre otros
                    </p>
                    <p>
                      Aplicando web scraping, con playwright y automatización.{" "}
                    </p>
                    <p>Estructuras de datos, con librerias Pandas, Numpy </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card m-5" style={{ width: `20rem` }}>
          <div className="card-body">
            <h5 className="px-5 fw-bold">Fron-end: </h5>
            <div className="accordion accordion-flush" id="accordionTwo">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#react"
                  >
                    JavaScript React
                  </button>
                </h2>
                <div id="react" className="accordion-collapse collapse" data-bs-parent="#accordionTwo">
                  <div className="accordion-body">
                    <p>
                      Conocimientos en React para mostrar datos desde API REST y
                      poco mas.
                    </p>
                    <p>HTML, CSS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card m-5" style={{ width: `20rem` }}>
          <div className="card-body">
            <h5 className="px-5 fw-bold">Base de datos: </h5>
            <div className="accordion accordion-flush " id="accordionThree">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#mysql"
                    
                  >
                    MYSQL
                  </button>
                </h2>
                <div id="mysql" className="accordion-collapse collapse" data-bs-parent="#accordionThree">
                  <div className="accordion-body">
                    <p>Manejo de consulta con grandes cantidades de datos</p>
                    <p>Diseño de Base relacional</p>
                    <p>Conocimientos del lenguaje SQL</p>
                    <p>Procedimientos Almacenados</p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#mongo"
                  >
                    NoSQL MongoDB
                  </button>
                </h2>
                <div id="mongo" className="accordion-collapse collapse" data-bs-parent="#accordionThree">
                  <div className="accordion-body">
                    <p>Manejo de consulta con grandes cantidades de datos</p>
                    <p>
                      Diseño de Base no relacional atraves de documentos Json
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card m-5" style={{ width: `20rem` }}>
          <div className="card-body">
            <h5 className="px-5 fw-bold">Virtualización: </h5>
            <div className="accordion accordion-flush" id="accordionFour">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#docker"
                  >
                    Docker
                  </button>
                </h2>
                <div id="docker" className="accordion-collapse collapse" data-bs-parent="#accordionFour">
                  <div className="accordion-body">
                    <p>Manejar contenedores </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#git"
                  >
                    Git
                  </button>
                </h2>
                <div id="git" className="accordion-collapse collapse" data-bs-parent="#accordionFour">
                  <div className="accordion-body">
                    <p>control de versiones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      
    </>
  );
};

export default Habilidades;
