"use client";

import {
  breadCrumbsMap,
  detailBreadCrumbsMap,
} from "@/constants/breadCrumbsMap";
import { usePathname } from "next/navigation";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

/**
 * 관리자 페이지 브레드크럼
 *
 * 향후 관리자 페이지 path 현위치 표시와 버튼 추가 예정
 * @returns
 */
export default function BreadCrumbs() {
  const pathNameArr: string[] = usePathname()
    .split("/")
    .filter((path) => path);
  pathNameArr.shift();
  // admin을 제외하고 시작

  // 현재 페이지 토픽
  const curPageTopic = breadCrumbsMap[pathNameArr[0]] || "";

  return (
    <div className="flex items-center">
      {pathNameArr.map((path, index) => (
        <div key={index} className="flex items-center">
          <span className="font-PretendardSemiBold text-[1.3vw] text-realGrey">
            {breadCrumbsMap[path]
              ? breadCrumbsMap[path] + " 관리"
              : detailBreadCrumbsMap[path]
              ? curPageTopic + " " + detailBreadCrumbsMap[path]
              : ""}
          </span>
          {index < pathNameArr.length - 1 && (
            <MdKeyboardArrowRight className="mx-2 text-[2vw] text-realGrey" />
          )}
        </div>
      ))}
    </div>
  );
}
