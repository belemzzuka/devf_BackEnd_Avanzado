//MVC - CONTROLLER
const asyncHandler = require('express-async-handler'); //inicializar el async handler

const Expense = require('../models/expenseModel')

// ### GET REQUEST ###
// Como vamos a trabajar con mongoose y devuelve promesas, los request deben ir con async y await
const getExpenses = asyncHandler (async(req, res) => {
    const expenses = await Expense.find({ user: req.user.id }) //devolver todas las tareas buscando el user ID
    res.status(200).json(expenses)
})

// ### POST REQUEST ###
const postExpenses = asyncHandler (async(req, res) => {
    if(!req.body.description && !req.body.amount){
        res.status(400)
        throw new Error('It is mandatory to add an expense')
    }
    const expense = await Expense.create({
        description: req.body.description,
        amount: req.body.amount,
        user: req.user.id
    })
    res.status(200).json(expense)
})

// ### DELETE REQUEST ###
const deleteExpenses = asyncHandler (async(req, res) => {
    const expense = await Expense.findById(req.params.id)
    if(!expense){
        res.status(400)
        throw new Error('Expense not found')
    }

    if(expense.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('Unauthorized Access')
    }

    await expense.remove()
    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getExpenses, //exportar getTareas
    postExpenses,
    deleteExpenses
}