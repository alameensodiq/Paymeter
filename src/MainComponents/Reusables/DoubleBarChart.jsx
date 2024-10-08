import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function DoubleBarChart({data}) {

  console.log(data)
  // const series = [
  //   {
  //     name: "Income",
  //     type: "column",
  //     data: [14, 20, 25, 15, 35, 28, 38, 46]
  //   },
  //   {
  //     name: "Cashflow",
  //     type: "column",
  //     data: [11, 33, 31, 40, 41, 49, 65, 85]
  //   }
  // ];


  const series = data ? data?.map(item => ({
    name: item?.disco,
    type: "column",
    data: item?.month?.map(real => real?.amount?.AMOUNT)
  })) : [];

   console.log(series)

  const options = {
    colors: [ "#E9EDF5","#9932CC", "#c29bd6", "#d81694"],
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
        //   endingShape: 'rounded',
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      //   curve: "smooth",
      //   width: [1, 1, 4]
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: 10000
    },
    fill: {
      opacity: 1
    },
    // tooltip: {
    //   x: {
    //     formatter: undefined,
    //     title: "Title: "
    //   }
    // },
    legend: {
      show: false // Set this to false to hide legend labels
    }
  };

  return <Chart options={options} series={series} type="bar" height={290} />;
}
export default DoubleBarChart;
