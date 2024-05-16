import { TestMenuType, pastExamAPI, scheduledExamAPI } from "@/api/testAPI";
import TestCard from "@/components/card/TestCard";
import { TestData } from "@/types/test";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function ExamTable({ menu }: { menu: TestMenuType }) {
  const { data: scheduledExamData } = useQuery<TestData[]>({
    queryKey: ["scheduledExam"],
    queryFn: scheduledExamAPI,
    refetchOnMount: "always",
  });

  const { data: pastExamData } = useQuery<TestData[]>({
    queryKey: ["pastExam"],
    queryFn: pastExamAPI,
    refetchOnMount: "always",
  });

  return (
    <div className="grid grid-cols-3 gap-y-[4vh] gap-x-[1.5vw]">
      {(menu === "scheduled" ? scheduledExamData : pastExamData)?.map(
        (data: TestData) => (
          <TestCard key={data.examId} data={data} />
        )
      )}
    </div>
  );
}
