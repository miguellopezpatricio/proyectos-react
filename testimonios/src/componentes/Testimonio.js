import React from 'react';
import '../estilos/Testimonio.css';

export function Testimonio (){
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={require('../imagenes/persona1.jpeg')}
      alt='foto persona'/>

      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
        <p className='cargo-testimonio'>Ingeniera de software</p>
        <p className='texto-testimonio'>Lorem ipsum...</p>
      </div>
    
    </div>
  );

}
