import React from 'react'
import '../style/Habilidades.css'

const Habilidades = () => {
  return (
    <>
     <div className="skills-container">
      <div className="backend-skills">
        <h2 className="title-skills">Back-end:</h2>
        <ul>
          <li>PHP Laravel: </li>
            <p>Creación de API REST endpoints, usando diseño MVC</p>
            <p>Usando Laravel Sanctum para autentificación</p>
            <p>Aplicando TDD a funcionalizades con PHPUnit para mejor desarrollo</p>
            <p>Orientado a objetos , aplicando modelos de diseños, factory method, builder entre otros</p>
          <li>Node.js:</li>
            <p>Creación de API REST endpoints, usando diseño MVC</p>
            <p>Aplicando  web scraping, con playwright. </p>
          <li>Python: </li>
            <p>aplicando TDD a funcionalizades con PyTest para mejor desarrollo</p>
            <p>Orientado a objetos , aplicando modelos de diseños, factory method, builder entre otros</p>
            <p>Aplicando web scraping, con playwright y automatización. </p>
            <p>Estructuras de datos, con librerias Pandas, Numpy </p>
        </ul>
      </div>
      <div className="frontend-skills">
        <h2 className="title-skills">Front-end:</h2>
        <ul>
           <li>JavaScript React:</li> 
                <p>Conocimientos en React para mostrar datos desde API REST y poco mas.</p>
                <p>HTML, CSS</p>
        </ul>
      </div>
      <div className="database-skills">
            <h2 className="title-skills">Base de datos:</h2>
            <ul>
                <li>MYSQL:</li>
                    <p>Manejo de consulta con grandes cantidades de datos</p>
                    <p>Diseño de Base relacional</p>
                <li>NoSQL MongoDB</li>
                    <p>Manejo de consulta con grandes cantidades de datos</p>
                    <p>Diseño de Base no relacional atraves de documentos Json</p>
            </ul>
      </div>
      <div className="virtualization-skills">
        <h2 className="title-skills">Virtualización:</h2>
            <ul>
                <li>Docker</li>
                    <p>Manejar contenedores </p>
                <li>Git</li>
                    <p>control de versiones </p>
                    <p>Manejo de ramas </p>
            </ul>
      </div>
    </div>
    
    </>
  )
}

export default Habilidades