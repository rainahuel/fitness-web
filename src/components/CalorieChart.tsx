import React, { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: isMobile ? 500 : 450 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 10, bottom: isMobile ? 100 : 70 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="label"
            angle={isMobile ? -45 : -30}
            textAnchor="end"
            interval={0}
            height={isMobile ? 80 : 60}
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