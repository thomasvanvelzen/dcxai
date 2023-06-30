"use client";
import React from "react";
import { PieChart, Pie } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

export default function Example() {
  return (
    <PieChart width={400} height={400}>
      <Pie
        labelLine={false}
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx="25%"
        cy="25%"
        outerRadius={80}
        fill="#8884d8"
        fillRule="evenodd"
      />
    </PieChart>
  );
}
