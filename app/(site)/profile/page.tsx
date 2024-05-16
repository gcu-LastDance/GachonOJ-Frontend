"use client";

import React from "react";
import LanguageForm from "./_components/LanguageForm";
import { GoQuestion } from "react-icons/go";
import ProfileCard from "./_components/ProfileCard";
import RatingHelperCard from "./_components/RatingHelperCard";
import MemberProblemTable from "./_components/MemberProblemTable";
import Link from "next/link";
import { MemberProfileDashBoardData } from "@/types/member";
import { memberProfileDashBoardAPI } from "@/api/memberAPI";
import { useQuery } from "@tanstack/react-query";

export default function page() {
  const { data: memberProfileDashBoardData } =
    useQuery<MemberProfileDashBoardData>({
      queryKey: ["memberProfileDashBoard"],
      queryFn: memberProfileDashBoardAPI,
      refetchOnMount: "always",
    });

  return (
    <div className="flex flex-col mt-[4.5vh] mb-[10vh]">
      <span className="font-PretendardSemiBold text-[1.8vw] text-primaryDark mb-[3vh]">
        사용자
      </span>
      <div className="flex flex-col">
        <div className="w-[65vw] h-[18vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden">
          <ProfileCard data={memberProfileDashBoardData!} />
        </div>
        <div className="flex justify-between mt-[4vh]">
          <div className="flex flex-col space-y-[4vh]">
            <div className="w-[13vw] h-[26vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden py-[1.5vh] px-[1vw] flex flex-col">
              <div className="flex items-center">
                <span className="font-PretendardMedium text-[0.9vw] mr-[0.5vw]">
                  등급 도우미
                </span>
                <GoQuestion size="1vw" color="#767676" />
              </div>
              <RatingHelperCard data={memberProfileDashBoardData!} />
            </div>
            <div className="w-[13vw] h-[31vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden py-[1.5vh] px-[1vw] flex flex-col">
              <div className="flex items-center">
                <span className="font-PretendardMedium text-[0.9vw] mr-[0.5vw]">
                  선호 언어 선택
                </span>
                <GoQuestion size="1vw" color="#767676" />
              </div>
              <LanguageForm />
              <div className="flex justify-center mt-auto">
                <span className="flex font-PretendardLight text-realGrey text-[0.6vw]">
                  언어는 향후 다양하게 추가될 예정입니다.
                </span>
              </div>
            </div>
            <div className="flex w-[13vw] h-[8vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden py-[1.5vh] px-[1vw] justify-center items-center">
              <Link
                href="/profile/withdrawal"
                scroll={false}
                className="font-PretendardRegular underline underline-offset-4 text-[0.9vw] text-realGrey decoration-realGrey"
              >
                회원 탈퇴하기
              </Link>
            </div>
          </div>
          <div className="w-[49vw] h-[73vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden">
            <MemberProblemTable />
          </div>
        </div>
      </div>
    </div>
  );
}
