import React from 'react';
import './index.css';

const Navbar = ({ page, setPage }) => {

    const onClickHome = (e) => {
        setPage(
            {
                HOME: true,
                ABOUT_US: false,
                USER: page.USER
            }
        );
    }

    const onClickAboutUs = (e) => {
        setPage(
            {
                HOME: false,
                ABOUT_US: true,
                USER: page.USER
            }
        );
    }

    return(
        <nav class="navbar">
            <div className='container d-flex flex-row gap-5 justify-content-md-start justify-content-center'>
                <p className="navbar__item m-0 align-self-center" 
                style={{color: page.HOME ? '#C5CAE9' : '#FFFFFF'}} 
                onClick={onClickHome}>INICIO</p>

                <p className="navbar__item m-0 align-self-center" 
                style={{color: page.ABOUT_US ? '#C5CAE9' : '#FFFFFF'}} 
                onClick={onClickAboutUs}>SOBRE MI</p>
            </div>
        </nav>
    );
}

export { Navbar };