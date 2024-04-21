"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["C++", "Python", "Java", "C"],
  datasets: [
    {
      label: "학생 선호 언어 현황",
      data: [92, 12, 23, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        boxWidth: 20, // 숫자형으로 수정
        generateLabels: function (chart: { data: any }) {
          const data = chart.data;
          if (data.labels.length && data.datasets.length) {
            return data.labels.map((label: any, i: string | number) => {
              const total = data.datasets[0].data.reduce(
                (a: any, b: any) => a + b,
                0
              );
              const value = data.datasets[0].data[i];
              const percentage = ((value / total) * 100).toFixed(0);
              return {
                text: `${label}: ${percentage}%`,
                fillStyle: data.datasets[0].backgroundColor[i],
              };
            });
          } else {
            return [];
          }
        },
      },
    },
    tooltip: false,
  },
};

const LanguageGraph = () => {
  return (
    <div className="flex flex-col justify-center items-center shadow-md border-semiGrey border-4 px-5 py-5 bg-white">
      <div className="mb-8 text-2xl">학생 선호 언어 현황</div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default LanguageGraph;
