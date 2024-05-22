import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, Title);

const Test = ({ response }) => {
  const data = {
    labels: ['affected', 'fresh'],
    datasets: [{
      data: [Math.round(parseInt(response.data.confidence)), ],
      backgroundColor: ['rgb(210, 69, 69)', 'rgb(65, 176, 110)'],
      borderWidth: 2,
      radius:'40%'
    }]
  };

  return (
    <div>
      <h2>Results of Disease Prediction system</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default Test;
