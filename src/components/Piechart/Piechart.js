import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import Data1 from '../../csvjson.json';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
}from 'chart.js'
ChartJS.register(ArcElement,Tooltip,Legend)
function PieChart({ chartData }) {
  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right',
        },
        
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Time',
            },
        },
        y: {
            title: {
                display: true,
                text: 'Temperature (°C)',
            },
            beginAtZero: true,
        },
    },
};

  
  return (
    <div className="chart-container d-flex justify-content-center align-items-center" style={{width: "80%", height: "80%"}} >
      <Pie
        data={chartData}
        options={options}
      />
    </div>
  );
}
export default PieChart;