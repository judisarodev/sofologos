import React from "react";
import { MdOutlineDownloading } from 'react-icons/md';
import './index.css';

const ErrorMessage = ({ text }) => {
    return(
        <div className="error-message">
            <p className="error-message__text">{text}</p>
            <MdOutlineDownloading size={100} color="gray" className="error-message__icon"/>
        </div>
    ); 
}

export { ErrorMessage }