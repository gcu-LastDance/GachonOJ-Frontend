import { IncorrectRateData } from "@/types/professor/dashboard";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ProfessorProblemCard({
  data,
}: {
  data: IncorrectRateData;
}) {
  return (
    <div className="flex flex-col mr-2 ml-2 border-2 rounded-xl border-semiGrey w-60 h-36 overflow-hidden">
      <div className="bg-primaryBlue w-full h-5" />
      <div className="flex flex-col p-3 h-full">
        <div className="flex justify-between">
          <div className="">{data.problemDiff}</div>
          <div className="text-red-500">정답율 {data.correctRate}</div>
        </div>
        <div className="flex-grow">{data.problemTitle}</div>

        <div className="flex  justify-between items-center">
          <div className="">{data.problemClass}</div>
          <div>
          <Link href={`/algorithm-ide/${data.problemId}`}>
            <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
