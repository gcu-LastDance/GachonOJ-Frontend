"use client";

import { problemDetailAPI } from "@/api/problemAPI";
import { ProblemDetailData } from "@/types/problem";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function IdeProblemWindow({ problemId }: { problemId: number }) {
  const { data: problemDetaildata } = useQuery<ProblemDetailData>({
    queryKey: ["problemDetail", problemId],
    queryFn: () => problemDetailAPI(problemId),
    refetchOnMount: "always",
  });

  return (
    <div className="flex">
      <div className="flex flex-col px-[1vw] py-[3vh]">
        <div className="flex items-center">
          <p className="font-PretendardBold text-primaryDeepBlue text-[1.8vw]">
            {problemDetaildata?.problemTitle}
          </p>
        </div>
        <span className="font-PretendardLight text-primaryDark text-[0.9vw] mt-[1.5vh]">
          {problemDetaildata?.problemContents}
        </span>
        <p className="font-PretendardMedium text-primaryDark text-[1.3vw] mt-[8vh]">
          입력
        </p>
        <span className="font-PretendardLight text-primaryDark text-[0.9vw] mt-[1vh]">
          {problemDetaildata?.problemInputContents}
        </span>
        <p className="font-PretendardMedium text-primaryDark text-[1.3vw] mt-[4vh]">
          출력
        </p>
        <span className="font-PretendardLight text-primaryDark text-[0.9vw] mt-[1vh]">
          {problemDetaildata?.problemOutputContents}
        </span>
        <p className="font-PretendardMedium text-primaryDark text-[1.3vw] mt-[4vh]">
          입력 예제
        </p>
        <pre className="font-PretendardLight text-primaryDark text-[0.9vw] mt-[1vh]">
          {" " + problemDetaildata?.testcaseInputs.join("\n ")}
        </pre>
        <p className="font-PretendardMedium text-primaryDark text-[1.3vw] mt-[4vh]">
          출력 예제
        </p>
        <pre className="font-PretendardLight text-primaryDark text-[0.9vw] mt-[1vh]">
          {" " + problemDetaildata?.testcaseOutputs}
        </pre>
      </div>
      <div className="w-[7vw]" />
    </div>
  );
}
