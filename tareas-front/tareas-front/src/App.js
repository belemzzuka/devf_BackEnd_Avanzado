import React, { useState } from 'react';
import TaskList from './scenes/TaskList/TaskList';
import AuthView from './scenes/AuthView/AuthView';
import './App.css';

function App() {
  const [ isUser, setIsUser ] = useState(null); //dependiendo de si hay usuario o no, cambiamos la interfaz

  return (
    <div className="app">
      <header className="app-header">
        {isUser ? <TaskList user={isUser}/> : <AuthView authUser={setIsUser}/>}
      </header>
    </div>
  );
}

export default App;
