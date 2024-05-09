import Image from "next/image";
import Link from "next/link";
import React from "react";
import GachonOJ_logo_white_image from "@/public/images/logo/gachonoj_logo_white.png";
import GachonOJ_logo_black_image from "@/public/images/logo/gachonoj_logo.png";
import LandingHeaderLoginButton from "./LandingHeaderLoginButton";

export default function LandingHeader({
  activeIndex,
}: {
  activeIndex: number;
}) {
  return (
    <header
      className={`${
        activeIndex === 0
          ? "bg-primaryBlue"
          : activeIndex === 1
          ? "bg-[#eceff7] border-b-[0.12vw] shadow-md"
          : "bg-white border-b-[0.12vw] shadow-md"
      }`}
    >
      <div className="flex items-center pl-[2vw] pr-[3vw] h-[7vh] mx-auto">
        <div>
          <Link href="/main">
            <div className="w-[8vw]">
              <Image
                src={
                  activeIndex === 0
                    ? GachonOJ_logo_white_image
                    : GachonOJ_logo_black_image
                }
                alt="gachonOJ logo"
              />
            </div>
          </Link>
        </div>
        <div
          className={`${
            activeIndex === 0 ? "text-white" : "text-primaryDark"
          } mx-[5vw] space-x-[5.5vw] font-PretendardSemiBold text-[1.1vw] items-center`}
        >
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
        </div>
        <div className="ml-auto">
          <LandingHeaderLoginButton activeIndex={activeIndex} />
        </div>
      </div>
    </header>
  );
}
