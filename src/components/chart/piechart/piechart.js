import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
const Donutchart = () => {
  return (
    <React.Fragment>
      <div className="container-fluid mb-3">
        <Charts
          type="donut"
          //   width={500}
          //   width={"100%"}
          //   height={"100px"}
          // series={ [] }
          series={[33, 55, 77, 99, 33]}
          options={{
            // title:{ text:"Student PieChart"
            // } ,
            plotOptions: {
              pie: {
                donut: {
                  size: "25%",
                  // endigShape: "rounded",
                  // borderRadius: 10,
                },
              },
            },

            stroke: {
              show: true,
              width: 0,
              curve: "smooth",
              lineCap: "round",
            },

            // pattern: {
            //     style: 'circles',
            // },

            noData: { text: "Empty Data" },
            // colors:["#f90000","#f0f"],
            labels: ["เยอรมัน", "รัสเซีย", "อินเดีย", "มาเลเซีย", "ออสเตเรีย"],
            colors: ["#FFA336", "#EAEBA9", "#BEF3CC", "#EED5D0", "#E6BEF3"],
            dataLabels: {
              enabled: false,
            },
            //   stroke: {
            //     show: true,
            //     width: 0,
            //     curve:'smooth',
            //     lineCap: 'butt',

            // },

            fill: {
              stroke: {
                show: true,
                lineCap: "smooth",
              },
            },
            legend: {
              position: "bottom",
              itemMargin: {
                horizontal: 11,
                vertical: 0,
              },
            },

            tooltip: {
              enabled: true,
              theme: "light",

              marker: {
                show: true,
              },
              custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                let allcun = series.reduce((val1, val2) => val1 + val2);
                const country = w.config.labels[seriesIndex];

                const result = series[seriesIndex];
                const caculate = (result / allcun) * 100;
                return `<div  class="arrow_box"><span> ${country} ${result} คน   (${caculate.toFixed(
                  0
                )}%) </span></div>`;
              },
            },
          }}
          legend={{
            show: false,
            horizontalAlign: "bottom",
            position: "bottom",
          }}
        ></Charts>
      </div>
    </React.Fragment>
  );
};
export default Donutchart;

const Charts = styled(Chart)`
  .apexcharts-series.apexcharts-pie-series {
    border-radius: 10px;
  }
  .arrow_box {
    padding: 50px;
  }
  .apexcharts-tooltip {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 157px;
    height: 30px;
    border-radius: 20px !important;
    box-shadow: 0px 1px 16px #eaeaea;
    font-family: "Prompt";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
  }

  /* .apexcharts-canvas {
    position: absolute !important;
    user-select: none;
  } */
`;
