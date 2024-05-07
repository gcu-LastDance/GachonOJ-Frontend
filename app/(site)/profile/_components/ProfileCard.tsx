import RankBadge from "@/components/badge/RankBadge";
import useUserStore from "@/store/useUserStore";
import { MemberIntroProfileData, MemberProfileData } from "@/types/member";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

export default function ProfileCard({
  data,
}: {
  data: MemberIntroProfileData;
}) {
  const { userImg } = useUserStore();

  return (
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
            <RankBadge rank={data?.rating} />
          </div>
          <span className="font-PretendardSemiBold text-[1.6vw] text-primaryDark ml-[1vw]">
            {data?.memberNickname}
          </span>
        </div>
        <span className="mt-[2vh] font-PretendardRegular text-[0.9vw] ml-[0.3vw]">
          {data?.memberIntroduce}
        </span>
      </div>
      <Link href="/profile/settings" className="absolute top-[1vw] right-0">
        <IoSettingsOutline className="text-[2vw] text-primaryDark mr-[0.8vw] hover:text-realGrey" />
      </Link>
    </div>
  );
}
