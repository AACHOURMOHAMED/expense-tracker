import "./ExpenseDate.css";

const ExpenseDate = (data) => {
  const month = data.date.toLocaleString("eu-US", { month: "long" });
  const day = data.date.toLocaleString("eu-US", { day: "2-digit" });
  const year = data.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__mounth">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
