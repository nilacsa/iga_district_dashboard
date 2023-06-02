
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 320 },
  { name: "Group B", value: 120 },
  { name: "Group C", value: 200 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 200 }
];

const COLORS = ["#f94144 ", "#6c757d", "#ffc107  ", "#4caf50 ","6c757d "];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
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
export default function Piechart() {
  return (
    
<div>
<div>
    <div className="absent"></div>
    <div className=""></div>
    <div className=""></div>
    <div className=""></div>
    <div className=""></div>
</div>
<PieChart width={210} height={300} className="px-2">
      <Pie
        data={data}
        cx={100}
        cy={150}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
</div>
  );
}
