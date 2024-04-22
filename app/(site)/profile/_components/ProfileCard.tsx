import RankBadge from "@/components/badge/RankBadge";
import { MemberProfileData } from "@/types/member";
import Image from "next/image";
import React from "react";
import { CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

const member_profile_data: MemberProfileData = {
  rating: 1,
  memberNickname: "라스트댄스",
  memberIntroduction: "가천대학교 컴퓨터공학과 18",
};

export default function ProfileCard() {
  return (
    <div className="relative flex h-[18vh] items-center px-[2vw] py-[1vh]">
      <div className="border-[0.2vw] border-realGrey rounded-full flex w-[6.5vw] h-[6.5vw] justify-center items-center">
        {!member_profile_data.profileImg ||
        member_profile_data.profileImg === "" ? (
          <CiUser className="text-[4vw] text-semiGrey" />
        ) : (
          <Image
            src={member_profile_data.profileImg}
            alt="Member Profile Image"
            width={100}
            height={100}
          />
        )}
      </div>
      <div className="flex flex-col ml-[2vw] h-[10vh]">
        <div className="flex items-center">
          <div className="w-[2.2vw]">
            <RankBadge rank={member_profile_data.rating} />
          </div>
          <span className="font-PretendardSemiBold text-[1.6vw] text-primaryDark ml-[1vw]">
            {member_profile_data.memberNickname}
          </span>
        </div>
        <span className="mt-[2vh] font-PretendardRegular text-[0.9vw] ml-[0.3vw]">
          {member_profile_data.memberIntroduction}
        </span>
      </div>
      <button type="button" className="absolute top-[1vw] right-0">
        <IoSettingsOutline className="text-[2vw] text-primaryDark mr-[0.8vw]" />
      </button>
    </div>
  );
}
