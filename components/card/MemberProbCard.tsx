import { memberProbData } from "@/types/member";
import React from "react";
import RankBadge from "../badge/RankBadge";
import { CiUser } from "react-icons/ci";
import Image from "next/image";
import { memberPermisionMap } from "@/constants/memberConstants";
import { permissionType } from "@/types/auth";

const member_prob_data: memberProbData = {
  permission: "member",
  rank: 0,
  nickname: "성적장학금 헌터",
  solvedProb: 10,
  triedProb: 20,
  bookmarkedProb: 30,
};

export default function MemberProbCard() {
  return (
    <div className="flex flex-col py-[3vh] px-[1vw] items-center">
      <p className="font-PretendardRegular text-[1.1vw] text-primaryDark">
        {memberPermisionMap[member_prob_data.permission as permissionType]}
      </p>
      <div className="border-[0.2vw] border-realGrey rounded-full flex w-[7vw] h-[7vw] justify-center items-center my-[1.5vh]">
        {!member_prob_data.profileImg || member_prob_data.profileImg === "" ? (
          <CiUser className="text-[5vw] text-semiGrey" />
        ) : (
          <Image
            src={member_prob_data.profileImg}
            alt="Member Profile Image"
            width={100}
            height={100}
          />
        )}
      </div>
      <div className="flex space-x-[0.2vw] items-center">
        <RankBadge rank={member_prob_data.rank} />
        <span className="font-PretendardSemiBold text-[1vw] text-primaryDark">
          {member_prob_data.nickname}
        </span>
      </div>
      <div className="flex flex-col mt-[6vh] space-y-[3vh] font-PretendardLight text-[1.2vw] text-realGrey items-center">
        <p>해결한 문제: {member_prob_data.solvedProb}</p>
        <p>도전중인 문제: {member_prob_data.triedProb}</p>
        <p>북마크 문제: {member_prob_data.bookmarkedProb}</p>
      </div>
    </div>
  );
}
