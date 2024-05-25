"use client";

import DiffBadge from "@/components/badge/DiffBadge";
import { difficulty } from "@/types/problem";
import { TestProblemData } from "@/types/test";
import React from "react";

export default function IdeProblemWindow({
  problemData,
}: {
  problemData: TestProblemData | undefined;
}) {
  const visibleTestcases = problemData?.testcases.filter(
    (testcase) => testcase.testcaseStatus === "VISIBLE"
  );

  return (
    <div className="flex dark:bg-primaryDark">
      <div className="flex flex-col px-[1vw] py-[3vh]">
        <div className="flex items-center">
          {problemData?.problemDiff && (
            <div className="mr-[0.6vw]">
              <DiffBadge difficulty={problemData?.problemDiff as difficulty} />
            </div>
          )}
          <p className="font-PretendardBold text-primaryDeepBlue text-[1.8vw]">
            {problemData?.problemTitle}
          </p>
        </div>
        <span className="font-PretendardLight text-primaryDark text-[0.9vw] mt-[1.5vh]">
          {problemData?.problemContents}
        </span>
        <p className="font-PretendardMedium text-primaryDark text-[1.3vw] mt-[8vh]">
          입력
        </p>
        <span className="font-PretendardLight text-primaryDark text-[0.9vw] mt-[1vh]">
          {problemData?.problemInputContents}
        </span>
        <p className="font-PretendardMedium text-primaryDark text-[1.3vw] mt-[4vh]">
          출력
        </p>
        <span className="font-PretendardLight text-primaryDark text-[0.9vw] mt-[1vh]">
          {problemData?.problemOutputContents}
        </span>
        <p className="font-PretendardMedium text-primaryDark text-[1.3vw] mt-[4vh]">
          입력 예제
        </p>
        <pre className="font-PretendardLight text-primaryDark text-[0.9vw] mt-[1vh]">
          {visibleTestcases?.map((tc) => " " + tc.testcaseInput).join("\n ")}
        </pre>
        <p className="font-PretendardMedium text-primaryDark text-[1.3vw] mt-[4vh]">
          출력 예제
        </p>
        <pre className="font-PretendardLight text-primaryDark text-[0.9vw] mt-[1vh]">
          {visibleTestcases?.map((tc) => " " + tc.testcaseOutput).join("\n ")}
        </pre>
      </div>
      <div className="w-[7vw]" />
    </div>
  );
}
