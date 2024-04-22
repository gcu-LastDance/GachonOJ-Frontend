"use client";

import Link from "next/link";
import GachonOJ_logo_image from "@logo/gachonoj_logo.png";
import React from "react";
import Image from "next/image";
import HeaderButton from "./HeaderButton";
import useUserStore from "@/store/useUserStore";

export default function HeaderNav() {
  const { userPermission } = useUserStore();

  return (
    <header className="border-b-2 shadow-md">
      <div className="flex items-center w-[65vw] h-[7vh] mx-auto">
        <div>
          <Link href="/main">
            <div className="w-[8vw]">
              <Image src={GachonOJ_logo_image} alt="gachonOJ logo" />
            </div>
          </Link>
        </div>
        <div className="ml-16 mr-16 space-x-14 font-PretendardSemiBold text-[1.2vw] pt-1 text-primaryDark">
          <Link href="/problem">
            <span>문제</span>
          </Link>
          <Link href="/contest">
            <span>대회</span>
          </Link>
          <Link href="/ranking">
            <span>랭킹</span>
          </Link>
          <Link href="/exam">
            <span>시험</span>
          </Link>
          <Link href="/inquiry">
            <span>문의</span>
          </Link>
          {userPermission === "ROLE_PROFESSOR" && (
            <Link href="/professor">
              <span>관리페이지</span>
            </Link>
          )}
          {userPermission === "ROLE_ADMIN" && (
            <Link href="/admin">
              <span>관리페이지</span>
            </Link>
          )}
        </div>
        <div className="ml-auto">
          <HeaderButton />
        </div>
      </div>
    </header>
  );
}
