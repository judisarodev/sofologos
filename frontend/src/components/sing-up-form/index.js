import React, { useState } from "react";
import './index.css';
import { Form, Input, SubmitButton } from "../form";

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
        <Form textButton={'Enviar'} action={submit} title={'No te pierdas una sola publicación'}>
            <Input label={'Correo electronico'} type={'email'} placeholder={'email@mail.com'} setInfo={setEmail}/>
            <SubmitButton action={catchEmail} text={'ENVIAR'} />
        </Form>
    );
}

export { SingUpForm };