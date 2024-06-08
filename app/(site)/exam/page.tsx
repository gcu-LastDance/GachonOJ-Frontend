"use client";

import MemberTestInfoCard from "@/components/card/MemberTestInfoCard";
import React, { useState } from "react";
import ExamTable from "./_components/ExamTable";
import { TestMenuType } from "@/api/testAPI";

export default function page() {
  const [menu, setMenu] = useState<TestMenuType>("scheduled");

  const activeMenuCss =
    "flex w-[16.4vw] h-[5.5vh] items-center justify-center bg-white";
  const inactiveMenuCss =
    "flex w-[16.4vw] h-[5.5vh] items-center justify-center border-b-[0.15vw] border-semiSemiGrey bg-lightGrey";

  return (
    <div className="flex flex-col mb-[10vh]">
      <div className="flex flex-col h-[16vw] bg-[url('/images/banner/default_banner_img.png')] bg-center bg-no-repeat bg-auto justify-center items-center w-screen ml-[-17.5vw] mb-[7vh]">
        <span className="font-PretendardSemiBold text-[1.8vw] text-white mb-[3vh]">
          시험
        </span>
        <p className="font-PretendardExtraLight text-[0.8vw] text-white">
          가천대학교의 프로그래밍 관련 교양, 전공의 정기 시험을 응시할 수
          있습니다.
        </p>
        <p className="font-PretendardExtraLight text-[0.8vw] text-white mt-[0.5vh]">
          시험 응시 시 프로필 카드에서 학번과 이름을 반드시 확인해주세요.
        </p>
      </div>
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
                  ? activeMenuCss + " border-r-[0.15vw]"
                  : menu === "past"
                  ? inactiveMenuCss + " border-r-[0.15vw]"
                  : inactiveMenuCss
              }
            >
              응시 예정 시험
            </button>
            <button
              onClick={() => setMenu("ongoing")}
              type="button"
              className={
                menu === "ongoing"
                  ? activeMenuCss + " border-x-[0.15vw]"
                  : inactiveMenuCss
              }
            >
              진행중인 시험
            </button>
            <button
              onClick={() => setMenu("past")}
              type="button"
              className={
                menu === "past"
                  ? activeMenuCss + " border-l-[0.15vw]"
                  : menu === "scheduled"
                  ? inactiveMenuCss + " border-l-[0.15vw]"
                  : inactiveMenuCss
              }
            >
              종료된 시험
            </button>
          </div>
          <div className="flex justify-center py-[2.5vh]">
            <ExamTable menu={menu} />
          </div>
        </div>
      </div>
    </div>
  );
}
