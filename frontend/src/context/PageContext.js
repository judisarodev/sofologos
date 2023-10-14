import React, { useState } from "react";

const PageContext = React.createContext();

const PageProvider = ({ children }) => {

    const [ page, setPage ] = useState({
        HOME: true, 
        ABOUT_US: false,
        POST: false,
        ADMIN: false
    });

    const setToHome = () => {
        setPage({
            HOME: true, 
            ABOUT_US: false,
            POST: false,
            ADMIN: false
        });
    }

    const setToAboutUs = () => {
        setPage({
            HOME: false, 
            ABOUT_US: true,
            POST: false,
            ADMIN: false
        });
    }

    const setToAdmin = () => {
        setPage({
            HOME: false, 
            ABOUT_US: false,
            POST: false,
            ADMIN: true
        });
    }

    const setToPost = (id) => {
        setPage({
            HOME: false, 
            ABOUT_US: false,
            POST: true,
            ADMIN: true
        });
    }

    return(
        <PageContext.Provider value={{page, setToHome, setToAboutUs, setToAdmin, setToPost}}>
            { children }
        </PageContext.Provider>
    );
}

export { PageContext, PageProvider }
