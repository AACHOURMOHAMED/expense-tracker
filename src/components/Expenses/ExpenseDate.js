import './ExpenseDate.css';

const ExpenseDate = (data) => {
  // eslint-disable-next-line react/destructuring-assignment
  const month = data.date.toLocaleString('eu-US', { month: 'long' });
  // eslint-disable-next-line react/destructuring-assignment
  const day = data.date.toLocaleString('eu-US', { day: '2-digit' });
  // eslint-disable-next-line react/destructuring-assignment
  const year = data.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__mounth">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
