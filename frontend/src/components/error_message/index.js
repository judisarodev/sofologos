import React from "react";
import { MdOutlineDownloading } from 'react-icons/md';
import './index.css';

const ErrorMessage = ({ text }) => {
    return(
        <div className="error-message">
            <MdOutlineDownloading size={100} color="gray" className="error-message__icon"/>
            <p className="error-message__text">{text}</p>
        </div>
    ); 
}

export { ErrorMessage }