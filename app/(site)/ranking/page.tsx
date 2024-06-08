"use client";

import React from "react";
import RankingTable from "./_components/RankingTable";
import useUserStore from "@/store/useUserStore";
import GuestProbCard from "@/components/card/GuestProbCard";
import MemberProbInfoCard from "@/components/card/MemberProbInfoCard";

export default function page() {
  const { token } = useUserStore();
  return (
    <div className="flex flex-col mb-[10vh]">
      <div className="flex flex-col h-[16vw] bg-[url('/images/banner/default_banner_img.png')] bg-center bg-no-repeat bg-auto justify-center items-center w-screen ml-[-17.5vw] mb-[7vh]">
        <span className="font-PretendardSemiBold text-[1.8vw] text-white mb-[3vh]">
          랭킹
        </span>
        <p className="font-PretendardExtraLight text-[0.8vw] text-white">
          가천대학교 학생들의 랭킹을 확인하여 함께 경쟁해보세요.
        </p>
        <p className="font-PretendardExtraLight text-[0.8vw] text-white mt-[0.5vh]">
          가천OJ에 등록된 문제를 풀어 등급과 랭킹을 올릴 수 있습니다.
        </p>
      </div>
      <div className="flex justify-between">
        <div className="w-[49vw] h-[73vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden">
          <RankingTable />
        </div>
        <div className="w-[12vw] h-[73vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden">
          {!token ? <GuestProbCard /> : <MemberProbInfoCard />}
        </div>
      </div>
    </div>
  );
}
