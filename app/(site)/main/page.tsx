import React from "react";
import MainBanner from "./_components/MainBanner";
import MainNotice from "./_components/MainNotice";
import MainProblem from "./_components/MainProblem";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function page() {
  return (
    <div className="flex flex-col mb-[4.5vh]">
      <MainBanner />
      <div className="mx-[1vw] flex flex-col">
        <div className="my-[4vh]">
          <Link href="/notice" className="inline-flex items-center">
            <span className="font-PretendardSemiBold text-[1.8vw] text-primaryDark">
              공지사항
            </span>
            <MdKeyboardArrowRight size="3vw" color="#262935" />
          </Link>
          <MainNotice />
          <div className="mt-[6vh]">
            <Link href="/problem" className="inline-flex items-center">
              <span className="font-PretendardSemiBold text-[1.8vw] text-primaryDark">
                추천 알고리즘 문제
              </span>
              <MdKeyboardArrowRight size="3vw" color="#262935" />
            </Link>
          </div>
          <MainProblem />
        </div>
      </div>
    </div>
  );
}
