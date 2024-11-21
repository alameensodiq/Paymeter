import React from "react";
import Chart from "react-apexcharts";

function DoubleBarChart({ data }) {
  console.log("Data received:", data);

  // Extract unique disco names and assign them unique colors
  const discoNames = Array.from(
    new Set(
      data.flatMap(
        (monthData) =>
          monthData?.discoData?.map((disco) => disco.discoName) || []
      )
    )
  );

  const colorPalette = [
    "#E9EDF5",
    "#9932CC",
    "#c29bd6",
    "#d81694",
    "#1E90FF",
    "#FF4500",
    "#32CD32",
    "#FFD700",
    "#DC143C",
    "#00BFFF"
  ];

  const discoColorMap = discoNames.reduce((acc, discoName, index) => {
    acc[discoName] = colorPalette[index % colorPalette.length];
    return acc;
  }, {});

  console.log("Disco color mapping:", discoColorMap);

  // Generate the series data
  let series = [];
  if (Array.isArray(data)) {
    series = data
      .map((monthData) => {
        const { discoData, month } = monthData;

        if (Array.isArray(discoData)) {
          return discoData.map((disco) => ({
            name: disco.discoName,
            type: "column",
            data: Array(12)
              .fill(0)
              .map((_, index) => {
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
        return [];
      })
      .flat();
  }

  console.log("Series prepared:", series);

  // Assign colors to series based on discoName
  const seriesColors = series.map(
    (seriesItem) => discoColorMap[seriesItem.name]
  );

  const options = {
    colors: seriesColors, // Use the dynamically mapped colors
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
      max: 2000000 // Adjust as needed
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
