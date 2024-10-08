import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function DoubleLineChart({data}) {
  // const series = [
  //   {
  //     //   name: "High - 2013",
  //     data: [40, 80, 30, 10, 70, 20, 10]
  //   },
  //   {
  //     //   name: "Low - 2013",
  //     data: [10, 30, 70, 30, 90, 50, 60]
  //   }
  // ];

  const series = data ? data?.map(item => ({
    name: item?.disco,
    data: item?.month?.map(real => real?.count)
  })) : [];

  console.log(data)

  const options = {
    colors: [ "#E9EDF5","#9932CC", "#c29bd6", "#d81694"],
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
      width: 3
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: 10000
    },
    tooltip: {
      x: {
        formatter: undefined,
        title: "Title: "
      }
    },
    legend: {
      show: false // Set this to false to hide legend labels
    }
  };

  return <Chart options={options} series={series} type="line" height={290} />;
}
export default DoubleLineChart;
