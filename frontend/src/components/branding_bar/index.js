import React from 'react';
import './index.css';

const BrandingBar = () => {

    return(
        <div className='braning-bar'>
            <div className='container d-flex flex-column p-3'>
            <p className='branding-bar__title m-0'>SOFOLOGOS</p>
            <p className='branding-bar__subtitle m-0'>Blog de filosofía y literatura</p>
        </div>
        </div>
    );
}

export { BrandingBar };