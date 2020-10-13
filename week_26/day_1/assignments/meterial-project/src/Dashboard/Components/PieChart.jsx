import React from "react";
import { Paper, Grid } from "@material-ui/core";
import { PieChart, Pie, Cell } from "recharts";
import { InfoCard } from "./InfoCard";

const data = [
  {
    name: "completed",
    value: 80,
    color: '#0088FE'
    
  },
  {
    name: "shipped",
    value: 40,
    color: '#00C49F'
    
  },
  {
    name: "processing",
    value: 60,
    color: '#FFBB28'
    
  }
  
 
];

//const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

function PieChartComponent() {
  return (
    <Paper >
      <PieChart width={350} height={500}>
        <Pie
          data={data}
          dataKey="value"
          nameKey={"name"}
          cx="50%"
          cy="50%"
          outerRadius={150}
          innerRadius = {100}
          fill="red"
        >
          {
						data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)
					}
        </Pie>
        
      </PieChart>
      <Grid container spacing={1}>
        <Grid item xl = {3}>
          <InfoCard
            title="Completed"
            value= "44.44%"
            
          />
        </Grid>
        <Grid item xl = {3}>
          <InfoCard
            title="Shipped"
            value= "22.22%"
            
          />
        </Grid>
        <Grid item xl = {3}>
          <InfoCard
            title="Processing"
            value="33.33%"
            
          />
        </Grid>
        
      </Grid>
    </Paper>
    
  );
}

export { PieChartComponent };
