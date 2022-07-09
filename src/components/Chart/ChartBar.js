import React from 'react';
import './ChartBar.css';

const ChartBar = (data) => {
  let barFillHeight = '0%';

  // eslint-disable-next-line react/destructuring-assignment
  if (data.maxValue > 0) {
    // eslint-disable-next-line react/destructuring-assignment
    barFillHeight = `${Math.round((data.value / data.maxValue) * 100)}%`;
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        />
      </div>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <div className="chart-bar__label">{data.label}</div>
    </div>
  );
};

export default ChartBar;
