import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (data) => {
  const [isEditing, setIsEditing] = useState();

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // eslint-disable-next-line react/destructuring-assignment
    data.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {/* eslint-disable-next-line react/button-has-type */}
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {/* eslint-disable-next-line max-len */}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
