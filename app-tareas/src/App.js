import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='logo fcc'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        
      </div>
    </div>
  );
}

export default App;
