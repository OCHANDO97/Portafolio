import React from 'react';
import '../style/Contacto.css';

const Contacto = () => {
  return (
    <div className="contacto-container">
        <h1 >Contacto</h1>
        <p >Teléfono: +34666672504</p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/juan-ochando-0222ab205/"  target="_blank" rel="noopener noreferrer">Mi perfil de LinkedIn</a>
        </p>
        <p>Correo: jochando1997@gmail.com</p>
    </div>
  );
};

export default Contacto;