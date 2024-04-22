"use client";

import React from "react";
import ProblemTable from "./_components/ProblemTable";
import GuestProbCard from "@/components/card/GuestProbCard";
import useUserStore from "@/store/useUserStore";
import MemberProbCard from "@/components/card/MemberProbCard";

export default function page() {
  const { token } = useUserStore();

  return (
    <div className="flex flex-col mt-[4.5vh] mb-[4.5vh]">
      <span className="font-PretendardSemiBold text-[1.8vw] text-primaryDark mb-[3vh]">
        문제
      </span>
      <div className="flex justify-between">
        <div className="w-[13vw] h-[73vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden">
          {!token ? <GuestProbCard /> : <MemberProbCard />}
        </div>
        <div className="w-[49vw] h-[73vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden">
          <ProblemTable />
        </div>
      </div>
    </div>
  );
}
