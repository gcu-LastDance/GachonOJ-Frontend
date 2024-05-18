"use client";

import { TodaySubmissionAPI } from "@/api/admin/adminDashboardAPI";
import { TodaySubmissionData } from "@/types/admin/dashboard";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function TodaySubmission({ data }: { data: TodaySubmissionData[] }) {

  const getLegendText = (submission: string) => {
    switch (submission) {
      case 'correctSubmissionCount':
        return '맞은 제출 수';
      case 'incorrectSubmissionCount':
        return '틀린 제출 수';
      default:
        return submission;
    }
  };

  const transformData = (data: TodaySubmissionData[]) => {
    return Object.entries(data)
      .filter(([submission]) => submission !== 'totalSubmissionCount')
      .map(([submission, count]) => ({ submission, count }));
  };
  const transformedData = transformData(data);
  console.log(transformedData);

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
              {getLegendText(entry.value)} : {entry.payload.count}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className="flex flex-wrap shadow-md border-semiGrey border-4 h-full bg-white px-5 py-5">
      <div className="text-2xl">금일 채점 결과 현황</div>
      <div className="p-3 h-full w-full ">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={transformedData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="count"
              nameKey="submission"
            >
              {transformedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend
              content={renderLegend}
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const TodaySubmissionContainer = () => {
  const { data } = useQuery<TodaySubmissionData[]>({
    queryKey: ["TodaySubmission"],
    queryFn: TodaySubmissionAPI,
  });

  if (!data) return null;

  return <TodaySubmission data={data} />;
};

export default TodaySubmissionContainer;
