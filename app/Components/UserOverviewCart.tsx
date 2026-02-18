"use client";

import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "App Signups", value: 400 },
  { name: "Customers", value: 300 },
  { name: "Total Applications", value: 300 },
];

const COLORS = ["#f2b5b5", "#9bd48c", "#f5d18a"];

const UserOverviewChart = () => {
  return (
    <div className="bg-white p-6 rounded shadow w-[355] md:w-[567] lg:max-w-2xs mx-auto lg:mx-[87%] lg:-mt-[36%]">
      <h2 className="text-lg font-semibold mb-4">User Overview</h2>

      <ResponsiveContainer width="100%" height={298}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserOverviewChart;
