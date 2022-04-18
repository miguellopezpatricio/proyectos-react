import React from "react";
import './Slider.css';
import mazaroca from '../../media/mazaroca.png';
import marineiros from '../../media/marineiros.png';
import armadoresweb from '../../media/armadoresweb.png';
import comuniapp from '../../media/comuniapp.png';


const slidesInfo = [
    {
        src:"../media/mazaroca.png",
        alt:"Website restaurante Mazaroca",
        desc:"Restaurante 'A Casa de Rosa de Mazaroca'."
    },
    {
        src:"https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
        alt:"mariñeiros nun click web",
        desc:"Proyecto 'Mariñeiros por un día'."
    },
    {
        src:{armadoresweb},
        alt:"web armadores Punta del Moral",
        desc:"Organización de armadores Punta del Moral."
    },
    {
        src:{comuniapp},
        alt:"ComuniApp",
        desc:"Aplicación de comunidad de propietarios."
    }

]

const slides = slidesInfo.map((slide) => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt}/>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>

    </div>
))

export default slides