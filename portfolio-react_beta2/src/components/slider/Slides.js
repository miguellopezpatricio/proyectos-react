import React from "react";
import './Slider.css';
import mazaroca from '../../media/mazaroca.png';
import marineiros from '../../media/marineiros.png';
import armadoresweb from '../../media/armadoresweb.png';
import comuniapp from '../../media/comuniapp.png';


const slidesInfo = [
    {
        src:{mazaroca},
        alt:"Website restaurante Mazaroca",
        desc:"Realización del sitio web del restaurante 'A Casa de Rosa de Mazaroca'."
    },
    {
        src:{marineiros},
        alt:"mariñeiros nun click web",
        desc:"Web de 'Mariñeiros por un día'."
    },
    {
        src:{armadoresweb},
        alt:"web armadores Punta del Moral",
        desc:"Web de la Organización de armadores Punta del Moral."
    },
    {
        src:{comuniapp},
        alt:"ComuniApp",
        desc:"Aplicación de gestión de comunidad de vecinos."
    }

]

const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt}/>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>

    </div>
))

export default slides