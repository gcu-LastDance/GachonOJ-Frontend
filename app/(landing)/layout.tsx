"use client";

import SiteFooter from "@/components/footer/SiteFooter";
import React, { useEffect, useState } from "react";
import LandingHeader from "./_components/LandingHeader";
import GachonOJLogoImg from "@/public/images/logo/gachonoj_logo.png";
import Image from "next/image";

export default function layout({ children }: { children: React.ReactNode }) {
  const [isImageFixed, setIsImageFixed] = useState(false);
  // useEffect(() => {
  //   //add eventlistener to window
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   // remove event on unmount to prevent a memory leak with the cleanup
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      const example = document.querySelector(".example");
      if (!example) return;

      const exampleTop = example.getBoundingClientRect().top;

      // exampleTop이 0 ~ -1750 까지 이미지를 고정시킨다.
      if (exampleTop <= 0 && exampleTop >= -1750) {
        setIsImageFixed(true);
      }
    };
  }, []);

  return (
    <div className="flex flex-col">
      <div className="bg-gradient-to-b from-primaryBlue to-[#C6CFE2] h-[150vh]">
        <LandingHeader />
        <div className="flex flex-col font-PretendardExtraBold text-[3.7vw] items-center justify-center h-[70vh] text-white space-y-[4vh]">
          <p style={{ textShadow: "0.15rem 0.15rem 0.3rem #676771" }}>
            가천대학교만의
          </p>
          <p style={{ textShadow: "0.15rem 0.15rem 0.3rem #676771" }}>
            Web IDE 기반 학습 서비스
          </p>
        </div>
        <div className="backdrop-opacity-30 flex flex-col font-PretendardSemiBold text-[2.5vw] items-center justify-center h-[80vh] text-primaryDark">
          <p>이제 가천 OJ에서</p>
          <p>알고리즘 학습과 교내 대회</p>
          <p>실제 전공과 교양의 프로그래밍 시험까지</p>
        </div>
      </div>
      <div className="mx-auto">{children}</div>
      <div className="relative bg-gradient-to-t from-primaryBlue to-white h-[100vh] flex justify-center items-center">
        <div className="w-[28vw]">
          <Image src={GachonOJLogoImg} alt="GachonOJ Logo Image" />
        </div>
        <div className="absolute flex flex-col bottom-[2vh] right-[1.5vw] font-PretendardThin text-[0.9vw] text-semiSemiGrey items-end">
          <p>2024 가천대학교 컴퓨터공학과</p>
          <p>종합프로젝트 이병문 교수님 졸업작품</p>
          <p>나민혁 정현진 은현수 조기헌</p>
          <p className="mt-[2.5vh]">
            이병문 교수님과 김창복 교수님께 감사를 드립니다.
          </p>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
