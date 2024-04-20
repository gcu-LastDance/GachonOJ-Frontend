import React from "react";

export default function page() {
  return (
    <div className="flex flex-col mt-[4.5vh] mb-[4.5vh]">
      <span className="font-PretendardSemiBold text-[1.8vw] text-primaryDark mb-[3vh]">
        사용자
      </span>
      <div className="flex flex-col">
        <div className="w-[65vw] h-[18vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden">
          프로필 카드
        </div>
        <div className="flex justify-between mt-[4vh]">
          <div className="flex flex-col space-y-[4vh]">
            <div className="w-[13vw] h-[25vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden">
              등급 도우미, 선호 언어 선택, 회원 탈퇴하기
            </div>
            <div className="w-[13vw] h-[30vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden">
              등급 도우미, 선호 언어 선택, 회원 탈퇴하기
            </div>
            <div className="w-[13vw] h-[10vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden">
              등급 도우미, 선호 언어 선택, 회원 탈퇴하기
            </div>
          </div>
          <div className="w-[49vw] h-[73vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden">
            북마크 문제, 도전중인 문제, 해결한 문제
          </div>
        </div>
      </div>
    </div>
  );
}
