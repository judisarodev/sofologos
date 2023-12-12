import React, { useContext, useState } from "react";
import { Form, Input, SubmitButton } from "../../components/form";
import { ViewContainer } from "../../components/view_container";
import { Link, useNavigate } from "react-router-dom";
import './index.css'; 
import { JwtContext } from "../../context/JwtProvider";

const SingIn = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [failed, setFailed] = useState(false);
    const { setJwt } = useContext(JwtContext);
    const navigate = useNavigate(); 

    const login = (e) => {
        e.preventDefault();
        fetch('http://localhost:9090/login/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
        .then((response) => {
            if(!response.ok){
                setFailed(true);
                throw new Error('Credenciales incorrectas');
            }
            return response.text();
        })
        .then(data => {
            setJwt(data);
            navigate('/admin'); 
        })
        .catch(error => {
            setFailed(true);
            console.log(error);
        }); 
    }

    return(
        <ViewContainer>
            {failed && <Failed />}
            <Form textButton={'Iniciar sesión'} title={'Ingresa con tus credenciales'}>
                <Input label={'Nombre de usuario'} type={'text'} placeholder={'usuario'} setInfo={setUsername}/>
                <Input label={'Constraseña'} type={'password'} placeholder={'constraseña'} setInfo={setPassword}/>
                <SubmitButton action={login} text={'INGRESAR'}/>
                
                <Link to={'/admin'}> 
                    <p className="login__go-to-admin">Quiero conocer la interaz de administrador</p>
                </Link>
            </Form>
        </ViewContainer>
    )
}

const Failed = () => {
    return(
        <div>
            No fue posible iniciar seción
        </div>
    );
}

export { SingIn }; 