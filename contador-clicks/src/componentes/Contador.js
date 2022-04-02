import React from 'react';
import '../estilos/Contador.css';

function Contador({numClics}){
  return(
    <div className='contador'>
      {numClics}
    </div>
  );

}

export default Contador;
