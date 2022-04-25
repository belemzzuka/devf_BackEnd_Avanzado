import axios from 'axios';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDRkOGEyMmVlNzIzNzVhNmJjZTJmZiIsImlhdCI6MTY0ODY5NjQxNywiZXhwIjoxNjUxMjg4NDE3fQ.Hd2MXnZpQbyphM3RuyJ5D0EaYiGYWxml6bGBnVdbjoc";

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

export const fetchExpenses = (token) => {
    return axios.get('http://localhost:5000/api/expenses', { 
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}

export const createExpenses = (description, amount) => {
    return axios.post('http://localhost:5000/api/expenses',{ 
        description: description,
        amount: amount
    }, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
}

export const deleteExpenses = (id, token) => {
    return axios.delete(`http://localhost:5000/api/expenses/${id}`,{
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}
