"use client";

import {
  TestMenuType,
  pastContestAPI,
  scheduledContestAPI,
} from "@/api/testAPI";
import TestCard from "@/components/card/TestCard";
import { TestData } from "@/types/test";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function ContestTable({ menu }: { menu: TestMenuType }) {
  const { data: scheduledContestData } = useQuery<TestData[]>({
    queryKey: ["scheduledContest"],
    queryFn: scheduledContestAPI,
    refetchOnMount: "always",
  });

  const { data: pastContestData } = useQuery<TestData[]>({
    queryKey: ["pastContest"],
    queryFn: pastContestAPI,
    refetchOnMount: "always",
  });

  return (
    <div className="grid grid-cols-3 gap-y-[4vh] gap-x-[1.5vw]">
      {(menu === "scheduled" ? scheduledContestData : pastContestData)?.map(
        (data: TestData) => (
          <TestCard key={data.examId} data={data} />
        )
      )}
    </div>
  );
}
