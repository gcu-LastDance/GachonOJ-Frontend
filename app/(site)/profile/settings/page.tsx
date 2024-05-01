"use client";

import RankBadge from "@/components/badge/RankBadge";
import useUserStore from "@/store/useUserStore";
import { MemberSettingData } from "@/types/member";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

// export interface MemberSettingData {
//   memberEmail: string;
//   memberName: string;
//   memberNumber: string;
//   memberIntroduce: string;
//   memberNickname: string;
//   memberImg: string;
//   rating: rank;
// }

const tmpdata: MemberSettingData = {
  memberEmail: "tmp@tmp.com",
  memberName: "정정정",
  memberNumber: "202012345",
  memberIntroduce: "hihi",
  memberNickname: "가천대잠은행창구담당은행원",
  rating: 5,
};

export default function page() {
  const { userImg } = useUserStore(); // 여기서는 api가 필요.. refetch시 전역변수 변경또한 필요
  const { register, handleSubmit } = useForm<MemberSettingData>();

  return (
    <div className="flex flex-col mt-[4.5vh] mb-[4.5vh]">
      <span className="font-PretendardSemiBold text-[1.8vw] text-primaryDark mb-[3vh]">
        내 정보 수정
      </span>
      <div className="flex flex-col bg-white border-[0.1vw] border-semiSemiGrey rounded-lg overflow-hidden w-full h-[70vh]">
        <div className="relative flex h-[18vh] items-center px-[2vw] py-[1vh]">
          <div className="border-[0.2vw] border-realGrey rounded-full flex w-[6.5vw] h-[6.5vw] justify-center items-center">
            {!userImg || userImg === "" ? (
              <CiUser className="text-[4vw] text-semiGrey" />
            ) : (
              <Image
                src={userImg}
                alt="Member Profile Image"
                width={100}
                height={100}
              />
            )}
          </div>
          <div className="flex flex-col ml-[2vw] h-[10vh]">
            <div className="flex items-center">
              <div className="w-[2.2vw]">
                <RankBadge rank={tmpdata?.rating} />
              </div>
              <span className="font-PretendardSemiBold text-[1.6vw] text-primaryDark ml-[1vw]">
                {tmpdata?.memberNickname}
              </span>
            </div>
            <span className="mt-[2vh] font-PretendardRegular text-[0.9vw] ml-[0.3vw]">
              {tmpdata?.memberIntroduce}
            </span>
          </div>
        </div>
        <div className="flex flex-col w-[30vw] mx-auto">
          <div className="flex">
            <span className="font-PretendardSemiBold text-[1.6vw] text-primaryDark w-[10vw]">
              이메일
            </span>
            <span className="font-PretendardLight text-[1.4vw] text-primaryDark">
              {tmpdata?.memberEmail}
            </span>
          </div>
          <div className="flex">
            <span className="font-PretendardSemiBold text-[1.6vw] text-primaryDark w-[10vw]">
              이름
            </span>
            <span className="font-PretendardLight text-[1.4vw] text-primaryDark">
              {tmpdata?.memberName}
            </span>
          </div>
          <div className="flex">
            <span className="font-PretendardSemiBold text-[1.6vw] text-primaryDark w-[10vw]">
              학번
            </span>
            <span className="font-PretendardLight text-[1.4vw] text-primaryDark">
              {tmpdata?.memberNumber}
            </span>
          </div>
          <div className="flex">
            <span className="font-PretendardSemiBold text-[1.6vw] text-primaryDark w-[10vw]">
              비밀번호
            </span>
            <span>{""}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
