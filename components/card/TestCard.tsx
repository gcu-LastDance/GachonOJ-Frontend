import { TestData } from "@/types/test";
import Link from "next/link";
import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

export default function TestCard({ data }: { data: TestData }) {
  return (
    <div className="flex flex-col border-[0.11vw] rounded-lg border-semiGrey w-[14vw] h-[14vh] overflow-hidden">
      <div
        className={`${
          data.examStatus === "종료됨" ? "bg-realGrey" : "bg-primaryBlue"
        } w-full h-[1vh]`}
      />
      <div className="flex flex-col px-[0.8vw] pt-[1.2vh] pb-[0.5vh] h-full">
        <Link href={`/exam/${data.examId}`} className="w-[8vw]">
          <span className="font-PretendardRegular text-[0.85vw] leading-none">
            {data.examTitle}
          </span>
        </Link>
        <p className="font-PretendardLight text-[0.7vw] text-realGrey mt-auto mb-[0.5vh]">
          {data.memberNickname}
        </p>
        <div className="flex justify-between items-end mb-[0.2vh]">
          <div className="flex flex-col">
            <div>
              <span className="font-PretendardSemiBold text-[0.6vw] mr-[0.2vw]">
                {data.examStartDate}
              </span>
              <span className="font-PretendardLight text-[0.45vw]">부터</span>
            </div>
            <div>
              <span className="font-PretendardSemiBold text-[0.6vw] mr-[0.2vw]">
                {data.examEndDate}
              </span>
              <span className="font-PretendardLight text-[0.45vw]">
                까지 응시 가능
              </span>
            </div>
          </div>
          <Link href={`/exam/${data.examId}`}>
            <IoArrowForwardSharp className="text-[1.3vw] text-realGrey" />
          </Link>
        </div>
      </div>
    </div>
  );
}
