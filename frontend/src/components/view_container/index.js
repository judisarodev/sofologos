import React from "react";

const ViewContainer = ({ children }) => {
    return(
        <div style={{ 'minHeight': '100vh'}}>
            { children }
        </div>
    );
}

export { ViewContainer }; 