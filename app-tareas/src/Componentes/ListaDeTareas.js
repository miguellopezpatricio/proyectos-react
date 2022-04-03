import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import '../Estilos/ListaDeTareas.css';
import Tarea from "./Tarea";

function ListaDeTareas(){

    const[tareas, setTareas] = useState([]);

    const agregrarTarea = tarea => {
        console.log('Tarea agregada');
        console.log(tarea);
    }



    return(
        <>
        <TareaFormulario   />
        <div className='tareas-lista-contenedor'>

            {
                tareas.map(
                    (tarea)=><Tarea 
                                texto = {tarea.texto}
                                completada = {tarea.completada}
                    />
                )
            }


        </div>
        </>

    );
}

export default ListaDeTareas;