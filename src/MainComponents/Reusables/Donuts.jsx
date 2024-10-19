import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function Donuts({ data }) {
  //  const series = data?.subscriptionPlan((item) => item.value)
  const totalMeters =
    data?.reduce((sum, item) => {
      return sum + (item?.totalMeters || 0);
    }, 0) || 0;

  console.log(totalMeters);

  const series = data
    ? data?.map((item) => item?.totalMeters)
    : [20, 10, 50, 50];

  const options = {
    chart: {
      width: 380,
      type: "donut"
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total Meter",
              formatter: () => {
                const totalMeters = data?.reduce((sum, item) => {
                  return sum + (item?.totalMeters || 0);
                }, 0);
                return totalMeters !== undefined ? `${totalMeters}` : "0";
              }
            }
          }
        }
      }
    },
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      lineCap: "butt"
    },
    fill: {
      colors: [
        "rgba(52, 75, 253, 1)",
        "rgba(244, 167, 157, 1)",
        "rgba(246, 141, 43, 1)",
        "rgba(255, 210, 0, 1)"
      ]
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };

  return <Chart options={options} series={series} type="donut" height={200} />;
}

export default Donuts;
