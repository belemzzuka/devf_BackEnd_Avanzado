import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from '../../components/Button';
import TextInput from "../../components/TextInput";

import { loginRequest } from '../../api';

function Login({ handleToken, handleUserName }){
const [ email, setEmail ] = useState('');
const [ password, setPassword ] = useState('');
const navigate = useNavigate();
    
const makeLogin = () => {
// TODO: Hacer login en API✅
    loginRequest(email, password)
        .then((res) => {
            handleToken(res.data.token)
            handleUserName(res.data.name)
            navigate("/") //despues de que actualiza el token me voy a redirigir a la raiz
        })
        .catch((err) => {
            console.log(err)
        })
        // if success
        //setToken(token) // TODO: Hacer que esto jale ✅
    }


    return(
        <div>
            <h2 style={{color:"white"}}>Iniciar Sesión</h2>
            <div className="auth-view__input-container">
                <TextInput 
                    value={email} 
                    type="email" 
                    placeholder="Ingresa tu correo"
                    onChange={(e) => {setEmail(e.target.value)}} />
                <TextInput 
                    value={password} 
                    type="password" 
                    placeholder="Ingresa tu contraseña"
                    onChange={(e) => {setPassword(e.target.value)}} />
            </div>
            <Button onClick={makeLogin}>Iniciar Sesión</Button>
            <Link style={{color:"white"}} to="/auth/signup">No tienes cuenta? Regístrate aquí</Link>
        </div>
    )
}

export default Login;