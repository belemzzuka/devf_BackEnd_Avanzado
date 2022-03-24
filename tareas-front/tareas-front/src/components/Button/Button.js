import React from 'react';
import './Button.css'

function Button(props) {
    const { className, children, onClick } = props; //children es solo para los tags que tienen texto entre el tag, como button.
    //console.log({ props }) //los {} nos permiten ver el nombre de la variable

    return (
    <button 
        onClick={ onClick } 
        className={`btn ${className}`}>
        {children} 
    </button>
    )
}

export default Button;