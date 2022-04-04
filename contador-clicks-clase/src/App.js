import './App.css';
import React from 'react';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';



class App extends React.Component{
 
  constructor(){
    super();
    this.state = {
      numClics: 0
    };

    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

    manejarClic(){
      this.setState(({numClics})=>({numClics: numClics + 1}));
    }
  
    reiniciarContador(){
      this.setState({numClics: 0});
    }

    
  render(){
    return (
      <div className="App">
        <div className='freecodecamp-logo-contenedor'>
          <img className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='logo freecodecamp'/>
        </div>
        <div className='contenedor-principal'>
          <Contador numClics={this.state.numClics} />
          <Boton
          texto='clic'
          esBotonClic={true}
          manejarClic={this.manejarClic}
          />
          <Boton
          texto='reiniciar'
          esBotonClic={false}
          manejarClic={this.reiniciarContador}
          />
  
        </div>
  
  
      </div>
    );
  }

}

/*
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
*/ 
export default App;
