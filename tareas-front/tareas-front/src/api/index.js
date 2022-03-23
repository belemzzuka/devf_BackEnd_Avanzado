import axios from 'axios';

export const fetchTasks = (token) => {
    return axios.get('http://localhost:5000/api/tareas', { 
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_MONGO_DB_TOKEN}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export const createTasks = (text) => {
    return axios.post('http://localhost:5000/api/tareas',{ 
        text: text
    }, {
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_MONGO_DB_TOKEN}`,
            'Content-Type': 'application/json'
        }
    })
}

export const deleteTasks = (id) => {
    return axios.delete(`http://localhost:5000/api/tareas/${id}`,{
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_MONGO_DB_TOKEN}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
