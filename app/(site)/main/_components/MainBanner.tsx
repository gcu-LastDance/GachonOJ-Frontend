"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Main_banner_image from "@images/main_banner.png";
import Image from "next/image";

export default function MainBanner() {
  const gcuCE_Href = "http://ceprj.gachon.ac.kr/inner-roadmap#";
  const handleClickBannerText = () => {
    window.open(gcuCE_Href);
  };

  return (
    <div className="w-screen ml-[-17.5vw]">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={400}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className="flex flex-col h-[16vw] bg-[url('/images/banner/banner_1_img.png')] bg-center bg-no-repeat bg-auto justify-center pl-[18vw]">
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
              <span className="font-PretendardBold text-[0.7vw] text-white">
                1
              </span>
              <span className="font-PretendardExtraLight text-[0.6vw] text-white">
                |
              </span>
              <span className="font-PretendardExtraLight text-[0.6vw] text-white">
                3
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col h-[16vw] bg-[url('/images/banner/banner_2_img.png')] bg-center bg-no-repeat bg-auto justify-center pl-[18vw]">
            <button
              type="button"
              // onClick={handleClickBannerText}
              className="flex flex-col"
            >
              <p className="font-PretendardSemiBold text-[1.4vw] text-white">
                가천OJ 정착 이벤트 시작 임박
              </p>
              <p className="font-PretendardSemiBold text-[1.4vw] text-white mb-[3vh]">
                (행사 마감시까지)
              </p>
            </button>
            <p className="font-PretendardExtraLight text-[0.8vw] text-white">
              가천OJ에서 차근차근 코딩테스트 학습
            </p>
            <div className="space-x-2 mt-[1.6vh]">
              <span className="font-PretendardBold text-[0.7vw] text-white">
                2
              </span>
              <span className="font-PretendardExtraLight text-[0.6vw] text-white">
                |
              </span>
              <span className="font-PretendardExtraLight text-[0.6vw] text-white">
                3
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col h-[16vw] bg-[url('/images/banner/banner_3_img.png')] bg-center bg-no-repeat bg-auto justify-center pl-[18vw]">
            <button
              type="button"
              // onClick={handleClickBannerText}
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
              <span className="font-PretendardBold text-[0.7vw] text-white">
                3
              </span>
              <span className="font-PretendardExtraLight text-[0.6vw] text-white">
                |
              </span>
              <span className="font-PretendardExtraLight text-[0.6vw] text-white">
                3
              </span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
