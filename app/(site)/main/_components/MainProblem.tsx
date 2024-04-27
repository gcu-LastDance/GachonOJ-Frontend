"use client";

import { recProblemAPI } from "@/api/problemAPI";
import RecProblemCard from "@/components/card/RecProblemCard";
import { RecProblemData } from "@/types/problem";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function MainProblem() {
  const { data: recProblemData } = useQuery<RecProblemData[]>({
    queryKey: ["recProblem"],
    queryFn: recProblemAPI,
    refetchOnMount: "always",
  });

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-y-[6vh] gap-x-[3vw] ml-[3vw] my-[4vh]">
      {recProblemData?.map((data: RecProblemData) => (
        <RecProblemCard key={data.problemId} data={data} />
      ))}
    </div>
  );
}
