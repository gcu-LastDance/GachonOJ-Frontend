"use client";

import { RecProblemData } from "../../types/problem";
import React, { useState } from "react";
import DiffBadge from "../badge/DiffBadge";
import { IoArrowForwardSharp } from "react-icons/io5";
import Link from "next/link";

/**
 * RecProblemCard
 * 추천 문제 카드 컴포넌트
 * @param data: RecProblemData
 *
 * 주요 미비된 사항 : uri 고민으로 인해 문제 ide Link 미적용
 */

export default function RecProblemCard({ data }: { data: RecProblemData }) {
  const [isShowCategory, setIsShowCategory] = useState<boolean>(false);

  const handleShowCategory = () => {
    setIsShowCategory(true);
  };

  return (
    <div className="flex flex-col border-[0.11vw] rounded-lg border-semiGrey py-[2.1vh] px-[1.2vw] space-y-[2vh] w-[17vw] h-[20vh] justify-center">
      <DiffBadge difficulty={data.difficulty} />
      <Link href="/algorithm-ide/1">
        <span className="font-PretendardRegular text-[1.2vw]">
          {data.title}
        </span>
      </Link>
      <div className="flex justify-between items-end">
        {!isShowCategory ? (
          <button onClick={handleShowCategory} type="button">
            <span className="font-PretendardLight underline underline-offset-4 text-[0.8vw] text-realGrey decoration-realGrey">
              분류 확인하기
            </span>
          </button>
        ) : (
          <span className="font-PretendardLight text-[0.8vw] text-realGrey">
            {data.category?.join(", ")}
          </span>
        )}
        <Link href="/algorithm-ide/1">
          <IoArrowForwardSharp className="text-[2vw] text-realGrey" />
        </Link>
      </div>
    </div>
  );
}
