"use client";

import { IncorrectRate } from "@/api/professor/professorDashboardAPI";
import ProfessorProblemCard from "@/components/card/ProfessorProblemCard";
import { IncorrectRateData } from "@/types/professor/dashboard";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const IncorrectRateQuestions = ({ data }: { data: IncorrectRateData[] }) => {
  // Replace this with your actual data

  return (
    <div className="flex flex-col overflow-x-auto shadow-md border-semiGrey border-4 h-72 py-5 px-5 bg-white">
      <div className="text-2xl">최근 오답율 높은 문제 Top 3</div>
      <div className="text-sm text-semiGrey">
        학생들이 최근 가장 어려워하는 문제들를 알려드립니다.
      </div>
      <div className="flex pt-10 px-10 justify-center">
        {data.map((item) => (
          <div key={item.problemId}>
            <ProfessorProblemCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

const IncorrectRateQuestionsContainer = () => {
  const { data } = useQuery<IncorrectRateData[]>({
    queryKey: ["IncorrectRate"],
    queryFn: IncorrectRate,
  });
  if (!data) return null;
  return <IncorrectRateQuestions data={data} />;
};

export default IncorrectRateQuestionsContainer;
