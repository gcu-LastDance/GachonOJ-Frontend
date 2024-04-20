"use client";

import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const side_nav_user_data: SideNavUserData = {
  userImage: "",
  permission: "admin",
  nickname: "가천OJ관리자",
};

/**
 * SideNavUserData
 *
 * @param userImage: string
 * @param permission: string
 * @param name: string
 */
export interface SideNavUserData {
  userImage?: string; // user image url
  permission: string;
  nickname: string;
}

export default function SideNavAccount() {
  return (
    <div className="flex items-centers space-x-[0.7vw]">
      <div>
        <FaRegCircleUser className="text-[3vw] text-darkGrey" />
      </div>
      <div className="flex flex-col">
        <p className="font-PretendardSemiBold text-primaryDark text-[1.2vw]">
          {side_nav_user_data.permission === "admin" ? "관리자" : "교수"}
        </p>
        <p className="font-PretendardRegular text-primaryDark text-[0.8vw]">
          {side_nav_user_data.nickname}
        </p>
      </div>
    </div>
  );
}
