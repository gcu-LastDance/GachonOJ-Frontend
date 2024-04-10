import Link from "next/link";
import GachonOJ_logo_image from "@logo/gachonoj_logo.png";
import React from "react";
import Image from "next/image";

export default function HeaderNav() {
  return (
    <header className="border-b-2">
      <div className="flex items-center w-[75vw] h-[7vh] mx-auto">
        <div>
          <Link href="/main">
            <div className="w-[8vw]">
              <Image src={GachonOJ_logo_image} alt="gachonOJ logo" />
            </div>
          </Link>
        </div>
        <div className="ml-16 mr-16 space-x-16 font-PretendardSemiBold text-lg pt-1">
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
          <Link href="/problem">
            <span>관리페이지</span>
          </Link>
        </div>
        <div className="ml-auto">
          <Link href="/login">
            <div className="border-2 pl-6 pr-6 pt-1 pb-1 rounded-lg">
              <span>로그인</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
