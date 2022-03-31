import React from 'react';
import './Task.css';
import { Trash2 } from 'react-feather';

function Task({text, onDelete}){

    return (
        <div className="task">
              <p>{text}</p>
              <span className="task__delete" onClick={ onDelete }> <Trash2 /> </span>
            </div>
    )
}

export default Task;