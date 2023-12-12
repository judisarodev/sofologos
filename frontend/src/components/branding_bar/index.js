import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { SingIn } from '../../views/sing_in_view/index';

const BrandingBar = () => {

    return(
        <div className='braning-bar d-flex justify-content-between'>
            <div className='d-flex flex-column'>
                <p className='branding-bar__title m-0'>SOFOLOGOS</p>
                <p className='branding-bar__subtitle m-0'>Blog de filosofía y literatura</p>
            </div>
            <div>
                <Link to={'/login'}>
                    <button className='branding-bar__login btn btn-primary'>
                        Iniciar sesión
                    </button>
                </Link>
            </div>
        </div>
    );
}

export { BrandingBar };