import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["해!", 5],
  ["마?", 3],
];

export const MyChart = () => {
  return (
    <Chart chartType="PieChart" data={data} width={"100%"} height={"400px"} />
  );
};
