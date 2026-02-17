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
    <div className="bg-white p-6 ml-10 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">
        Disbursed vs Repayments
      </h2>

      
        {/* YEARLY */}
        <span className="text-sm ml-[700]  text-gray-500 cursor-pointer">
          Yearly ▾
        </span>

      <Line data={data} options={options} />
    </div>
  );
};

export default DisbursedChart;
