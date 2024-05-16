"use client";

import { problemSolutionExcuteAPI } from "@/api/problemAPI";
import ModalLarge from "@/components/modal/ModalLarge";
import { useProgramLangStore } from "@/store/useProgramLangStore";
import {
  ProblemExcuteResultData,
  TestcaseData,
  TestcaseSetData,
} from "@/types/problem";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";

export default function IdeFooter({
  code,
  testcase,
  setExcuteResult,
  setTestcaseModalOpen,
}: {
  code: string;
  testcase: TestcaseSetData[];
  setExcuteResult: React.Dispatch<
    React.SetStateAction<ProblemExcuteResultData[]>
  >;
  setTestcaseModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const params = useParams();
  const { programLang } = useProgramLangStore();

  const convertTestcaseSetToData = (
    testcaseSet: TestcaseSetData[]
  ): TestcaseData => {
    const testcaseData: TestcaseData = {};
    testcaseSet.forEach((testcase) => {
      testcaseData[testcase.input] = testcase.output;
    });
    return testcaseData;
  };

  const problemSolutionExcute = useMutation({
    mutationFn: problemSolutionExcuteAPI,
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        setExcuteResult(data.result);
      } else {
        alert("코드 실행 실패");
      }
    },
  });

  const handleSolutionExcute = () => {
    const testcaseData = convertTestcaseSetToData(testcase);
    problemSolutionExcute.mutate({
      problemId: Number(params.problemId),
      data: { code: code, language: "Java", testcase: testcaseData },
    });
  };

  return (
    <footer className="fixed bottom-0 flex border-t-2 shadow-md h-[5.5vh] px-[1.5vw] w-screen bg-white items-center">
      <Link
        href={`/algorithm-ide/${params.problemId}/history`}
        className="flex border-[0.13vw] w-[7vw] h-[3.5vh] rounded-[0.3vw] border-primaryBlue items-center justify-center"
      >
        <span className="font-PretendardMedium text-primaryBlue text-[0.8vw]">
          제출이력 확인
        </span>
      </Link>
      <button
        type="button"
        className="flex border-[0.13vw] w-[5vw] h-[3.5vh] rounded-[0.3vw] border-primaryBlue ml-auto items-center justify-center"
      >
        <span className="font-PretendardMedium text-primaryBlue text-[0.8vw]">
          저장
        </span>
      </button>
      <button
        type="button"
        onClick={() => setTestcaseModalOpen(true)}
        className="flex border-[0.13vw] w-[7.5vw] h-[3.5vh] rounded-[0.3vw] border-primaryBlue ml-[0.5vw] items-center justify-center"
      >
        <span className="font-PretendardMedium text-primaryBlue text-[0.8vw]">
          테스트케이스 추가
        </span>
      </button>
      <button
        type="button"
        onClick={handleSolutionExcute}
        className="flex border-[0.13vw] w-[6vw] h-[3.5vh] rounded-[0.3vw] border-primaryBlue ml-[0.5vw] items-center justify-center"
      >
        <span className="font-PretendardMedium text-primaryBlue text-[0.8vw]">
          코드 실행
        </span>
      </button>
      <button
        type="button"
        className="flex border-[0.13vw] w-[6vw] h-[3.5vh] rounded-[0.3vw] bg-primaryRed border-primaryRed ml-[0.5vw] items-center justify-center"
      >
        <span className="font-PretendardMedium text-white text-[0.8vw]">
          제출
        </span>
      </button>
    </footer>
  );
}
