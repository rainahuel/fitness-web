import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";

interface CalorieChartProps {
  data: {
    label: string;
    calories: number;
  }[];
}

const CalorieChart: React.FC<CalorieChartProps> = ({ data }) => {
  return (
    <div style={{ width: "100%", height: 450 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="label"
            angle={-30}
            textAnchor="end"
            interval={0}
            height={60} // extra espacio para los labels
          />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey="calories" fill="#00d1b2" name="Calories Burned" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};


export default CalorieChart;
