import { PolarArea } from "react-chartjs-2";

function Polarchart(props){
    const data = {
        labels: props.label,
        datasets: [{
          label: 'Dataset',
          data: props.data,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
          ]
        }]
      };
      const options = {
        scale: {
            ticks: {
                display: false, // Disable ticks if you want only labels
            },
            pointLabels: {
                display: true, // Make sure labels are displayed
                font: {
                    size: 14,
                },
                padding: 20, // Optional: Adjust the padding to move the labels closer/further from the center
                rotation: 0, // Optional: Rotate the labels, if you want them at a different angle
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    };
      console.log(props.data)
    return(
        <div style={{width:"350px",height:"350px"}}>
        <PolarArea data={data} options={options}/>
        </div>

    )
}
export default Polarchart;