"use client";

import React from "react";
import ProblemTable from "./_components/ProblemTable";
import GuestProbCard from "@/components/card/GuestProbCard";
import useUserStore from "@/store/useUserStore";
import MemberProbInfoCard from "@/components/card/MemberProbInfoCard";

export default function page() {
  const { token } = useUserStore();

  return (
    <div className="flex flex-col mb-[10vh]">
      <div className="flex flex-col h-[16vw] bg-[url('/images/banner/default_banner_img.png')] bg-center bg-no-repeat bg-auto justify-center items-center w-screen ml-[-17.5vw] mb-[7vh]">
        <span className="font-PretendardSemiBold text-[1.8vw] text-white mb-[3vh]">
          문제
        </span>
        <p className="font-PretendardExtraLight text-[0.8vw] text-white">
          코딩테스트 준비, 알고리즘 학습을 위해 다양한 문제를 풀어보세요.
        </p>
        <p className="font-PretendardExtraLight text-[0.8vw] text-white mt-[0.5vh]">
          가천OJ에서 지속해서 최신 문제를 업데이트할 예정입니다.
        </p>
      </div>
      <div className="flex justify-between">
        <div className="w-[49vw] h-[73vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden">
          <ProblemTable />
        </div>
        <div className="w-[12vw] h-[73vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden">
          {!token ? <GuestProbCard /> : <MemberProbInfoCard />}
        </div>
      </div>
    </div>
  );
}
