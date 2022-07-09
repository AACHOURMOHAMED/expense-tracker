import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (data) => (
  <li>
    <Card className="expense-item">
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <ExpenseDate date={data.date} />
      <div className="expense-item__description">
        {/* eslint-disable-next-line react/destructuring-assignment */}
        <h2>{data.title}</h2>
        <div className="expense-item__price">
          $
          {/* eslint-disable-next-line react/destructuring-assignment */}
          {data.amount}
        </div>
      </div>
    </Card>
  </li>
);

export default ExpenseItem;
