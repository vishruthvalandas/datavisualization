import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import data1 from '../../csvjson.json';

export default function LineChart1(props) {
  const [newColumns, setNewColumns] = useState([]);

  
  const retrieve = () => {
    const year = props.selectedDate.getFullYear();
    const month = String(props.selectedDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(props.selectedDate.getDate()).padStart(2, '0');
    console.log(`${year}-${month}-${day}`);
    const updatedColumns = data1.filter((item) => {
     return item['Date']===`${year}-${month}-${day}`
    }).map((item)=>({
      column1: item[props.SelectedValue],
      column2: item[props.Another],
    }))
    
    setNewColumns(updatedColumns);
  };

  
  useEffect(() => {
    retrieve();
    
  }, [props.SelectedValue, props.Another,props.selectedDate]);

  
  const data = {
    labels: newColumns.map((item) => item['column2']),
    datasets: [
      {
        label: "Data Points",
        data: newColumns.map((item) => item['column1']),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
}
