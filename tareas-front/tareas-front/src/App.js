import './App.css';
import { fetchTasks } from './api';
import React, { useState, useEffect } from 'react';

function App() {
  const [value, setValue] = useState("");
  //console.log("App se renderiza");
  //console.log(value)
  const [tasks, setTasks] = useState([]);
  console.log(tasks)

  useEffect(() => {
    fetchTasks()
    .then((res) => {
      setTasks(res.data)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  const addTask = () => {
    console.log("Agrega la tarea", value)
    setTasks(tasks.concat({ //diferencia entre push y concat: Concat crea una copia exacta y la deja en el elemento, push devuelve el length del array.
      _id: "6233f2c42bff33495cf6c02a" + Math.floor(Math.random() * 10),
      text: value,
    }))
  }

  return (
    <div className="app">
      <header className="app-header">
      <div className="task-input__container">
        <div className="task-input">
          <input 
            type="text" 
            className="task-input__text"
            value={value}
            placeholder = "Ingresa la tarea aquí"
            onChange={(event) => {
              setValue(event.target.value)
            }} />
        </div>
          <button 
            onClick={ addTask } 
            className="task-input__btn">
              Ingresar tarea
          </button>
      </div>

        {tasks.map((task) => {
          return (
            <div key={task._id} className="task">
              <p>{task.text}</p>
            </div>
          )
        })}
        
      </header>
    </div>
  );
}

export default App;
