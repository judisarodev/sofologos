import React from "react";
import { BiErrorCircle } from 'react-icons/bi';
import './index.css';

const ErrorMessage = () => {
    return(
        <div className="error-message">
            <p className="error-message__text">En este momento no es posible visualizar la información</p>
            <p className="error-message__text">Por favor inténtalo más tarde</p>
            <BiErrorCircle size={100} color="gray" className="error-message__icon"/>
        </div>
    ); 
}

export { ErrorMessage }