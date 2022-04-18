import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <h1>Miguel López Patricio</h1>
                <p>Hecho en casa</p>
            </div>
            <div className='footer-contact'>
                <h3>Contacta conmigo</h3>
                <p>y cuéntame qué proyecto quieres realizar</p>
            </div>
            <div className='footer-sns'>
                <div className='design-by'>
                    Diseñado por mi
                </div>
                <div className='sns-links'>
                    <a href='https://linkedin.com' target="_blank" rel='noreferrer'><i className='fab fa-linkedin'></i></a>
                </div>
                <div className='sns-links'>
                    <a href='https://twitter.com' target="_blank" rel='noreferrer'><i className='fab fa-github'></i></a>
                </div>
            </div>

        </footer>
    )
}

export default Footer
