import React from "react";
import GachonUniv_logo_image from "@images/gachon_univ_image.png";
import Image from "next/image";
import Link from "next/link";

export default function GuestProbCard() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-[9vw] h-[5vh] items-center justify-center border-l-[0.15vw] border-r-[0.15vw] border-semiGrey">
        <div className="w-[7vw]">
          <Image src={GachonUniv_logo_image} alt="GachonUniv logo" />
        </div>
      </div>
      <div
        className="flex flex-col items-center py-[5vh] w-[9vw] h-[60vh] bg-[#2C5094]"
        style={{
          clipPath: "polygon(0% 0%, 0% 100%, 50% 85%, 100% 100%, 100% 0%)",
        }}
      >
        <div className="flex flex-col items-center space-y-[1vh] font-PretendardRegular text-white text-[0.9vw]">
          <span>가천대학교 학우님</span>
          <span>반갑습니다</span>
          <span>지금 바로</span>
          <span>가천 OJ에 로그인하여</span>
          <span>알고리즘 학습을</span>
          <span>시작해보세요!</span>
        </div>
        <Link href="/login" className="mt-[5vh]">
          <div className="flex border-[0.15vw] border-semiGrey rounded-lg w-[7vw] h-[4vh] bg-white text-primaryBlue font-PretendardMedium items-center justify-center">
            로그인
          </div>
        </Link>
        <Link href="/signup" className="mt-[3vh]">
          <div className="flex border-[0.15vw] border-semiGrey rounded-lg w-[7vw] h-[4vh] bg-white text-primaryBlue font-PretendardMedium items-center justify-center">
            가입하기
          </div>
        </Link>
      </div>
    </div>
  );
}
