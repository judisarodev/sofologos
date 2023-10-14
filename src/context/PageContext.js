import React, { useState } from "react";

const PageContext = React.createContext();

const PageProvider = ({ children }) => {

    const [ page, setPage ] = useState({
        HOME: true, 
        ABOUT_US: false,
        ADMIN: false
    });

    const setToHome = () => {
        setPage({
            HOME: true, 
            ABOUT_US: false,
            ADMIN: false
        });
    }

    const setToAboutUs = () => {
        setPage({
            HOME: false, 
            ABOUT_US: true,
            ADMIN: false
        });
    }

    const setToAdmin = () => {
        setPage({
            HOME: false, 
            ABOUT_US: false,
            ADMIN: true
        });
    }

    return(
        <PageContext.Provider value={{page, setToHome, setToAboutUs, setToAdmin}}>
            { children }
        </PageContext.Provider>
    );
}

export { PageContext, PageProvider }
