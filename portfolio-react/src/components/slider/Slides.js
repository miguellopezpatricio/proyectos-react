import React from "react";
import './Slider.css';
import mazaroca from '../../media/mazaroca.png';


const slidesInfo = [
    {
        src:{mazaroca},
        alt:"Website restaurante Mazaroca",
        desc:"Realización del sitio web del restaurante 'A Casa de Rosa de Mazaroca'."
    },
    {
        src:"https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
        alt:"mariñeiros nun click web",
        desc:"Web de 'Mariñeiros por un día'."
    },
    {
        src:"https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
        alt:"CuotaApp",
        desc:"Aplicación de gestión de cuotas de pesca."
    },
    {
        src:"https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
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