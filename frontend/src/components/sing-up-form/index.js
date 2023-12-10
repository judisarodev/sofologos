import React, { useState } from "react";
import './index.css';

const SingUpForm = () => {
    const [email, setEmail] = useState("");

    const catchEmail = (e) => {
        setEmail(e.target.value);   
    }

    const submit = (e) => {
        e.preventDefault();
        fetch(
            'http://localhost:9090/follower/add/' + email,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).catch(error => {
            console.log(error);
        });
    }
    return(
        <div className="m-5">
            <div className="container--sing-up-form">
                <p className="sing-up-form__title">Nunca te pierdas una sola de nuestras publicaciones</p>
                <div className="form-group">
                    <form className="d-flex flex-column">
                        <label className="sing-up-form__label">Correo electrónico</label>
                        <input type="email" className="form-control" id="email" placeholder="email@mail.com" onChange={catchEmail}/>
                        <button className="btn btn-warning button--sumbit" onClick={submit}><p className="m-0 button--sumbit__text">ENVIAR</p></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export { SingUpForm };