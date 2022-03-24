import React from 'react';
import './Task.css';

function Task({text, onDelete}){

    return (
        <div className="task">
              <p>{text}</p>
              <span className="task__delete" onClick={ onDelete } >X</span>
            </div>
    )
}

export default Task;