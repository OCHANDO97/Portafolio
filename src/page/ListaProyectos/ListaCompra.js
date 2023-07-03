import React from "react";
import BDAppLista from "../../assets/disenoBDAppLista.png";
import "../../style/ListaCompra.css";

const ListaCompra = () => {
  return (
    <>
      <div className="proyectos-container">
        <h1 className="title">
          Aplicación móvil para listar compras y organizar tus productos
        </h1>
        <div className="proyecto-details">
          <h3 className="">Descripción:</h3>
          <p>
            Se ha desarrollado una innovadora aplicación móvil que permite a los
            usuarios crear y organizar listas de compras de manera fácil y
            conveniente.
          </p>
          <p>
            La aplicación móvil ofrece a los usuarios la posibilidad de crear
            listas personalizadas para diferentes ocasiones, como la lista de
            compras del supermercado o la lista de regalos de cumpleaños.
          </p>
          <p>
            Dentro de cada lista, los usuarios pueden agregar y almacenar
            productos individualmente. La aplicación ofrece una base de datos de
            productos, lo que facilita la búsqueda y selección de elementos
            comunes.
          </p>
          <h3 className="">Tecnologías usadas:</h3>
          <ul>
            <li>React Native:</li>
            <p>
              Permite crear interfaces de usuario nativas utilizando JavaScript.
              Con React Native, se puede desarrollar la parte visual de la
              aplicación, mostrando los productos y creando una interfaz
              intuitiva y atractiva para los usuarios.
            </p>
            <li>Node.js ORM Sequelize:</li>
            <p>
              En la aplicación de listar compras, Node.js se utiliza en el lado
              del servidor para crear una API REST que permita la comunicación
              entre la aplicación móvil y la base de datos. Sequelize es una
              biblioteca de mapeo objeto-relacional (ORM) para Node.js que
              simplifica la interacción con la base de datos.
            </p>
            <p>
              Con Sequelize, se puede definir la estructura y los modelos de la
              base de datos utilizando JavaScript, lo que facilita la creación y
              manipulación de tablas, así como la realización de consultas. El
              uso de Sequelize en la aplicación de listar compras simplifica la
              interacción con la base de datos y mejora la eficiencia del
              desarrollo.
            </p>
            <li>MySQL:</li>
            <p>Diseño de la base de datos</p>
            <img
              className="bd-image"
              src={BDAppLista}
              alt="Base de datos de la aplicación"
            />
          </ul>
          <h3 className="">Código de la App</h3>
          <p>
            <a
              href="https://github.com/OCHANDO97/Shoping"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a GitHub
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default ListaCompra;
