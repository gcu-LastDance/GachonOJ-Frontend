"use client";

import MemberTestInfoCard from "@/components/card/MemberTestInfoCard";
import React, { useState } from "react";
import ContestTable from "./_components/ContestTable";
import { TestMenuType } from "@/api/testAPI";

export default function page() {
  const [menu, setMenu] = useState<TestMenuType>("scheduled");

  const activeMenuCss =
    "flex w-[24.5vw] h-[5.5vh] items-center justify-center bg-white";
  const inactiveMenuCss =
    "flex w-[24.5vw] h-[5.5vh] items-center justify-center border-b-[0.15vw] border-semiSemiGrey bg-lightGrey";

  return (
    <div className="flex flex-col mt-[4.5vh] mb-[4.5vh]">
      <span className="font-PretendardSemiBold text-[1.8vw] text-primaryDark mb-[3vh]">
        대회
      </span>
      <div className="flex justify-between">
        <div className="w-[13vw] h-[73vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden">
          <MemberTestInfoCard />
        </div>
        <div className="w-[49vw] h-[73vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden">
          <div className="h-[5.5vh] flex mb-[2.5vh]">
            <button
              onClick={() => setMenu("scheduled")}
              type="button"
              className={
                menu === "scheduled"
                  ? activeMenuCss
                  : inactiveMenuCss + " border-r-[0.15vw]"
              }
            >
              참가 예정 대회
            </button>
            <button
              onClick={() => setMenu("past")}
              type="button"
              className={
                menu === "past"
                  ? activeMenuCss
                  : inactiveMenuCss + " border-l-[0.15vw]"
              }
            >
              지난 대회
            </button>
          </div>
          <div className="flex justify-center py-[2.5vh]">
            <ContestTable menu={menu} />
          </div>
        </div>
      </div>
    </div>
  );
}
