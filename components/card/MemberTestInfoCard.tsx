"use client";

import { memberTestInfoData } from "@/types/member";
import React from "react";
import RankBadge from "../badge/RankBadge";
import { CiUser } from "react-icons/ci";
import Image from "next/image";
import { memberPermisionMap } from "@/constants/memberConstants";
import { permissionType } from "@/types/auth";
import { useQuery } from "@tanstack/react-query";
import { memberTestInfoCardAPI } from "@/api/memberAPI";
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

export default function MemberTestInfoCard() {
  const { userImg, userPermission } = useUserStore();

  const { data } = useQuery<memberTestInfoData>({
    queryKey: ["memberTestInfoCard"],
    queryFn: memberTestInfoCardAPI,
  });

  return (
    <div className="flex flex-col py-[3vh] px-[1vw] items-center">
      <p className="font-PretendardRegular text-[1.1vw] text-primaryDark">
        {memberPermisionMap[userPermission as permissionType]}
      </p>
      <div className="border-[0.2vw] border-realGrey rounded-full flex w-[7vw] h-[7vw] justify-center items-center my-[1.5vh]">
        {!userImg || userImg === "" ? (
          <CiUser className="text-[5vw] text-semiGrey" />
        ) : (
          <Image
            src={userImg}
            alt="Member Profile Image"
            width={100}
            height={100}
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
      <div className="flex flex-col mt-[6vh] space-y-[3vh] font-PretendardLight text-[1.2vw] text-realGrey items-center">
        <p>이름 : {data?.memberName ?? ""}</p>
        <p>학번 : {data?.memberNumber ?? ""}</p>
      </div>
    </div>
  );
}
