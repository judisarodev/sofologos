import React, { useContext } from "react";
import { ViewContainer } from "../../components/view_container";
import { JwtContext } from "../../context/JwtProvider";


const AdminView = () => {
    const { jwt } = useContext(JwtContext); 

    return(
        <ViewContainer>
            { jwt }
        </ViewContainer>
    );
}

export { AdminView }; 