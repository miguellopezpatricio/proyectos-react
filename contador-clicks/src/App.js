import './App.css';
import freeCodeCampLogo from './imagenes/logo-freecodecamp.png';
import Boton from './componentes/Boton';

function App() {

  const manejarClic=()=>{
    console.log('Click');
  }

  const reiniciarContador = ()=>{
    console.log('Reiniciar');
  }



  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='logo freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
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
