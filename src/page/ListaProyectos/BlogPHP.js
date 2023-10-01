import React from "react";
import BDApiRestaurante from "../../assets/disenoBDApiRestaurante.png";

const BlogPHP = () => {
  return (
    <>
      <div className="proyectos-container">
        <h1 className="title">Blog</h1>
        <div className="proyecto-details">
          <h3 className="">Descripción:</h3>
          <p>
          blog es una plataforma versátil y dinámica que ofrece a los usuarios una experiencia de 
          blogging rica y personalizable. 
          Los usuarios pueden aprovechar una variedad de características para 
          dar vida a sus ideas y compartir conocimientos con la comunidad
          </p>
          <p>
          Registro y Autenticación de Usuarios: 
          Los usuarios pueden crear cuentas seguras y autenticarse 
          fácilmente para acceder a sus perfiles personales.
          </p>
            <p>
            Creación de Categorías: La posibilidad de crear categorías personalizadas 
            permite a los usuarios organizar sus entradas.
            </p>
            <p>
            Creación, Edición y Eliminación de Entradas: Los usuarios tienen el control total 
            sobre sus publicaciones. 
            Pueden crear nuevas entradas, editarlas para la perfección o eliminarlas si lo desean.
            </p>
            <p>
            Exploración de Contenido: Los usuarios pueden explorar 
            las publicaciones de otros miembros
            </p>
            <p>
            Personalización del Perfil: Los usuarios pueden personalizar sus perfiles,
            </p>
            <p>
            Búsqueda Avanzada: Nuestro motor de búsqueda facilita 
            encontrar contenido específico entre las publicaciones de otros usuarios
            </p>
            <p></p>
            <p></p>
            <p></p>

          <h3 className="">Tecnologías usadas:</h3>
          <ul>
            <li>PHP-MYSQL:</li>
            <p>
              usamos PHP puro con MYSQL
              administramos las sesiones con PHP,
              consultas SQL
            </p>

           
          </ul>
          <h3 className="">Código de la App</h3>
          <p>
            <a
              href="https://github.com/OCHANDO97/blogPHP"
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

export default BlogPHP;
