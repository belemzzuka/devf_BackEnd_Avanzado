import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import TaskList from './scenes/TaskList/TaskList';
import AuthView from './scenes/AuthView/AuthView';
import './App.css';

import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  //const [ isUser, setIsUser ] = useState(null); //dependiendo de si hay usuario o no, cambiamos la interfaz. Esto se llama estado global.
  const [ token, setToken ] = useState(null);
  const [ userName, setUserName ] = useState(null)
  console.log("Token desde App:", token);

  return (
    <div className="app">
      <header className="app-header">
        <Routes>
          <Route path="/" element={<TaskList userName={userName} token={token} />} />
          <Route path="auth" element={<AuthView />} >
            <Route index element={<Login handleToken={setToken} handleUserName={setUserName}/>} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
