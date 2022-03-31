import React, { useState, useEffect } from "react";
import { fetchTasks, createTasks, deleteTasks } from '../../api';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import Task from '../../components/Task';
import './TaskList.css';
import { useNavigate } from 'react-router-dom'

function TaskList({userName, token}) { //TODO: Recibir el token como props
const [taskText, setTaskText] = useState("");
const [tasks, setTasks] = useState([]);
const [loader,setLoader] = useState(false); //agregar la palabra loading
const  navigate = useNavigate(); //Hook que te da acceso a la funcionalidad interna de React-Router

useEffect(() => {
  if (!token){
    navigate("/auth"); //cuando no exista el token, va a redirigir al inicio de sesión
  }
}, [token])

useEffect(() => {
    setLoader(true); //inicia como true para que veas que algo está cargando
    fetchTasks(token) // TODO: Mandar token
      .then((res) => {
        setTasks(res.data)
        setLoader(false) //lo apagas cuando ya desplegó el contenido
      })
      .catch((err) => {
        console.log(err)
      })
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
    createTasks(taskText, token) // TODO: Mandar token
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
    deleteTasks(id, token)
    .then((res) => {
      const updatedTasks = tasks.filter( task => task._id !== id )
      setTasks(updatedTasks)
    })
    .catch((err) => {
      console.log(err)
    })
  }


    return(
    <div className='task-list'>
      <h2 style={{color:'white'}}>Bienvenidx {userName}</h2>
        <div className="task-input__container">
            <TextInput type="text" value={taskText} placeholder="Ingresa una tarea" onChange={(event) => setTaskText(event.target.value)}/>
            <Button className="task-input__btn" onClick={addTask}>Ingresar Tarea</Button>
        </div>
        {loader && (<p style={{ color: 'white' }}>Loading ...</p>)}
        {tasks.map((task) => <Task key={task._id} text={task.text} onDelete={ () => deleteTask(task._id) }/>).reverse()}
    </div>
    )
}

export default TaskList;