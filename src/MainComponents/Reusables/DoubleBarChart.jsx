import React from "react";
import Chart from "react-apexcharts";

function DoubleBarChart({ data }) {
  // Log the input data to verify structure
  console.log("Data received:", data);

  // Initialize an empty series array
  let series = [];

  if (Array.isArray(data)) {
    // Create a series for each disco in discoData for each month
    series = data
      .map((monthData) => {
        const { discoData, month } = monthData;

        // Ensure discoData is defined and is an array
        if (Array.isArray(discoData)) {
          return discoData.map((disco) => ({
            name: disco.discoName,
            type: "column",
            data: Array(12)
              .fill(0)
              .map((_, index) => {
                // Check if this month corresponds to the current index
                return month ===
                  [
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
                  ][index]
                  ? disco.totalRevenue
                  : 0;
              })
          }));
        }
        return []; // Return an empty array if discoData is not valid
      })
      .flat(); // Flatten the resulting arrays into a single series array
  }

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
      height: 220,
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
      max: 20000 // Adjust as needed
    },
    fill: {
      opacity: 1
    },
    legend: {
      show: false
    }
  };

  return <Chart options={options} series={series} type="bar" height={290} />;
}

export default DoubleBarChart;
