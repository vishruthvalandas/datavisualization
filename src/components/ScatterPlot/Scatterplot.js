import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

function Scatterplot(props) {
  function getColorByIndex(index) {
    const colors = [
      "rgb(255, 99, 132)",   
      "rgb(255, 153, 51)",    
      "rgb(255, 87, 34)",     
      "rgb(255, 204, 153)",   
      "rgb(244, 143, 60)",    
      "rgb(255, 111, 0)",     
      "rgb(0, 183, 255)",     
      "rgb(0, 148, 255)",     
      "rgb(0, 102, 204)",     
      "rgb(0, 61, 122)",      
      "rgb(255, 235, 238)",   
      "rgb(173, 216, 230)",   
      "rgb(0, 138, 255)",     
      "rgb(68, 138, 255)",    
      "rgb(0, 78, 155)",      
      "rgb(51, 255, 204)",    
      "rgb(34, 34, 255)",      
      "rgb(0, 191, 255)",     
      "rgb(0, 102, 255)",    
      "rgb(230, 230, 255)",   
      "rgb(204, 255, 255)",   
      "rgb(255, 179, 71)",    
      "rgb(255, 105, 180)",   
      "rgb(135, 206, 235)",   
    ];
    
    
  
    
    return colors[index % colors.length];
  }
  
  

  
  // const scatterData = props.data.map((item,index) => ({
  //   x: item["Relative"],
  //   y: item["winddir"],
  //   backgroundColor: getColorByValue(index) // Assign color based on "Relative"
  // }));

  
  const data = {
    datasets:  props.data.map((item, index) => ({
      label: `${index}`, // Label for the dataset
      data: [{ x: item["Relative"], y: item["winddir"] }], // Single point as a dataset
      pointBackgroundColor: getColorByIndex(index), // Assign color based on index
      pointRadius: 7 // Adjust the point size
    }))
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: true
      },
      legend: {
        
        display: true,
        position: "top",
        labels: {
          
          font: {
            size: 15 // Adjust legend label font size
          },
          usePointStyle: true,
          boxWidth: 10,
          boxHeight: 10
        }
      }
    },
    scales: {
      x: {
        type: "linear",
        title: {
          display: true,
          text: "Relative"
        },
        ticks: {
          stepSize: 10000 // Adjust as needed
        }
      },
      y: {
        type: "linear",
        title: {
          display: true,
          text: "Wind Direction"
        },
        ticks: {
          stepSize: 10000 // Adjust as needed
        }
      }
    }
  };

  return <div style={{height:"350px",width:"500px"}}>
    <Scatter options={options} data={data} />
    </div>;
}

export default Scatterplot;
