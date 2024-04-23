import Image from "next/image";
import React from "react";
import GachonOJ_logo_image from "@logo/gachonoj_logo.png";
import Link from "next/link";

export default function IdeHeader() {
  return (
    <header className="fixed flex border-b-2 shadow-md h-[6vh] px-[1.5vw] justify-between w-screen bg-white items-center">
      <Link href="/main" className="w-[7vw]">
        <Image src={GachonOJ_logo_image} alt="GachonOJ logo" />
      </Link>
      <Link href="/login">
        <div className="border-[0.15rem] pl-4 pr-4 pt-0.5 pb-0.5 rounded-lg border-primaryBlue">
          <span className="font-PretendardMedium text-primaryBlue text-sm">
            로그인
          </span>
        </div>
      </Link>
    </header>
  );
}
