"use client";

import React from "react";
import GachonOJ_logo_image from "@logo/gachonoj_logo.png";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function SiteFooter() {
  const gitHref = "https://github.com/gcu-LastDance";
  const handleClickGitIcon = () => {
    window.open(gitHref);
  };

  return (
    <footer className="bg-lightGrey bottom-0 w-full min-h-[30vh]">
      <div className="w-[65vw] flex flex-col mx-auto pt-9 pb-9">
        <div className="w-[13vw] ml-[-0.15vw]">
          <Image src={GachonOJ_logo_image} alt="GachonOJ logo" />
        </div>
        <span className="font-PretendardRegular text-primaryDark mt-2 mb-4">
          한국어
        </span>
        <span className="font-PretendardThin text-realGrey mb-2">
          2024 가천대학교 컴퓨터공학과 종합프로젝트 이병문 교수님 팀 라스트댄스
          나민혁 은현수 정현진 조기헌
          <br />
          가천OJ는 가천대학교 구성원들의 알고리즘 학습, 시험 지원을 위해
          만들어진 비상업 비영리 서비스입니다.
        </span>
        <div className="flex items-end">
          <span className="font-PretendardLight text-primaryDark">
            이용약관
          </span>
          <span className="font-PretendardLight text-primaryDark ml-4">
            개인정보처리방침
          </span>
          <span className="font-PretendardLight text-primaryDark ml-4">
            도움말
          </span>
          <button
            type="button"
            onClick={handleClickGitIcon}
            className="ml-auto"
          >
            <FaGithub size="2.3rem" className="text-realGrey" />
          </button>
        </div>
      </div>
    </footer>
  );
}
