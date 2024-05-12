import { TestData } from "@/types/professor/dashboard";
import Link from "next/link";
import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

export default function ProfessorTestCard({ data }: { data: TestData }) {
  return (
    <div className="flex flex-col border-[0.11vw] rounded-lg border-semiGrey w-[14vw] h-[14vh] overflow-hidden">
      <div
        className={`${
          data.examStatus === "종료됨" ? "bg-realGrey" : "bg-primaryBlue"
        } w-full h-[1vh]`}
      />
      <div className="flex flex-col px-[0.8vw] pt-[1.2vh] pb-[0.5vh] h-full">
        <Link href="/algorithm-ide/1" className="w-[8vw]">
          <span className="font-PretendardRegular text-[0.85vw] leading-none">
            {data.examTitle}
          </span>
        </Link>
        <div className="flex justify-between">
          <div className="flex items-center">
            <span className="font-PretendardSemiBold text-[0.6vw] mr-[0.2vw]">
              {data.examStartDate}
            </span>
            <span className="font-PretendardLight text-[0.45vw]">부터</span>
            <span className="font-PretendardSemiBold text-[0.6vw] mx-[0.2vw]">
              {data.examEndDate}
            </span>
            <span className="font-PretendardLight text-[0.45vw]">
              까지 응시 가능
            </span>
          </div>
          <Link href="/algorithm-ide/1">
            <IoArrowForwardSharp className="text-[1.3vw] text-realGrey" />
          </Link>
        </div>
      </div>
    </div>
  );
}
