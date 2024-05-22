"use client";

import { LanguageGraphAPI } from "@/api/professor/professorDashboardAPI";
import { LanguageGraphData } from "@/types/professor/dashboard";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function LanguageGraph({ data }: { data: LanguageGraphData[] }) {
  console.log(data);

  const renderLegend = (props: any) => {
    const { payload } = props;
    return (
      <div style={{ textAlign: "center" }}>
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          {payload.map((entry: any, index: number) => (
            <li
              key={`item-${index}`}
              style={{
                display: "inline-block",
                margin: "0 10px",
                color: entry.color,
              }}
            >
              {entry.value} : {entry.payload.count}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap shadow-md border-semiGrey border-4 h-full bg-white px-5 py-5">
      <div className="text-2xl">학생 선호 언어 현황</div>
      <div className="p-3 h-full w-full">
        <ResponsiveContainer width="100%" height="100%" >
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="count"
              nameKey="lang"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
             <Legend content={renderLegend} layout="horizontal" verticalAlign="bottom" align="center"/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const LanguageGraphContainer = () => {
  const { data } = useQuery<LanguageGraphData[]>({
    queryKey: ["LanguageGraph"],
    queryFn: LanguageGraphAPI,
  });

  if (!data) return null;

  return <LanguageGraph data={data} />;
};

export default LanguageGraphContainer;
