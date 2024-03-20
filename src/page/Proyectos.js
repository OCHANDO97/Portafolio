import React from "react";
import "../style/Proyectos.css";
import imagenListaCompra from "../assets/listaCompra.png";
import imagenApiRestaurante from "../assets/apiRestaurante.png";
import scrapingImg from "../assets/scraping.png";
import blog from "../assets/blog.png";

const Proyectos = () => {
  return (
    <div className="container my-5 d-flex flex-wrap">
      <div className="card m-4" style={{ width: `24rem` }}>
        <img
          src={imagenListaCompra}
          classNameName="card-img-top"
          style={{ height: `15rem` }}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title mb-4">LISTA COMPRA</h5>

          <div className="accordion mb-4">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#lista-compra"
                >
                  Descripción
                </button>
              </h2>
              <div
                id="lista-compra"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <p className="card-text">
                    Se ha desarrollado una innovadora aplicación móvil que
                    permite a los usuarios crear y organizar listas de compras
                    de manera fácil y conveniente.
                  </p>
                  <p className="card-text">
                    La aplicación móvil ofrece a los usuarios la posibilidad de
                    crear listas personalizadas para diferentes ocasiones, como
                    la lista de compras del supermercado o la lista de regalos
                    de cumpleaños.
                  </p>
                  <p className="card-text">
                    Dentro de cada lista, los usuarios pueden agregar y
                    almacenar productos individualmente. La aplicación ofrece
                    una base de datos de productos, lo que facilita la búsqueda
                    y selección de elementos comunes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h6 className="card-text mb-4">
            <strong className="card-title">Tecnologias:</strong> React Native
            Node.js ORM Sequelize MySQL
          </h6>
          <a
            href="https://github.com/OCHANDO97/Shoping"
            className="btn btn-primary w-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver proyecto
          </a>
        </div>
      </div>

      <div className="card m-4" style={{ width: `24rem` }}>
        <img
          src={imagenApiRestaurante}
          classNameName="card-img-top"
          style={{ height: `15rem` }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title mb-4">API RESTAURANTE</h5>

          <div className="accordion mb-4">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#api-restaurante"
                >
                  Descripción
                </button>
              </h2>
              <div
                id="api-restaurante"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="card-text">
                    Autenticación: La API REST de Restaurante es una solución
                    diseñada para gestionar los datos de un restaurante,
                    proporcionando información sobre platos, facturas y mesas. A
                    continuación, se detallan las características principales de
                    esta API:
                  </p>
                  <p className="card-text">
                    La API cuenta con un sistema de autenticación que permite
                    controlar el acceso a los recursos y garantizar la seguridad
                    de los datos. Los camareros pueden autenticarse utilizando
                    credenciales únicas, como nombre de usuario y contraseña
                  </p>
                  <p className="card-text">
                    Información de mesas: La API proporciona información sobre
                    las mesas disponibles en el restaurante. Los camareros
                    pueden acceder a datos como el número de mesa, la capacidad
                    de comensales, la disponibilidad y el estado actual (ocupada
                    o libre). Esto les permite tener una visión general de la
                    ocupación del restaurante y asignar adecuadamente a los
                    clientes.
                  </p>
                  <p className="card-text">
                    Gestión de platos: La API permite acceder a la información
                    detallada sobre los platos del menú. Los camareros pueden
                    obtener datos como el nombre del plato, una descripción, el
                    precio, los ingredientes y la disponibilidad. También pueden
                    realizar búsquedas de platos por categoría, como entrantes,
                    platos principales, postres, etc.
                  </p>

                  <p className="card-text">
                    Facturas y pagos: La API ofrece funcionalidades para
                    gestionar las facturas y los pagos de los clientes. Los
                    camareros pueden crear facturas asociadas a una mesa
                    específica y agregar los platos consumidos por los
                    comensales. Además, la API permite registrar el estado de
                    pago de cada factura, facilitando el seguimiento de las
                    transacciones y la generación de informes financieros.
                  </p>
                  <p className="card-text">
                    Interfaz para dispositivos móviles: La API está diseñada
                    para ser utilizada desde dispositivos móviles, lo que
                    permite a los camareros acceder a la información del
                    restaurante en tiempo real.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h6 className="card-text mb-4">
            <strong className="card-title">Tecnologias:</strong> PHP Laravel
            MySQL
          </h6>
          <a
            href="https://github.com/OCHANDO97/apiRestaurante"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-100"
          >
            Ver proyecto
          </a>
        </div>
      </div>

      <div className="card m-4" style={{ width: `24rem` }}>
        <img
          src={scrapingImg}
          classNameName="card-img-top"
          style={{ height: `15rem` }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title mb-4">Escrapeo de datos de páginas web</h5>

          <div className="accordion mb-4">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  data-bs-toggle="collapse"
                  data-bs-target="#scrapeo"
                >
                  Descripción
                </button>
              </h2>
              <div id="scrapeo" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <p className="card-text">
                    En este Script, exploraremos el proceso de escrapeo de datos
                    de la página web de Acadesa, centrándonos en la obtención de
                    más de 1000 productos y la extracción de información.
                  </p>
                  <p className="card-text">
                    Al finalizar el proceso de ejecución del script de escrapeo,
                    se generará un archivo Excel que contendrá todos los
                    productos scrapeados
                  </p>
                  <p className="card-text">
                    El proceso de escrapeo de datos puede aplicarse a diversas
                    páginas web siempre y cuando se estudie la estructura HTML
                    de cada página en particular. Cada sitio web puede tener su
                    propia estructura y etiquetas HTML específicas para los
                    datos que se desean extraer.
                  </p>
                  <p className="card-text">
                    Es posible obtener datos sobre ofertas, novedades, productos
                    más vendidos y otros aspectos relevantes para un análisis
                    más completo y una toma de decisiones informada.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h6 className="card-text mb-4">
            <strong className="card-title">Tecnologias:</strong> Python
          </h6>
          <a
            href="https://github.com/OCHANDO97/webScraping"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-100"
          >
            Ver proyecto
          </a>
        </div>
      </div>

      <div className="card m-4" style={{ width: `24rem` }}>
        <img
          src={blog}
          classNameName="card-img-top"
          style={{ height: `15rem` }}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title mb-4">Blog</h5>

          <div className="accordion mb-4">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#blog"
                >
                  Descripción
                </button>
              </h2>
              <div
                id="blog"
                className="accordion-collapse collapse "
              >
                <div className="accordion-body">
                  <p className="card-text">
                    blog es una plataforma versátil y dinámica que ofrece a los
                    usuarios una experiencia de blogging rica y personalizable.
                    Los usuarios pueden aprovechar una variedad de
                    características para dar vida a sus ideas y compartir
                    conocimientos con la comunidad
                  </p>
                  <p className="card-text">
                    Registro y Autenticación de Usuarios: Los usuarios pueden
                    crear cuentas seguras y autenticarse fácilmente para acceder
                    a sus perfiles personales.
                  </p>
                  <p className="card-text">
                    Creación de Categorías: La posibilidad de crear categorías
                    personalizadas permite a los usuarios organizar sus
                    entradas.
                  </p>
                  <p className="card-text">
                    Creación, Edición y Eliminación de Entradas: Los usuarios
                    tienen el control total sobre sus publicaciones. Pueden
                    crear nuevas entradas, editarlas para la perfección o
                    eliminarlas si lo desean.
                  </p>
                  <p className="card-text">
                    Exploración de Contenido: Los usuarios pueden explorar las
                    publicaciones de otros miembros
                  </p>
                  <p className="card-text">
                    Personalización del Perfil: Los usuarios pueden personalizar
                    sus perfiles,
                  </p>
                  <p className="card-text">
                    Búsqueda Avanzada: Nuestro motor de búsqueda facilita
                    encontrar contenido específico entre las publicaciones de
                    otros usuarios
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h6 className="card-text mb-4">
            <strong className="card-title">Tecnologias:</strong> PHP-MYSQL
          </h6>
          <a
            href="https://github.com/OCHANDO97/blogPHP"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary w-100"
          >
            Ver proyecto
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Proyectos;
