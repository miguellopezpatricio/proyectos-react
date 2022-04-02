import React from 'react';

function Boton({texto, esBotonClic, manejarClic}){
  return(
    <button className={esBotonClic ? 'boton-clic' : 'boton-reiniciar'}
      onClick={manejarClic}>
      {texto}
    </button>
  );

}

export default Boton;