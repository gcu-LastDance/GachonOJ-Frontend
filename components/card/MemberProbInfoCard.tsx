"use client";

import { memberProbInfoData } from "@/types/member";
import React from "react";
import RankBadge from "../badge/RankBadge";
import { CiUser } from "react-icons/ci";
import Image from "next/image";
import { memberPermisionMap } from "@/constants/memberConstants";
import { permissionType } from "@/types/auth";
import { useQuery } from "@tanstack/react-query";
import { memberProbInfoCardAPI } from "@/api/memberAPI";
import { rank } from "@/types/rank";
import useUserStore from "@/store/useUserStore";

// const member_prob_data: memberProbData = {
//   permission: "member",
//   rank: 0,
//   nickname: "성적장학금 헌터",
//   solvedProb: 10,
//   triedProb: 20,
//   bookmarkedProb: 30,
// };

export default function MemberProbInfoCard() {
  const { userImg, userPermission } = useUserStore();

  const { data } = useQuery<memberProbInfoData>({
    queryKey: ["memberProbCard"],
    queryFn: memberProbInfoCardAPI,
  });

  return (
    <div className="flex flex-col py-[3vh] px-[1vw] items-center">
      <p className="font-PretendardRegular text-[1.1vw] text-primaryDark">
        {memberPermisionMap[userPermission as permissionType]}
      </p>
      <div className="border-[0.2vh] border-semiGrey rounded-full flex w-[7vw] h-[7vw] justify-center items-center my-[1.5vh] overflow-hidden">
        {!userImg || userImg === "" ? (
          <CiUser className="text-[5vw] text-semiGrey" />
        ) : (
          <Image
            src={userImg}
            alt="Member Profile Image"
            width={150}
            height={150}
          />
        )}
      </div>
      <div className="flex space-x-[0.2vw] items-center">
        <div className="w-[2.2vw]">
          <RankBadge rank={data?.rating as rank} />
        </div>
        <span className="font-PretendardSemiBold text-[1vw] text-primaryDark">
          {data?.memberNickname}
        </span>
      </div>
      <div className="flex flex-col mt-[8vh] space-y-[5vh] font-PretendardLight text-[1vw] text-realGrey items-center">
        <p>해결한 문제 : {data?.solvedProblemCount ?? 0}</p>
        <p>도전중인 문제 : {data?.tryProblemCount ?? 0}</p>
        <p>북마크 문제 : {data?.bookmarkedProblemCount ?? 0}</p>
      </div>
    </div>
  );
}
