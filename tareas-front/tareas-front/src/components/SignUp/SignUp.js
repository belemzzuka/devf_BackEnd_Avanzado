import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from '../../components/Button';
import TextInput from "../../components/TextInput";

import { signUpRequest } from '../../api';

function SignUp(){
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate();
        
    const makeSignUp = () => {
        signUpRequest({ name, email, password })
        .then((res) => {
            const user = res.data;
            navigate("/auth/login");
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <div>
            <h2 style={{color:"white"}}>Registro ✏️</h2>
            <div className="auth-view__input-container">
            <TextInput 
                    value={name} 
                    type="text" 
                    placeholder="Ingresa tu nombre de usuario"
                    onChange={(e) => {setName(e.target.value)}} />
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
            <Button onClick={makeSignUp}>Regístrate</Button>
            <Link style={{color:"white"}} to="/auth/login">Ya tienes cuenta? Inicia Sesión</Link>
        </div>
    )
}

export default SignUp;