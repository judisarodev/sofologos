import React, { useState } from "react";
import { Form, Input } from "../../components/form";
import { ViewContainer } from "../../components/view_container";

const SingIn = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        console.log(username, password);
    }

    return(
        <ViewContainer>
            <Form textButton={'Iniciar sesión'} action={login} title={'Ingresa con tus credenciales'}>
                <Input label={'Nombre de usuario'} type={'text'} placeholder={'usuario'} setInfo={setUsername}/>
                <Input label={'Constraseña'} type={'password'} placeholder={'constraseña'} setInfo={setPassword}/>
            </Form>
        </ViewContainer>
    )
}

export { SingIn }; 