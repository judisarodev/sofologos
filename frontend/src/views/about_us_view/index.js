import React from "react";
import './index.css';
import { SingUpForm } from "../../components/sing-up-form";
import { ViewContainer } from "../../components/view_container";

const AboutUsView = () => {
    return(
        <ViewContainer>
            <div className="row justify-content-center m-3">
                <div className="col-6">
                    <p className="about-us__title">¿QUIÉN ESCRIBE ESTE BLOG?</p>
                    <p className="about-us__text">Hola, mi nombre es Juan Diego Sánchez Rodríguez. Quise construir este espacio porque me apacionan las humanidades. <br/><br/>
                        Ahora, un par de datos sobre mi. Mi libro favorito es El nombre de la rosa, de Umberto Eco. Soy fiel seguidor de la saga de Harry Potter. <br/><br/>
                        Disfruto todo tipo de música, en especial la que habla de amor. Me encanta el inglés. También, soy colombiano y estoy orgulloso de serlo. <br/><br/>
                        A través de estos   posts quiero compartir mis pensamientos y reflexiones. Finalmente, este blog hace parte de mi portafolio de proyectos de desarrollo de software. Soy estudiante de ingeniería de sistemas y ciencias de la computación.</p>
                </div>
            </div>
            <SingUpForm /> 
        </ViewContainer>
    );
}

export { AboutUsView }; 