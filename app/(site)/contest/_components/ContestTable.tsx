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

const contest_sc_data: TestData[] = [
  {
    examId: 1,
    examTitle: "가천OJ 알고리즘 대회 3회차",
    memberNickname: "팀 라스트댄스",
    examStartDate: "2021-10-10",
    examEndDate: "2021-10-11",
    examStatus: "진행중",
  },
  {
    examId: 2,
    examTitle: "시험대회제목",
    memberNickname: "제작자이름",
    examStartDate: "2021-10-10",
    examEndDate: "2021-10-11",
    examStatus: "진행중",
  },
  {
    examId: 3,
    examTitle: "시험대회제목",
    memberNickname: "제작자이름",
    examStartDate: "2021-10-10",
    examEndDate: "2021-10-11",
    examStatus: "진행중",
  },
  {
    examId: 4,
    examTitle: "시험대회제목",
    memberNickname: "제작자이름",
    examStartDate: "2021-10-10",
    examEndDate: "2021-10-11",
    examStatus: "진행중",
  },
];

const contest_ps_data: TestData[] = [
  {
    examId: 1,
    examTitle: "가천OJ 알고리즘 대회 3회차",
    memberNickname: "팀 라스트댄스",
    examStartDate: "2021-10-10",
    examEndDate: "2021-10-11",
    examStatus: "종료됨",
  },
  {
    examId: 2,
    examTitle: "시험대회제목",
    memberNickname: "제작자이름",
    examStartDate: "2021-10-10",
    examEndDate: "2021-10-11",
    examStatus: "종료됨",
  },
  {
    examId: 3,
    examTitle: "시험대회제목",
    memberNickname: "제작자이름",
    examStartDate: "2021-10-10",
    examEndDate: "2021-10-11",
    examStatus: "종료됨",
  },
  {
    examId: 4,
    examTitle: "시험대회제목",
    memberNickname: "제작자이름",
    examStartDate: "2021-10-10",
    examEndDate: "2021-10-11",
    examStatus: "종료됨",
  },
];

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
      {(menu === "scheduled" ? contest_sc_data : contest_ps_data)?.map(
        (data: TestData) => (
          <TestCard key={data.examId} data={data} />
        )
      )}
    </div>
  );
}
