import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell, Legend} from "recharts";

const data = [
  { name: "Present", value: 400 },
  { name: "Absence", value: 300 },
  { name: "Permision", value: 300 },
  { name: "Late", value: 200 },
  { name: "Leave", value: 100 }

];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#ff0000"];

const RADIAN = Math.PI / 180;
const Reports = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function App() {
  return (
    <PieChart width={450} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={Reports}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
<Legend className="mt-8"/>
    </PieChart>
  );
}
