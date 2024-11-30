import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Data1 from '../../csvjson.json';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
}from 'chart.js'
ChartJS.register(ArcElement,Tooltip,Legend)
function BarChart(props) {
    const labels = props.labels;
    const data = {
      labels: labels,
      datasets: [{
        label: 'Data points',
        data: props.data1.map((x)=>{return x['Relative']}),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    };
    const options = {
      scales: {
        x: {
            title: {
                display: true,
                text: 'Year',
            },
            grid: {
              offset: true
            }
        },
        y: {
            title: {
                display: true,
                text: 'Relative Humidity',
            },
            beginAtZero: true,
        },
    },
        
    };

  
  return (
    <div className="chart-container d-flex justify-content-center align-items-center" style={{width: "80%", height: "290px"}} >
      <Bar
        data={data}
        options={options}
      />
    </div>
  );
}
export default BarChart;