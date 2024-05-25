"use client";

import ModalSmall from "@/components/modal/ModalSmall";
import Link from "next/link";
import React from "react";

export default function ResultModal() {
  return (
    <ModalSmall>
      <div className="flex flex-col py-[4vh] px-[7vw]">
        <div className="flex flex-col h-[22vh]">
          <div className="flex flex-col w-[30vw] mx-auto">
            <p className="font-PretendardSemiBold text-[1.5vw] text-primaryDark">
              정상적으로 제출되었습니다.
            </p>
            <p className="font-PretendardSemiBold text-[1.5vw] text-primaryDark">
              시험이 종료되었습니다.
            </p>
          </div>
          <Link
            href="/main"
            className="flex items-center justify-center w-[30vw] h-[5vh] rounded-[0.5vh] bg-primaryBlue mt-auto mx-auto"
          >
            <span className="font-PretendardMedium text-[0.95vw] text-white">
              돌아가기
            </span>
          </Link>
        </div>
      </div>
    </ModalSmall>
  );
}
