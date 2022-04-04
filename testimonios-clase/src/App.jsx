import React from 'react';
import './App.css';
import {Testimonio} from './componentes/Testimonio.jsx';


class App extends React.Component{
  render(){

    return (
      <div className="App">
              <h1>Testimonios de nuestros alumnos:</h1>
        <div className='contenedor-principal'>
  
        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='1'
          cargo='Ingeniera'
          empresa='Spotify'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
         />
        <Testimonio
          nombre='Pepe Pérez'
          pais='Francia'
          imagen='2'
          cargo='Ingeniero'
          empresa='IBM'
          testimonio='Chop chop Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
         />
        </div>
      </div>
    );

  }
}


export default App;
