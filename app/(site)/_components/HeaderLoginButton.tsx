import Link from "next/link";
import React from "react";

export default function HeaderLoginButton() {
  return (
    <Link href="/login">
      <div className="flex border-[0.15vw] rounded-[0.6vw] w-[5.7vw] h-[3.8vh] justify-center items-center border-primaryBlue">
        <span className="font-PretendardMedium text-primaryBlue text-[0.95vw]">
          로그인
        </span>
      </div>
    </Link>
  );
}
