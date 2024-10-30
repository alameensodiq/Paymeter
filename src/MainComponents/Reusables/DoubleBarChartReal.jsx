import React from "react";
import Chart from "react-apexcharts";

function DoubleBarChartReal({ data }) {
  // Log the input data to verify structure
  console.log("Data received:", data);

  // Initialize a map to store series data
  let seriesMap = {};

  if (Array.isArray(data)) {
    // Create a series for each disco in discoData for each month
    data.forEach((monthData) => {
      const { discoData, month } = monthData;

      // Ensure discoData is defined and is an array
      if (Array.isArray(discoData)) {
        discoData.forEach((disco) => {
          // Initialize the series entry for the disco if it doesn't exist
          if (!seriesMap[disco.discoName]) {
            seriesMap[disco.discoName] = {
              name: disco.discoName,
              type: "column",
              data: Array(12).fill(0) // Initialize with 12 zeros for each month
            };
          }

          // Find the index of the month and update the transaction count
          const monthIndex = monthNames.indexOf(month);
          if (monthIndex !== -1) {
            seriesMap[disco.discoName].data[monthIndex] +=
              disco.transactionCount;
          }
        });
      }
    });
  }

  // Convert the seriesMap to an array
  const series = Object.values(seriesMap);

  console.log("Series prepared:", series);

  // Generate unique colors for each disco based on the number of series
  const colors = series.map((_, index) => {
    const colorPalette = [
      "#E9EDF5",
      "#9932CC",
      "#c29bd6",
      "#d81694",
      "#1E90FF",
      "#FF4500"
    ];
    return colorPalette[index % colorPalette.length]; // Cycle through colors
  });

  const options = {
    colors: colors, // Use the dynamically generated colors
    chart: {
      height: 290,
      type: "bar",
      toolbar: {
        show: false
      }
    },
    grid: {
      show: false
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        borderRadius: 1
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    },
    yaxis: {
      tickAmount: 10,
      min: 0,
      max: 2000 // Adjust this based on expected transaction counts
    },
    fill: {
      opacity: 1
    },
    legend: {
      show: true
    }
  };

  return <Chart options={options} series={series} type="bar" height={290} />;
}

export default DoubleBarChartReal;

// Define month names for indexing
const monthNames = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER"
];
