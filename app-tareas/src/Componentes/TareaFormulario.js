import React, {useState} from "react";
import Tarea from "./Tarea";
import '../Estilos/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props){

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
        console.log(e.target.value);

    }

    const manejarEnvio = e =>  {

        e.preventDefault();

        const tareaNueva = {
            /* instalar paquete uuid para generar id: npm install uuid */
            id: '34545',
            texto: input,
            completada: false
        }

    }


    return(
        <form className='tara-formulario'
            onSubmit={manejarEnvio}>
            <input
            className='tarea-input'
            type='text'
            placeholder='Escribe una tarea'
            name='texto'
            onChange={manejarCambio}
            />
            <button className='tarea-boton'>Agregar Tarea</button>
        </form>
        )
}

export default TareaFormulario;
