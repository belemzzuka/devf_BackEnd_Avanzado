import React from "react";
import './AuthView.css';
import { Outlet } from 'react-router-dom'

function AuthView({ handleToken, handleUserName }){
    return(
        <div className='auth-view'>
        <Outlet />
        </div>
    )
}

export default AuthView;