import React, { createContext, useState } from "react";

const JwtContext = createContext();

const JwtProvider = ({ children }) => {
    const [jwt, setJwt] = useState(null);

    return(
        <JwtContext.Provider value={{ jwt, setJwt }}>
            { children }
        </JwtContext.Provider>
    );
}

export { JwtProvider, JwtContext }; 