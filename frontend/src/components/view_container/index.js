import React from "react";

const ViewContainer = ({ children }) => {
    return(
        <div style={{ 'min-height': '100vh'}}>
            { children }
        </div>
    );
}

export { ViewContainer }; 