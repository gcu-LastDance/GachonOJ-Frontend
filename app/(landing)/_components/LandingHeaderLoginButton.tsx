import Link from "next/link";
import React from "react";

export default function LandingHeaderLoginButton() {
  return (
    <Link href="/login">
      <div className="flex border-[0.15vw] rounded-[0.6vw] border-white w-[5.7vw] h-[3.8vh] justify-center items-center">
        <span className="font-PretendardMedium text-white text-[0.9vw] pt-[0.5vh]">
          로그인
        </span>
      </div>
    </Link>
  );
}
