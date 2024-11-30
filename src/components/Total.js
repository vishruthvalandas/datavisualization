import { useState, useMemo } from "react";
import Topbar from "./Topbar/Topbar";
import PieChart from "./Piechart/Piechart";
import { Data } from "./Piechart/Data";
import { CategoryScale, Tooltip, Legend } from "chart.js/auto";
import Chart from "chart.js/auto";
import LineChart1 from "./Linechart/LineChart1";
import DataView from "./DataViews/DataView";
import Scatterplot from "./ScatterPlot/Scatterplot";
import NewTotal from "./NewTotal";
import Data1 from "../csvjson.json";
import { calculateNullValues } from "./Transvere";
import useGenerateRandomColor from "./useGenerateRandomColor";
import Bar from "./Bar/BarChart";
import Radar1 from "./Radar/Radar1";
import Color from "color";
import Polarchart from "./polar/Polarchart";

Chart.register(Tooltip, Legend, CategoryScale);
function Total() {
  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  };
  const nullValues = calculateNullValues();
  const chartData = useMemo(() => {
    const labels = Object.keys(nullValues["Time"]);
    const data = Object.values(nullValues["Time"]);
    return {
      labels,
      datasets: [
        {
          label: "Outdoor Temperature",
          data,
          backgroundColor: labels.map(() => generateRandomColor()),
          borderColor: "white",
          borderWidth: 2,
        },
      ],
    };
  }, [Object.keys(nullValues["Time"])]);

  const label1 = Object.keys(nullValues["Year"]);
  const data1 = Object.values(nullValues["Year"]);

  console.log(Object.values(nullValues["Time1"]));

  return (
    <div>
      <div class="row w-100 text-center" style={{ width: "100vh" }}>
        <div class="col" style={{ marginLeft: "50px" }}>
          <div class="w-100">
            <Topbar />
          </div>
          <div
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div class="container">
              <div style={{ marginBottom: "10px" }}>
                <DataView NullValues={nullValues["nullCounts"]} />
              </div>

              <div class="row" style={{ marginBottom: "20px" }}>
                <div class="col-sm-6">
                  <div class="card" style={{
                        height: "745px",
                        backgroundColor: Color("#cccccc").alpha(0.2).string(),
                      }}>
                    <div
                      class="card-body"
                      
                    >
                      <PieChart chartData={chartData} />
                    </div>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="card" style={{
                        backgroundColor: Color("#cccccc").alpha(0.2).string(),
                        height: "350px",
                      }}>
                    <div
                      class="card-body"
                    >
                      <Bar labels={label1} data1={data1} />
                      
                      
                    </div>
                  </div>

                  <div class="card" style={{ marginTop: "40px",backgroundColor: Color("#cccccc").alpha(0.2).string(),
                        height: "350px",}}>
                    <div
                      class="card-body"
                      
                    >
                      <Radar1 labels={label1} data1={data1} />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" style={{ marginBottom: "20px" }}>
                <div class="col-sm-6">
                  <div class="card" style={{
                        backgroundColor: Color("#cccccc").alpha(0.2).string(),

                      }}>
                    <div
                      class="card-body"
        
                    >
                      <Scatterplot data={Object.values(nullValues["Time1"])} />
                    </div>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="card" style={{
                        backgroundColor: Color("#cccccc").alpha(0.2).string(),
                        height: "390px",
                      }}>
                    <div
                      class="card-body"
                      
                    >
                      <Polarchart label={Object.keys(nullValues['Year1'])} data={Object.values(nullValues["Year1"])}/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" style={{ marginBottom: "20px" }}>
                <div class="col">
                  <div class="card" style={{
                        backgroundColor: Color("#cccccc").alpha(0.2).string(),

                      }}>
                    <div
                      class="card-body"
                      style={{display: "block",
                        marginLeft: "auto",
                        marginRight: "auto"}}
        
                    >
                      <NewTotal/>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
          
        </div>
        {/* <div class="col" style={{marginLeft:"200px"}}>
          <NewTotal/>
        </div> */}
      </div>
      
    </div>
  );
}
export default Total;
