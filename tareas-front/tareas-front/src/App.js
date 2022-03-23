import './App.css';
import { fetchTasks, createTasks, deleteTasks } from './api';
import React, { useState, useEffect } from 'react';

function App() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [loader,setLoader] = useState(false); //agregar la palabra loading

  console.log(tasks)

  useEffect(() => {
    setLoader(true); //inicia como true para que veas que algo está cargando
    const timeoutId = setTimeout(() => {
      console.log("Este proceso pasa despues de 5 segundos")
      fetchTasks()
      .then((res) => {
        setTasks(res.data)
        setLoader(false) //lo apagas cuando ya desplegó el contenido
      })
      .catch((err) => {
        console.log(err)
      })
    }, 5000)

    return () => {
      clearTimeout(timeoutId) //este return se ejecuta hasta que 
    }

  }, [])

// ## OPCIONES PARA AGREGAR TAREA (POST)
//Opt1 - Bajar todas las tareas otra vez (si el backend no responde la tarea) (MENOS EFICIENTE)

//Opt2 - Agregar la tarea recien creada a la lista (MAS EFICIENTE)

//Opt3 - (PUNTO MEDIO DE EFICIENCIA)
  //1. Agregar la tarea a la lista local. (sin saber si la tarea se agrega de forma exitosa)
  //2. Hacer post y esperar respuesta
  //3. Dependiendo si exitoso ese fetch, actualizo la interfaz
    //a. Si el fetch es exitoso, agrego id.
    //b. Elimino el elemento.
  const addTask = () => {
    createTasks(taskText)
    .then((res) => {
      const createdTask = res.data;
      setTasks(tasks.concat(createdTask))
      setTaskText("")
    })
    .catch((err) => {
      console.log(err)
    })
    /*
    setTasks(tasks.concat({ //diferencia entre push y concat: Concat crea una copia exacta y la deja en el elemento, push devuelve el length del array.
      text: taskText,
    }))*/
  }

  // ## ELIMINAR TAREAS
  const deleteTask = (id) => {
    deleteTasks(id)
    .then((res) => {
      const updatedTasks = tasks.filter( task => task._id !== id )
      console.log("UPDATED TASKS", updatedTasks)
      setTasks(updatedTasks)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="app">
      <header className="app-header">
      <div className="task-input__container">
        <div className="task-input">
          <input 
            type="text" 
            className="task-input__text"
            value={taskText}
            placeholder = "Ingresa la tarea aquí"
            onChange={(event) => setTaskText(event.target.value)} />
        </div>
          <button 
            onClick={ () => { addTask() }
               } 
            className="task-input__btn">
              Ingresar tarea
          </button>
      </div>
        {loader && (<p style={{ color: 'white' }}>Loading ...</p>)}
        {tasks.map((task) => {
          return (
            <div key={task._id} className="task">
              <p>{task.text}</p>
              <span className="task__delete" onClick={ () => deleteTask(task._id) } >X</span>
            </div>
          )
        }).reverse()}
        
      </header>
    </div>
  );
}

export default App;
