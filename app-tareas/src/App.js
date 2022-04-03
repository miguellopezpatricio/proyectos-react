import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import ListaDeTareas from './Componentes/ListaDeTareas';

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
       <ListaDeTareas />      
      </div>
    </div>
  );
}

export default App;
