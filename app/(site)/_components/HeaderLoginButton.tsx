import Link from "next/link";
import React from "react";

export default function HeaderLoginButton() {
  return (
    <Link href="/login">
      <div className="border-[0.15rem] pl-5 pr-5 pt-0.5 pb-0.5 rounded-lg border-primaryBlue">
        <span className="font-PretendardMedium text-primaryBlue text-base">
          로그인
        </span>
      </div>
    </Link>
  );
}
