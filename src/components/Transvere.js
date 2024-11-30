import Data1 from "../csvjson.json";

export const calculateNullValues = () => {
  const TotalValues = {};

  TotalValues["nullCounts"] = {};
  TotalValues["Time"] = {};
  TotalValues["Year"] = {};
  TotalValues["Time1"] = {};
  TotalValues["Year1"] = {};
  Object.keys(Data1[0]).forEach((key) => {
    TotalValues["nullCounts"][key] = 0;
  });

  Data1.forEach((entry) => {
    const tempValue = parseFloat(entry["Outdoor Temperature"]);
    const temp_humidity=parseFloat(entry["Relative Humidity"]);
    const winddirection=parseFloat(entry["Wind Direction - Resultant"]);
    const PM2=parseFloat(entry["PM2.5 - Local Conditions"]);
    if (!TotalValues["Year"].hasOwnProperty(entry['Date'].split('-')[0])) {
      TotalValues["Year"][entry['Date'].split('-')[0]] = { Relative: 0, Outdoor: 0 }; 
    }
    if (!isNaN(temp_humidity)) {
      TotalValues['Year'][entry['Date'].split('-')[0]]['Relative']+=temp_humidity
    }
    if(!isNaN(tempValue)){
      TotalValues['Year'][entry['Date'].split('-')[0]]['Outdoor']+=tempValue
    }

    if (!TotalValues["Time1"].hasOwnProperty(entry["Time"])) {
      TotalValues["Time1"][entry["Time"]] = { Relative: 0, winddir: 0 }; 
    }
    if (!isNaN(temp_humidity)) {
      TotalValues['Time1'][entry["Time"]]['Relative']+=temp_humidity
    }
    if(!isNaN(winddirection)){
      TotalValues['Time1'][entry["Time"]]['winddir']+=winddirection
    }
    if (TotalValues["Year1"].hasOwnProperty(entry['Date'].split('-')[0])) {
      if (!isNaN(PM2)) {
        TotalValues['Year1'][entry['Date'].split('-')[0]]+=PM2
      }
    }
    else{
      if (!isNaN(PM2)) {
        TotalValues['Year1'][entry['Date'].split('-')[0]]=PM2
      } 
    }


       

      
  
  

    if (!isNaN(tempValue)) {
      if (TotalValues["Time"].hasOwnProperty(entry["Time"])) {
        TotalValues["Time"][entry["Time"]] += tempValue;
      } else {
        TotalValues["Time"][entry["Time"]] = tempValue;
      }
    } else {
      console.warn(
        `Invalid temperature value: ${entry["Outdoor Temperature"]}`
      );
    }

    Object.keys(entry).forEach((key) => {
      if (
        entry[key] === null ||
        entry[key] === "" ||
        entry[key] === undefined
      ) {
        TotalValues["nullCounts"][key] += 1;
      }
    });
  });
  return TotalValues;
};
