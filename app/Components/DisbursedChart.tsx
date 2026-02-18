'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart parts
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const DisbursedChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],

    datasets: [
      {
        label: 'Disbursed',
        data: [350, 330, 450, 380, 300, 200, 340],
        borderColor: '#2563eb',
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: 'Repayments',
        data: [300, 420, 380, 260, 150, 230, 280],
        borderColor: '#9ca3af',
        borderDash: [6, 6],
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
<div className="bg-white w-full max-w-5xl mx-auto p-4 sm:p-6 rounded-xl shadow">

  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
    <h2 className="text-base sm:text-lg font-semibold">
      Disbursed vs Repayments
    </h2>

    {/* Dropdown */}
    <span className="text-sm text-gray-500 cursor-pointer self-start sm:self-auto">
      Yearly ▾
    </span>
  </div>

  {/* Chart */}
  <div className="w-full overflow-x-auto">
    <Line data={data} options={options} />
  </div>

</div>

  );
};

export default DisbursedChart;
