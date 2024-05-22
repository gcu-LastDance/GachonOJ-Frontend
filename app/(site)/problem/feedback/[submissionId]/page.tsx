"use client";

import ReactCodeMirror from "@uiw/react-codemirror";
import React from "react";
import { githubLight } from "@uiw/codemirror-theme-github";
import { useQuery } from "@tanstack/react-query";
import { solutionFeedbackAPI } from "@/api/problemAPI";
import { ProblemFeedbackData } from "@/types/problem";
import Link from "next/link";

export default function page({ params }: { params: { submissionId: number } }) {
  const { data: feedbackData } = useQuery<ProblemFeedbackData>({
    queryKey: ["feedback"],
    queryFn: () => solutionFeedbackAPI(params.submissionId),
    refetchOnMount: "always",
  });

  return (
    <div className="flex flex-col mt-[6vh] mb-[4.5vh]">
      <div className="flex mb-[3vh] space-x-[2vw] items-baseline">
        <span className="font-PretendardSemiBold text-[2.3vw] text-primaryDark">
          {feedbackData?.problemTitle}
        </span>
        <Link
          href={`/algorithm-ide/${feedbackData?.problemId}`}
          className="font-PretendardRegular text-[1.3vw] text-realGrey underline underline-offset-auto"
        >
          문제 바로가기 &gt;
        </Link>
      </div>
      <div className="flex justify-between mt-[3vh]">
        <div className="flex flex-col">
          <p className="font-PretendardMedium text-[1.5vw] text-primaryDark mb-[2vh]">
            나의 풀이
          </p>
          <div className="w-[30vw] h-[60vh] border-[0.15vw] border-semiSemiGrey rounded-[0.7vh] overflow-hidden ">
            <div className="flex h-[6vh] border-b-[0.3vh] border-semiSemiGrey items-center pl-[1vw]">
              <p className="font-PretendardLight">
                {feedbackData?.memberNickname}
              </p>
            </div>
            <div className="px-[0.3vw] py-[0.5vh]">
              <ReactCodeMirror
                value={feedbackData?.code}
                height="55vh"
                theme={githubLight}
                editable={false}
                readOnly={true}
              />
            </div>
          </div>
        </div>
        <div>
          <p className="font-PretendardMedium text-[1.5vw] text-primaryDark mb-[2vh]">
            AI 피드백
          </p>
          <div className="w-[30vw] h-[60vh] border-[0.15vw] border-semiSemiGrey rounded-[0.7vh] overflow-hidden">
            <div className="flex h-[6vh] border-b-[0.3vh] border-semiSemiGrey items-center pl-[1vw]">
              <p className="font-PretendardLight">AI</p>
            </div>
            <div className="px-[3vw] py-[3.5vh]">
              <span className="font-PretendardLight">
                {feedbackData?.aiContents}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
