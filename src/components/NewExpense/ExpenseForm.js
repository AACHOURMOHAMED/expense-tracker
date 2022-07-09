import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (data) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    // eslint-disable-next-line react/destructuring-assignment
    data.onSaveExpenseData(expenseData);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          {/* eslint-disable-next-line react/destructuring-assignment */}
          <button type="button" onClick={data.onCancle}>Cancle</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>

    </>
  );
};

export default ExpenseForm;
