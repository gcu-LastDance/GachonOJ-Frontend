"use client";

import ModalSmall from "@/components/modal/ModalSmall";
import { ProblemSubmitResultData } from "@/types/problem";
import { BsStars } from "react-icons/bs";
import Link from "next/link";
import React from "react";
import RankBadge from "@/components/badge/RankBadge";
import { rank } from "@/types/rank";

export default function ResultModal({
  problemId,
  submitResult,
  setResultModalOpen,
}: {
  problemId: number;
  submitResult: ProblemSubmitResultData | undefined;
  setResultModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <ModalSmall>
      <div className="flex flex-col py-[4vh] px-[7vw]">
        {submitResult?.isCorrect ? (
          <div className="flex flex-col h-[22vh]">
            <div className="flex w-[30vw] mx-auto">
              <p className="font-PretendardSemiBold text-[2vw] text-primaryDark">
                정답입니다!
              </p>
              <div className="ml-auto justify-end">
                <p className="font-PretendardSemiBold text-[1.5vw] text-realGrey text-end">
                  +{submitResult?.problemRank}
                </p>
                <div className="flex items-center">
                  <div className="w-[2.5vw] mr-[0.5vw]">
                    <RankBadge rank={submitResult?.afterMemberRating as rank} />
                  </div>
                  <p className="font-PretendardSemiBold text-[1.5vw] text-primaryDark text-end">
                    {submitResult?.afterMemberRank}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex mx-auto space-x-[3vw] mt-auto">
              <button
                type="button"
                onClick={() => setResultModalOpen(false)}
                className="flex items-center justify-center w-[13.5vw] h-[4vh] rounded-[0.5vh] bg-primaryBlue mt-auto"
              >
                <span className="font-PretendardMedium text-[0.95vw] text-white">
                  돌아가기
                </span>
              </button>
              <Link
                href={`/problem/feedback/${problemId}`}
                className="flex items-center justify-center w-[13.5vw] h-[4vh] rounded-[0.5vh] bg-primaryBlue mt-auto"
              >
                <span className="font-PretendardMedium text-[0.95vw] text-white flex items-center">
                  AI 분석 <BsStars className="ml-[0.4vw]" />
                </span>
              </Link>
            </div>
            <Link
              href="/problem"
              className="flex items-center justify-center w-[30vw] h-[4vh] rounded-[0.5vh] bg-primaryBlue mt-[1vh] mx-auto"
            >
              <span className="font-PretendardMedium text-[0.95vw] text-white">
                다른 문제 풀러가기
              </span>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col h-[22vh]">
            <div className="flex w-[30vw] mx-auto">
              <p className="font-PretendardSemiBold text-[2vw] text-primaryDark">
                오답입니다.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setResultModalOpen(false)}
              className="flex items-center justify-center w-[7vw] h-[4vh] rounded-[0.5vh] bg-primaryBlue mx-auto mt-auto"
            >
              <span className="font-PretendardMedium text-[0.95vw] text-white">
                돌아가기
              </span>
            </button>
          </div>
        )}
      </div>
    </ModalSmall>
  );
}
