"use client";

import { memberProbInfoCardAPI } from "@/api/memberAPI";
import useUserStore from "@/store/useUserStore";
import { permissionType } from "@/types/auth";
import { memberProbInfoData } from "@/types/member";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { CiUser } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";

/**
 * SideNavUserData
 *
 * @param userImage: string
 * @param permission: string
 * @param name: string
 */
export interface SideNavUserData {
  userImage?: string; // user image url
  permission: permissionType;
  nickname: string;
}

export default function SideNavAccount() {
  const { userImg, userPermission } = useUserStore();

  const { data } = useQuery<memberProbInfoData>({
    queryKey: ["memberProbCard"],
    queryFn: memberProbInfoCardAPI,
    refetchOnMount: "always",
  });

  return (
    <div className="flex items-centers space-x-[0.7vw]">
      <div className="flex text-white border-[0.2vh] w-[4vw] h-[4vw] border-realGrey rounded-full items-center justify-center overflow-hidden relative">
        {!userImg ? (
          <CiUser className="text-[1.4vw] text-realGrey" />
        ) : (
          <Image
            src={userImg}
            alt="Member Profile Image"
            width={100}
            height={100}
          />
        )}
      </div>
      <div className="flex flex-col my-auto">
        <p className="font-PretendardSemiBold text-primaryDark text-[1.2vw]">
          {userPermission === "ROLE_ADMIN" ? "관리자" : "교수"}
        </p>
        <p className="font-PretendardRegular text-primaryDark text-[1vw]">
          {data?.memberNickname}
        </p>
      </div>
    </div>
  );
}
