import React from "react";
import './index.css';

const Footer = () => {
    return(
        <div className="footer d-flex flex-column justify-content-end p-2">
            <p>
                <span className="footer-text">Visita el proyecto en </span>
                <a className="footer-link" href="https://github.com/judisarodev/basic-calculator.git">GitHub</a>
            </p>
            <p>
                <span className="footer-text">No te pierdas mi </span>
                <a className="footer-link" href="https://github.com/judisarodev/sofologos">Portafolio</a>
            </p>
        </div>
    );
}

export { Footer }; 