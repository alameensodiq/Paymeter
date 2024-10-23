import React from "react";
import Chart from "react-apexcharts";

function DoubleLineChart({ data }) {
  console.log("Data received:", data);

  // Prepare the series based on the disco data for each month
  const series = Array.isArray(data)
    ? data.flatMap((item) =>
        item.discoData.map((disco) => ({
          name: disco.discoName,
          type: "line",
          data: Array(12)
            .fill(0)
            .map((_, index) => {
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
              return item.month === monthNames[index]
                ? disco.transactionCount
                : 0;
            })
        }))
      )
    : [];

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
      type: "line",
      toolbar: {
        show: false
      }
    },
    grid: {
      show: true
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth",
      width: 2
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
      max: 1000 // Adjust as needed based on your data
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    legend: {
      show: true
    }
  };

  return <Chart options={options} series={series} type="line" height={290} />;
}

export default DoubleLineChart;
