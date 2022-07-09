import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (data) => {
  // eslint-disable-next-line react/destructuring-assignment
  const dataPointValues = data.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {data.dataPoints.map(
        ((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        )),
      )}
    </div>
  );
};

export default Chart;
