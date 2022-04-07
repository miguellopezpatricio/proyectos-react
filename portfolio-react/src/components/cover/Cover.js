import React from 'react';
import "./Cover.css";
import video from "../../media/video.m4v";


const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={video} autoPlay loop muted />
            <h1>Miguel López Patricio</h1>
            <p>Desarrollador Web | Apps</p>
        </div>
    );
}

export default Cover;
