import Link from "next/link";
import React from "react";

export default function IdeGuestFooter() {
  return (
    <footer className="fixed bottom-0 flex border-t-2 shadow-md h-[5.5vh] px-[1.5vw] justify-end w-screen bg-white items-center">
      <Link href="/login">
        <div className="border-[0.15rem] pl-4 pr-4 pt-0.5 pb-0.5 rounded-lg border-primaryBlue">
          <span className="font-PretendardMedium text-primaryBlue text-sm">
            로그인
          </span>
        </div>
      </Link>
    </footer>
  );
}
