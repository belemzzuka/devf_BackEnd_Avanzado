import './App.css';
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState("");
  console.log("App se renderiza");

  return (
    <div className="app">
      <header className="app-header">
      <div className="task-input__container">
        <div className="task-input">
          <input 
            type="text" 
            className="task-input__text"
            value={value} 
            onChange={(event) => {
              setValue(event.target.value)
            }} />
        </div>
          <button 
            onClick={ () => console.log("Agregar tarea") } 
            className="task-input__btn">
              Ingresar tarea
          </button>
      </div>

        <div className="task">
          <p>Esta es una tarea</p>
        </div>
        <div className="task">
          <p>Esta es una tarea</p>
        </div>
        <div className="task">
          <p>Esta es una tarea</p>
        </div>
        
      </header>
    </div>
  );
}

export default App;
