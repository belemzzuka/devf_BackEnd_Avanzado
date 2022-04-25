import React, { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput';
import Button from './components/Button';
import { createExpenses } from './api'

function App() {
  const [ expenseDescription, setExpenseDescription ] = useState("");
  const [ expenseAmount, setExpenseAmount ] = useState("");
  const [ expenseType, setExpenseType ] = useState("");
  console.log(expenseDescription, expenseAmount, expenseType)

  const handleExpenseTypeChange = (event) => {
    return setExpenseType(event.target.value)
  }

  const addExpense = () => {
    createExpenses(expenseDescription, expenseAmount) // TODO: Mandar token ** QUITÉ EL TOKEN
    .then((res) => {
      //const createdExpense = res.data;
      setExpenseDescription("");
      setExpenseAmount("");
      ('input[type="radio":checked]').checked = false;
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="app">
      <header className="app-header">
      <div className='expense-input'>
      <h1 style={{color:'white', textAlign:'left'}}>Expenses App</h1>
        <fieldset>
          <legend>Add New Expense</legend>
          <div className="expense-input__radio-container">
            <label className="expense-input__radio">
              <input type="radio" name="expense_type" value="income" onChange={handleExpenseTypeChange}/>Income
            </label>
            <label className="expense-input__radio">
              <input type="radio" name="expense_type" value="outcome" onChange={handleExpenseTypeChange}/>Outcome
            </label>
          </div>
          <div className='expense-input__container'>
            <span className='expense-input__label'> Description:</span>
            <TextInput
              type="text"
              value={expenseDescription}
              placeholder={"What was it?"}
              onChange={(event) => setExpenseDescription(event.target.value)} />
            <span className='expense-input__label'> Amount:</span>
            <TextInput
              type="number"
              value={expenseAmount}
              placeholder={"How much was it?"}
              onChange={(event) => setExpenseAmount(event.target.value)} />
            <Button className="expense-input__btn" onClick={addExpense}>Add Expense</Button>
          </div>
        </fieldset>
      </div>
      </header>
    </div>
  );
}

export default App;
