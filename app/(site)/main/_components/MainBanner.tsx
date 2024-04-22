"use client";

import React from "react";
import Main_banner_image from "@images/main_banner.png";
import Image from "next/image";

export default function MainBanner() {
  const gcuCE_Href = "http://ceprj.gachon.ac.kr/inner-roadmap#";
  const handleClickBannerText = () => {
    window.open(gcuCE_Href);
  };

  return (
    <div className="flex flex-col w-[65vw] h-[13vw] bg-[url('/images/main_banner.png')] bg-center bg-no-repeat bg-auto justify-center px-[5vw] rounded-xl">
      <button
        type="button"
        onClick={handleClickBannerText}
        className="flex flex-col"
      >
        <p className="font-PretendardSemiBold text-[1.4vw] text-white">
          가천대학교 컴퓨터공학과
        </p>
        <p className="font-PretendardSemiBold text-[1.4vw] text-white mb-[3vh]">
          프로젝트 로드맵
        </p>
      </button>
      <p className="font-PretendardExtraLight text-[0.8vw] text-white">
        학생들의 전공실력, 직무능력 극대화를 위한 학과 프로젝트 로드맵
      </p>
      <div className="space-x-2 mt-[1.6vh]">
        <span className="font-PretendardBold text-[0.7vw] text-white">1</span>
        <span className="font-PretendardExtraLight text-[0.6vw] text-white">
          |
        </span>
        <span className="font-PretendardExtraLight text-[0.6vw] text-white">
          1
        </span>
      </div>
    </div>
  );
}

{
  /* <Image src={Main_banner_image} alt="GachonOJ main banner image" /> */
}
