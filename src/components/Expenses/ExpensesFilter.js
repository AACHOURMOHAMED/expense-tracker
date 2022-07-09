import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (data) => {
  const filterChangeHandler = (e) => {
    // eslint-disable-next-line react/destructuring-assignment
    data.onChangeFilter(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>Filter by year</label>
        {/*  eslint-disable-next-line react/destructuring-assignment */}
        <select value={data.selected} onChange={filterChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
