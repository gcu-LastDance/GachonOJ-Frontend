import { IncorrectRateData } from "@/types/professor/dashboard";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProfessorProblemCard({ data }: { data: IncorrectRateData }) {
  return (
    <div className="flex flex-col mr-2 ml-2 border-2 rounded-xl border-semiGrey w-60 h-36 overflow-hidden">
      <div className="bg-primaryBlue w-full h-5" />
      <div
        key={data.problemId}
        className="w-1/3 shrink-0 mr-2 ml-2 mb-2 h-32 p-2 rounded-xl border border-gray-400"
      >
        <div className="flex justify-between">
          <div className="">{data.problemDiff}</div>
          <div className="text-red-500">정답율 {data.correctRate}</div>
        </div>
        <div className="mb-10">{data.problemTitle}</div>

        <div className="flex justify-between items-center">
          <div className="">{data.problemClass}</div>
          <div>
            <FaArrowRightLong />
          </div>
          {/* Add more exam details here */}
        </div>
      </div>
    </div>
  );
}
