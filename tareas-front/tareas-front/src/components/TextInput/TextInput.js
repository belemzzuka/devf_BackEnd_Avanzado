import React from 'react';
import './TextInput.css';

function TextInput({ type, className, value, placeholder, onChange }) {
    return (
          <input 
            type={ type } 
            className={`text-input ${ className }`}
            value={ value }
            placeholder = { placeholder } 
            onChange={ onChange } />
    )
    
}

export default TextInput;