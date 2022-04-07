import React from 'react';
import '../estilos/Testimonio.css';


class Testimonio extends React.Component{

  render(){
    return (
      <div className='contenedor-testimonio'>
        <img className='imagen-testimonio'
        src={require(`../imagenes/persona${this.props.imagen}.jpeg`)}
        alt={`Foto de ${this.props.nombre}`} />
  
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>{this.props.nombre} en {this.props.pais}</p>
          <p className='cargo-testimonio'>{this.props.cargo} en {this.props.empresa}</p>
          <p className='texto-testimonio'>{this.props.testimonio}</p>
        </div>
      
      </div>
    );
  }
}

export default Testimonio;


