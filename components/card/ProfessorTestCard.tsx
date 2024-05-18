import { TestData } from "@/types/professor/dashboard";
import React from "react";

export default function ProfessorTestCard({ data }: { data: TestData }) {
  return (
    <div className="flex flex-col mr-2 ml-2 border-2 rounded-xl border-semiGrey w-60 h-36 overflow-hidden">
      <div className="bg-primaryBlue w-full h-5" />
      <div className="flex flex-col p-3 h-full">
        <span className="font-PretendardRegular text-[0.85vw] leading-none">
          {data.examTitle}
        </span>

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
      </div>
    </div>
  );
}
