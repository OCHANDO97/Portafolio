import React from "react";
import BDApiRestaurante from "../../assets/disenoBDApiRestaurante.png";

const ApiRestaurante = () => {
  return (
    <>
      <div className="proyectos-container">
        <h1 className="title">Api restaurante</h1>
        <div className="proyecto-details">
          <h3 className="">Descripción:</h3>
          <p>
            Autenticación: La API REST de Restaurante es una solución diseñada
            para gestionar los datos de un restaurante, proporcionando
            información sobre platos, facturas y mesas. A continuación, se
            detallan las características principales de esta API:
          </p>
          <p>
            La API cuenta con un sistema de autenticación que permite controlar
            el acceso a los recursos y garantizar la seguridad de los datos. Los
            camareros pueden autenticarse utilizando credenciales únicas, como
            nombre de usuario y contraseña
          </p>
          <p>
            Información de mesas: La API proporciona información sobre las mesas
            disponibles en el restaurante. Los camareros pueden acceder a datos
            como el número de mesa, la capacidad de comensales, la
            disponibilidad y el estado actual (ocupada o libre). Esto les
            permite tener una visión general de la ocupación del restaurante y
            asignar adecuadamente a los clientes.
          </p>
          <p>
            Gestión de platos: La API permite acceder a la información detallada
            sobre los platos del menú. Los camareros pueden obtener datos como
            el nombre del plato, una descripción, el precio, los ingredientes y
            la disponibilidad. También pueden realizar búsquedas de platos por
            categoría, como entrantes, platos principales, postres, etc.
          </p>

          <p>
            Facturas y pagos: La API ofrece funcionalidades para gestionar las
            facturas y los pagos de los clientes. Los camareros pueden crear
            facturas asociadas a una mesa específica y agregar los platos
            consumidos por los comensales. Además, la API permite registrar el
            estado de pago de cada factura, facilitando el seguimiento de las
            transacciones y la generación de informes financieros.
          </p>
          <p>
            Interfaz para dispositivos móviles: La API está diseñada para ser
            utilizada desde dispositivos móviles, lo que permite a los camareros
            acceder a la información del restaurante en tiempo real.{" "}
          </p>

          <h3 className="">Tecnologías usadas:</h3>
          <ul>
            <li>PHP Laravel:</li>
            <p>
              usamos Laravel un OMR para creacion de la Api. se usan sanctum
              laravel para la autentificación de usuarios es escalable se puede
              seguir creciendo el proyecto
            </p>

            <li>MySQL:</li>
            <p>Diseño de la base de datos</p>
            <img
              className="bd-image"
                src={BDApiRestaurante}
              alt="Base de datos de la aplicación"
            />
          </ul>
          <h3 className="">Código de la App</h3>
          <p>
            <a
              href="https://github.com/OCHANDO97/apiRestaurante"
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

export default ApiRestaurante;
