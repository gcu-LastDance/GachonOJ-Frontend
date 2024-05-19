"use client";

import ReactCodeMirror from "@uiw/react-codemirror";
import React from "react";
import { githubLight } from "@uiw/codemirror-theme-github";

const data = {
  problemTitle: "가천대학교 최장부분수열",
  code: `#include <iostream>`,
};

export default function page() {
  return (
    <div className="flex flex-col mt-[4.5vh] mb-[4.5vh]">
      <span className="font-PretendardSemiBold text-[1.8vw] text-primaryDark mb-[3vh]">
        문의사항
      </span>
      <div className="flex justify-between mt-[3vh]">
        <div className="flex flex-col">
          <p className="font-PretendardMedium text-[1.5vw] text-primaryDark mb-[2vh]">
            나의 풀이
          </p>
          <div className="w-[30vw] h-[60vh] bg-superlightGrey border-[0.15vw] border-semiSemiGrey rounded-[0.7vh] overflow-hidden ">
            <div className="flex h-[6vh] border-b-[0.3vh] border-semiSemiGrey items-center pl-[1vw]">
              <p className="font-PretendardLight">내 정보</p>
            </div>
            <div className="px-[2vw] py-[2.5vh]">
              <ReactCodeMirror
                value={data.code}
                height="55vh"
                theme={githubLight}
                editable={false}
              />
            </div>
          </div>
        </div>
        <div>
          <p className="font-PretendardMedium text-[1.5vw] text-primaryDark mb-[2vh]">
            AI 피드백
          </p>
          <div className="w-[30vw] h-[60vh] bg-superlightGrey border-[0.15vw] border-semiSemiGrey rounded-[0.7vh] overflow-hidden">
            <div className="flex h-[6vh] border-b-[0.3vh] border-semiSemiGrey items-center pl-[1vw]">
              <p className="font-PretendardLight">AI</p>
            </div>
            <div className="px-[3vw] py-[3.5vh]">
              피드백 텍스트 자리 + 더 알고싶어요 + 기록 삭제하기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
