"use client";

import { OngoingExamsAPI } from "@/api/professor/professorDashboardAPI";
import { TestData } from "@/types/professor/dashboard";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { RxQuestionMarkCircled } from "react-icons/rx";
import ProfessorTestCard from "@/components/card/ProfessorTestCard";

function OngoingExams({ data }: { data: TestData[] }) {
  return (
    <div className="flex-col h-full px-5 py-5 shadow-md border-4 border-semiGrey bg-white overflow-x-scroll">
      <div className="flex items-center">
        <div className="text-2xl">진행중인 시험</div>
        <div className="ml-3">
          <RxQuestionMarkCircled />
        </div>
      </div>
      <div className="flex flex-wrap pt-10 justify-center">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.examId}>
              <ProfessorTestCard data={item} />
            </div>
          ))
        ) : (
          <div className="ml-3">진행중인 시험이 없습니다.</div>
        )}
      </div>
    </div>
  );
}

const OngoingExamsContainer = () => {
  const { data } = useQuery<TestData[]>({
    queryKey: ["onGoingExams"],
    queryFn: OngoingExamsAPI,
  });
  if (!data) return null;
  return <OngoingExams data={data} />;
};

export default OngoingExamsContainer;
