import React from "react";
import { Paper } from "@material-ui/core";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
  Tooltip
} from "@devexpress/dx-react-chart-material-ui";

import { EventTracker } from "@devexpress/dx-react-chart";

const data = [
  { date: "03-10-2020", sales: 120 },
  { date: "04-10-2020", sales: 150 },
  { date: "05-10-2020", sales: 70 },
  { date: "06-10-2020", sales: 90 },
  { date: "07-10-2020", sales: 140 },
  { date: "08-10-2020", sales: 65 },
  { date: "09-10-2020", sales: 110 }
];

function BarChart() {
  return (
    <Paper>
      <Chart data={data}>
        <ArgumentAxis />
        <ValueAxis />
        <BarSeries valueField="sales" argumentField="date" />
        <EventTracker />
        <Tooltip />
      </Chart>
    </Paper>
  );
}

export { BarChart };
