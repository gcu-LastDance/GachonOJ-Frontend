"use client";

import { problemSolutionExcuteAPI } from "@/api/problemAPI";
import { examSubmitAPI } from "@/api/testAPI";
import { programLangSampleCodeMap } from "@/constants/programLangMap";
import { useProgramLangStore } from "@/store/useProgramLangStore";
import {
  ProblemExcuteResultData,
  ProblemSubmitResultData,
  TestcaseData,
  TestcaseSetData,
} from "@/types/problem";
import { TestProblemData } from "@/types/test";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

export default function IdeFooter({
  code,
  testcase,
  curProbNum,
  problems,
  setExcuteResult,
  setTestcaseModalOpen,
  setResultModalOpen,
}: {
  code: string;
  testcase: TestcaseSetData[];
  curProbNum: number;
  problems: TestProblemData[];
  setExcuteResult: React.Dispatch<
    React.SetStateAction<ProblemExcuteResultData[]>
  >;
  setTestcaseModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setResultModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSubmitResult: React.Dispatch<
    React.SetStateAction<ProblemSubmitResultData | undefined>
  >;
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

  const problemSolutionExcuteMutation = useMutation({
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
    problemSolutionExcuteMutation.mutate({
      problemId: problems[curProbNum].problemId,
      data: { code: code, language: "Java", testcase: testcaseData },
    });
  };

  const handleExamSubmit: () => void = () => {
    const codeData: {
      problemId: number;
      code: string;
      language: string;
    }[] = [];

    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(`${params.examId}-${curProbNum}`, code);
    }

    if (typeof window !== "undefined") {
      for (let i = 0; i < problems.length; i++) {
        const problemNumber = problems[i].problemId;
        if (sessionStorage.getItem(`${params.examId}-${curProbNum}`) !== null) {
          const code =
            sessionStorage.getItem(`${params.examId}-${curProbNum}`) ?? "";
          codeData.push({
            problemId: problemNumber,
            code: code,
            language: "Java",
          });
        } else {
          const code = programLangSampleCodeMap[programLang ?? "JAVA"];
          codeData.push({
            problemId: problemNumber,
            code: code,
            language: "Java",
          });
        }
      }
    }

    console.log(params.examId);
    console.log(codeData);

    examSubmitMutation.mutate({
      examId: Number(params.examId),
      codeData: codeData,
    });
  };

  const examSubmitMutation = useMutation({
    mutationFn: examSubmitAPI,
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data) => {
      if (data.success) {
        setResultModalOpen(true);
      } else {
        alert("시험 제출 실패");
      }
    },
  });

  return (
    <footer className="fixed bottom-0 flex border-t-2 shadow-md h-[5.5vh] px-[1.5vw] w-screen bg-white items-center">
      <button
        type="button"
        onClick={() => setTestcaseModalOpen(true)}
        className="flex border-[0.13vw] w-[7.5vw] h-[3.5vh] rounded-[0.3vw] border-primaryBlue ml-auto items-center justify-center"
      >
        <span className="font-PretendardMedium text-primaryBlue text-[0.8vw]">
          테스트케이스 추가
        </span>
      </button>
      <button
        type="button"
        onClick={handleSolutionExcute}
        className="flex border-[0.13vw] w-[6vw] h-[3.5vh] rounded-[0.3vw] bg-primaryBlue border-primaryBlue ml-[0.5vw] items-center justify-center"
      >
        <span className="font-PretendardMedium text-white text-[0.8vw]">
          코드 실행
        </span>
      </button>
      <button
        type="button"
        onClick={handleExamSubmit}
        className="flex border-[0.13vw] w-[6vw] h-[3.5vh] rounded-[0.3vw] bg-primaryRed border-primaryRed ml-[0.5vw] items-center justify-center"
      >
        <span className="font-PretendardMedium text-white text-[0.8vw]">
          시험 제출
        </span>
      </button>
    </footer>
  );
}
