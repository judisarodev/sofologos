import React from "react";
import './index.css';

const SingUpForm = () => {
    const submit = (e) => {
        e.preventDefault();
    }
    return(
        <div className="m-5">
            <div className="container--sing-up-form">
                <p className="sing-up-form__title">Nunca te pierdas una sola de nuestras publicaciones</p>
                <div class="form-group">
                    <form className="d-flex flex-column">
                        <label className="sing-up-form__label" for="email">Correo electrónico</label>
                        <input type="email" class="form-control" id="email" placeholder="email@mail.com" />
                        <button className="btn btn-warning button--sumbit" onClick={submit}><p className="m-0 button--sumbit__text">ENVIAR</p></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export { SingUpForm };