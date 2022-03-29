import axios from 'axios';

export const loginRequest = (email, password) => {
    return axios.post('http://localhost:5000/api/users/login', {
        email: email,
        password: password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const signUpRequest = ({ name, email, password }) => {
    return axios.post('http://localhost:5000/api/users', {
        name: name,
        email: email,
        password: password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const fetchTasks = (token) => {
    return axios.get('http://localhost:5000/api/tareas', { 
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export const createTasks = (text, token) => {
    return axios.post('http://localhost:5000/api/tareas',{ 
        text: text
    }, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
}

export const deleteTasks = (id, token) => {
    return axios.delete(`http://localhost:5000/api/tareas/${id}`,{
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
