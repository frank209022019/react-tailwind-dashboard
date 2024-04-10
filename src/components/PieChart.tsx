import React from 'react';

import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';

import DashboardPieChart from '../helpers/Dashboard.PieChart';

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}) => {
  // Function body remains the same
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * DashboardPieChart.RADIAN);
  const y = cy + radius * Math.sin(-midAngle * DashboardPieChart.RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const BuyerProfilePieChart = () => {
  return (
    <div className="w-80 h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
      <strong className="text-gray-700 font-medium">Buyer Profile</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={300}>
            <Pie
              data={DashboardPieChart.Data}
              cx="50%"
              cy="45%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={105}
              fill="#8884d8"
              dataKey="value">
              {DashboardPieChart.Data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={DashboardPieChart.COLORS[index % DashboardPieChart.COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BuyerProfilePieChart;
