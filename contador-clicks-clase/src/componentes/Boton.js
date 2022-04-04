import React from 'react';
import'../estilos/Boton.css';

class Boton extends React.Component{
  render(){
    return(
      <button className={this.props.esBotonClic ? 'boton-clic' : 'boton-reiniciar'}
        onClick={this.props.manejarClic}>
        {this.props.texto}
      </button>
    );
  }
}


export default Boton;