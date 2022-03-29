import React, { useState } from "react";
import Button from '../../components/Button';
import TextInput from "../../components/TextInput";
import { loginRequest } from '../../api';
import './AuthView.css';
import { useNavigate } from 'react-router-dom'

function AuthView({ handleToken, handleUserName }){
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigate = useNavigate();
    
    const makeLogin = () => {
        // TODO: Hacer login en API✅
        loginRequest(email, password)
        .then((res) => {
            handleToken(res.data.token)
            handleUserName(res.data.name)
            navigate("/")
        })
        .catch((err) => {
            console.log(err)
        })
        // if success
        //setToken(token) // TODO: Hacer que esto jale ✅
    }

    return(
        <div className='auth-view'>
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
                <Button onClick={makeLogin}>Iniciar Sesión</Button>
            </div>
        </div>
    )
}

export default AuthView;