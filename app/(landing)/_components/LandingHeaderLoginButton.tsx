import Link from "next/link";
import React from "react";

export default function LandingHeaderLoginButton({
  activeIndex,
}: {
  activeIndex: number;
}) {
  return (
    <Link href="/logi{n">
      <div
        className={`${
          activeIndex === 0 ? "border-white" : "border-primaryBlue"
        } flex border-[0.2vw] rounded-[0.6vw] w-[5.7vw] h-[3.8vh] justify-center items-center`}
      >
        <span
          className={`${
            activeIndex === 0 ? "text-white" : "text-primaryBlue"
          } font-PretendardMedium text-[0.9vw] pt-[0.5vh]`}
        >
          로그인
        </span>
      </div>
    </Link>
  );
}
