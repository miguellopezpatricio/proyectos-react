import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic=()=>{
   //  console.log('Click');
   setNumClics(numClics + 1);
  }

  const reiniciarContador = ()=>{
   // console.log('Reiniciar');
    setNumClics(0);
  }



  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='logo freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
        texto='clic'
        esBotonClic={true}
        manejarClic={manejarClic}
        />
        <Boton
        texto='reiniciar'
        esBotonClic={false}
        manejarClic={reiniciarContador}
        />

      </div>


    </div>
  );
}

export default App;
