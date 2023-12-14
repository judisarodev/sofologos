import React, { useContext } from "react";
import { JwtContext } from "../../context/JwtProvider";
import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";

const UnauthorizeBanner = () => {
    const { jwt } = useContext(JwtContext); 
    
    return(
        <div>
            {!jwt && <div className="d-flex m-4">
                <MdAdminPanelSettings size={20}/>
                <p> No te has autenticado como administrado aún, ve a 
                    <Link to={'/login'}> iniciar sesión </Link>  
                    para obtener permisos </p>
            </div>}
        </div>
    );
}

export { UnauthorizeBanner }; 