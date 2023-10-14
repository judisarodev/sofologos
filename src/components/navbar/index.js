import React, { useContext } from 'react';
import './index.css';
import { PageContext } from '../../context/PageContext';

const Navbar = () => {

    const { page, setToHome, setToAboutUs } = useContext(PageContext);

    return(
        <nav className="navbar">
            <div className='container d-flex flex-row gap-5 justify-content-md-start justify-content-center'>
                <p className="navbar__item m-0 align-self-center" 
                style={{color: page.HOME ? '#C5CAE9' : '#FFFFFF'}} 
                onClick={setToHome}>INICIO</p>

                <p className="navbar__item m-0 align-self-center" 
                style={{color: page.ABOUT_US ? '#C5CAE9' : '#FFFFFF'}} 
                onClick={setToAboutUs}>SOBRE MI</p>
            </div>
        </nav>
    );
}

export { Navbar };