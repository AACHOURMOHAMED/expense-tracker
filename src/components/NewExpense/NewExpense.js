import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = (data) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
       data.onAddExpense(expenseData)
    }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense