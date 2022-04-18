import React from 'react';
import "./About.css";
import mlpatri from '../../media/mlpatri.jpg'

function About() {
    return (
        <div className='about-container'>
            <div className='about-desc'>
                <h3>Sobre mi trabajo...</h3>
                <p>Durante veinte años trabajé en un taller mecánico realizando diversas funciones:
                    Desde mantenimiento de vehículos hasta tareas de gestión de la empresa (facturación, contabilidad, gestión de impuestos,…).</p>

                <p>Con el tiempo, descubrí mi verdadera vocación: la programación. Luego de un período de estudios y preparación en el área de desarrollo web y aplicaciones informáticas me pasé a ser freelance.
                </p>
                <p>
                    Durante el verano de 2021 realicé unas prácticas Erasmus+ en la Delegación de Cruz Vermelha en Braga (Portugal), como parte de mis estudios recientes de DAM, en las que realicé algunas aplicaciones internas en php y js. </p>

                <p> Actualmente sigo como autónomo, desde hace unos tres años, y realizo diversos trabajos relacionados con mi profesión actual: webs en WordPress y aplicaciones de gestión.
                </p>

            </div>
            <div className='about-img'>
                <img src={mlpatri} alt='foto' />
            </div>
        </div>
    )
}

export default About
