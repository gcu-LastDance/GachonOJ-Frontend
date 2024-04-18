import MemberProbCard from "@/components/card/MemberProbCard";
import React from "react";
import RankingTable from "./_components/RankingTable";

export default function page() {
  return (
    <div className="flex flex-col mt-[4.5vh] mb-[4.5vh]">
      <span className="font-PretendardSemiBold text-[1.8vw] text-primaryDark mb-[3vh]">
        랭킹
      </span>
      <div className="flex justify-between">
        <div className="w-[13vw] h-[73vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden">
          <MemberProbCard />
        </div>
        <div className="w-[49vw] h-[73vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden">
          <RankingTable />
        </div>
      </div>
    </div>
  );
}
