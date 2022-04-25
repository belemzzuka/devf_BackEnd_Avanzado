import React from 'react';
import './TextInput.css';

function TextInput({ type, className, value, placeholder, onChange, autoComplete }) {
    return (
          <input 
            type={ type } 
            className={`text-input ${ className }`}
            value={ value }
            placeholder = { placeholder } 
            onChange={ onChange }
            autoComplete={ autoComplete } />
    )
    
}

export default TextInput;