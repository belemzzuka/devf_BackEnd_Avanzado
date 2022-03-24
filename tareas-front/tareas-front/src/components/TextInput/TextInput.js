import React from 'react';
import './TextInput.css';

function TextInput(props) {
    const { type, className, value, placeholder, onChange } = props;
    return (
        <input 
            type={`${type}`} 
            className={`input ${className}`}
            value={`${value}`}
            placeholder = {`${placeholder}`} 
            onChange={ onChange } />
    )
    
}

export default TextInput;