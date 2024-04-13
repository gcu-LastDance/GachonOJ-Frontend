import { difficultyColorMap } from "@/constants/difficultyColorMap";
import { difficulty } from "@/types/problem";
import React from "react";

export default function DiffBadge({ difficulty }: { difficulty: difficulty }) {
  const badgeColor = difficultyColorMap[difficulty];

  return (
    <div
      style={{ backgroundColor: badgeColor }}
      className={`flex w-[4vw] justify-center items-center border-[0.1vw] border-semiGrey rounded-xl`}
    >
      <span className="font-PretendardRegular text-[0.85vw] text-white py-[0.5vh]">
        {difficulty}단계
      </span>
    </div>
  );
}
