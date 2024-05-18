"use client";

import SiteFooter from "@/components/footer/SiteFooter";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FullpageContainer,
  FullpageSection,
} from "@shinyongjun/react-fullpage";
import "@shinyongjun/react-fullpage/css";
import LandingHeader from "./_components/LandingHeader";
import GachonOJLogoImg from "@/public/images/logo/gachonoj_logo.png";
import Image from "next/image";
import LandingProbImg from "@/public/images/landing/landing_prob_image.png";
import LandingRankImg from "@/public/images/landing/landing_rank_image.png";
import LandingIdeImg from "@/public/images/landing/landing_ide_image.png";
import LandingTestImg from "@/public/images/landing/landing_test_image.png";
import LandingMonitoringImg from "@/public/images/landing/landing_monitoring_image.png";
import TextTypingAni from "./_components/TextTypingAni";
import Link from "next/link";
import { RiArrowDownWideLine } from "react-icons/ri";

export default function page() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div>
      <LandingHeader activeIndex={activeIndex} />
      <FullpageContainer
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        transitionDuration={600}
      >
        <FullpageSection>
          <div className="flex w-screen font-PretendardExtraBold text-[3.7vw] items-center justify-center text-white space-y-[4vh] bg-gradient-to-b from-primaryBlue to-[#eceff7] pb-[20vh]">
            <div className="flex flex-col items-center justify-center">
              <p style={{ textShadow: "0.15rem 0.15rem 0.3rem #676771" }}>
                가천대학교만의
              </p>
              <p style={{ textShadow: "0.15rem 0.15rem 0.3rem #676771" }}>
                Web IDE 기반 학습 서비스
              </p>
              <button
                type="button"
                onClick={() => setActiveIndex(1)}
                className="fixed z-50 bottom-[10vh]"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.2 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RiArrowDownWideLine className="text-white text-[6vw] animate-bounce" />
                </motion.div>
              </button>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className="flex w-screen items-center justify-center pb-[16vh] bg-gradient-to-b from-[#eceff7] to-white tracking-wider space-x-[6vw] backdrop-opacity-30">
            <div className="w-[50vw]">
              {activeIndex === 1 && (
                <TextTypingAni
                  text={`/**\n \tProjectName\n GachonOJ\n \n ProjectIntro\n 이제 가천 OnlineJudge에서\n 코딩 테스트를 준비하고 \n 프로그래밍 수업의 정기고사를 응시해보세요 \n */`}
                />
              )}
            </div>
            <div className="w-[20vw] pt-[2vh]">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="flex flex-col space-y-[5vh]"
              >
                <Link
                  href="/main"
                  className="border-[0.3vw] bg-white border-primaryBlue rounded-[0.4vw] w-[12vw] h-[4vw] flex items-center justify-center font-PretendardSemiBold text-[1.2vw] text-primaryBlue shadow-lg hover:border-primaryDeepBlue hover:text-primaryDeepBlue"
                >
                  서비스 바로가기
                </Link>
                <button
                  onClick={() => setActiveIndex(2)}
                  className="bg-primaryBlue rounded-[0.4vw] w-[12vw] h-[4vw] flex items-center justify-center font-PretendardSemiBold text-[1.4vw] text-white hover:bg-primaryDeepBlue shadow-lg"
                >
                  더 알아보기
                </button>
              </motion.div>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className="flex justify-between items-center mx-auto space-x-[6vw] pb-[18vh]">
            <div>
              <p className="font-PretendardBold text-[1vw] text-primaryBlue tracking-wide">
                알고리즘 문제 학습
              </p>
              <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
                다양한 문제를 풀고
              </p>
              <p>
                <span className="font-PretendardExtraBold text-[2.5vw] text-primaryBlue tracking-wide">
                  AI 피드백
                </span>
                <span className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
                  으로
                </span>
              </p>
              <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
                확실하게 마무리
              </p>
              <Link
                href="/problem"
                className="border-[0.3vw] bg-white border-primaryBlue rounded-[0.4vw] w-[8vw] h-[3vw] flex items-center justify-center font-PretendardSemiBold text-[1vw] text-primaryBlue shadow-lg hover:border-primaryDeepBlue hover:text-primaryDeepBlue mt-[2vh]"
              >
                문제 바로가기
              </Link>
            </div>

            <div className="w-[35vw]">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                <Image src={LandingProbImg} alt="landing_prob_image" />
              </motion.div>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className="flex justify-between items-center mx-auto space-x-[6vw] pb-[18vh]">
            <div className="w-[25vw]">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                <Image src={LandingRankImg} alt="landing_prob_image" />
              </motion.div>
            </div>
            <div className="flex flex-col items-end">
              <p className="font-PretendardBold text-[1vw] text-primaryBlue tracking-wide">
                문제 해결 티어와 랭킹, 코드 비교
              </p>
              <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
                우리 학교 학생들과 함께
              </p>
              <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
                알고리즘 문제풀이
              </p>
              <Link
                href="/ranking"
                className="border-[0.3vw] bg-white border-primaryBlue rounded-[0.4vw] w-[8vw] h-[3vw] flex items-center justify-center font-PretendardSemiBold text-[1vw] text-primaryBlue shadow-lg hover:border-primaryDeepBlue hover:text-primaryDeepBlue mt-[2vh]"
              >
                랭킹 바로가기
              </Link>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className="flex justify-between items-center mx-auto space-x-[8vw] pb-[12vh]">
            <div>
              <p className="font-PretendardBold text-[1vw] text-primaryBlue tracking-wide">
                웹 IDE
              </p>
              <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
                코드 실행이 가능한
              </p>
              <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
                웹 IDE 환경 제공
              </p>
              <p className="font-PretendardSemiBold text-[1.1vw] text-realGrey tracking-wider">
                다크 모드 지원
              </p>
              <p className="font-PretendardSemiBold text-[1.1vw] text-realGrey tracking-wider">
                별도의 시험, 대회용 IDE 추가 제공
              </p>
              <Link
                href="/problem"
                className="border-[0.3vw] bg-white border-primaryBlue rounded-[0.4vw] w-[8vw] h-[3vw] flex items-center justify-center font-PretendardSemiBold text-[1vw] text-primaryBlue shadow-lg hover:border-primaryDeepBlue hover:text-primaryDeepBlue mt-[2vh]"
              >
                문제 풀러가기
              </Link>
            </div>
            <div className="w-[35vw]">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                <Image src={LandingIdeImg} alt="landing_prob_image" />
              </motion.div>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className="flex justify-between items-center mx-auto space-x-[9vw] pb-[18vh]">
            <div className="w-[20vw]">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                <Image src={LandingTestImg} alt="landing_prob_image" />
              </motion.div>
            </div>
            <div className="flex flex-col items-end">
              <p className="font-PretendardBold text-[1vw] text-primaryBlue tracking-wide">
                시험과 대회
              </p>
              <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
                교내 프로그래밍 정기고사,
              </p>
              <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
                교내 알고리즘 콘테스트 지원
              </p>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className="flex justify-between items-center mx-auto space-x-[10vw] pb-[16vh]">
            <div>
              <p className="font-PretendardBold text-[1vw] text-primaryBlue tracking-wide">
                문제 해결 랭킹, 코드 비교
              </p>
              <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
                직관적이고 편리한
              </p>
              <p className="font-PretendardBold text-[2vw] text-primaryDark tracking-wider">
                시험 기능
              </p>
              <p className="font-PretendardSemiBold text-[1.1vw] text-realGrey tracking-wider">
                시험 생성부터 학생 관리,
              </p>
              <p className="font-PretendardSemiBold text-[1.1vw] text-realGrey tracking-wider">
                시험 결과 확인부터 모니터링까지
              </p>
            </div>
            <div className="w-[27vw]">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                <Image src={LandingMonitoringImg} alt="landing_prob_image" />
              </motion.div>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection>
          <div className="w-screen bg-gradient-to-t from-primaryBlue to-white flex flex-col">
            <div className="w-[28vw] mx-auto my-auto">
              <Image src={GachonOJLogoImg} alt="GachonOJ Logo Image" />
            </div>
            <div className="flex flex-col justify-end font-PretendardThin text-[0.9vw] text-semiSemiGrey items-end mr-[1vw] mb-[8.5vh]">
              <p>2024 가천대학교 컴퓨터공학과</p>
              <p>종합프로젝트 이병문 교수님 졸업작품</p>
              <p>나민혁 정현진 은현수 조기헌</p>
              <p>이병문 교수님과 김창복 교수님께 감사를 드립니다.</p>
            </div>
          </div>
        </FullpageSection>
        <div className="h-[35vh]">
          <SiteFooter />
        </div>
      </FullpageContainer>
    </div>
  );
}
