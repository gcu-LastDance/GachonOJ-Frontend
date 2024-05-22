"use client";

import ModalLarge from "@/components/modal/ModalLarge";
import { useProgramLangStore } from "@/store/useProgramLangStore";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const router = useRouter();
  const { programLang, setProgramLang } = useProgramLangStore();
  const [memberProgramLangData, setMemberProgramLangData] =
    useState(programLang);

  const handleLangChangeCommit = () => {
    setProgramLang(memberProgramLangData);
    router.back();
  };

  return (
    <ModalLarge>
      <div className="flex flex-col items-center py-[5.5vh]">
        <p className="font-PretendardBold text-primaryDark text-[1.5vw]">
          IDE 설정
        </p>
        <div className="flex flex-col font-PretendardRegular text-realGrey text-[0.9vw] mt-[4vh] items-center">
          <form className="flex space-x-[2.5vw] my-[4.5vh]">
            <div className="flex space-x-[0.3vw]">
              <span>C</span>
              <input
                type="radio"
                value={"C"}
                checked={memberProgramLangData === "C"}
                onChange={() => setMemberProgramLangData("C")}
                className="appearance-none border-[1px] border-semiGrey rounded-full w-5 h-5 ml-[1vw] align-middle bg-white checked:bg-primaryBlue checked:border-[0.19vw]"
              />
            </div>
            <div className="flex space-x-[0.3vw]">
              <span>C++</span>
              <input
                type="radio"
                value={"CPP"}
                checked={memberProgramLangData === "CPP"}
                onChange={() => setMemberProgramLangData("CPP")}
                className="appearance-none border-[1px] border-semiGrey rounded-full w-5 h-5 ml-[1vw] align-middle bg-white checked:bg-primaryBlue checked:border-[0.19vw]"
              />
            </div>
            <div className="flex space-x-[0.3vw]">
              <span>Java</span>
              <input
                type="radio"
                value={"JAVA"}
                checked={memberProgramLangData === "JAVA"}
                onChange={() => setMemberProgramLangData("JAVA")}
                className="appearance-none border-[1px] border-semiGrey rounded-full w-5 h-5 ml-[1vw] align-middle bg-white checked:bg-primaryBlue checked:border-[0.19vw]"
              />
            </div>
            <div className="flex space-x-[0.3vw]">
              <span>Python</span>
              <input
                type="radio"
                value={"PYTHON"}
                checked={memberProgramLangData === "PYTHON"}
                onChange={() => setMemberProgramLangData("PYTHON")}
                className="appearance-none border-[1px] border-semiGrey rounded-full w-5 h-5 ml-[1vw] align-middle bg-white checked:bg-primaryBlue checked:border-[0.19vw]"
              />
            </div>
          </form>
        </div>
        <span className="text-[0.9vw] font-PretendardRegular text-realGrey mt-[3vh]">
          언어를 변경하면 기존에 작성된 코드가 삭제될 수 있습니다
        </span>
        <div className="flex space-x-[2vw] mt-[8vh]">
          <button
            type="button"
            onClick={() => {
              router.back();
            }}
            className="flex border-[0.15vw] border-primaryBlue bg-white w-[10vw] h-[4vh] items-center justify-center rounded-[0.2vw]"
          >
            <span className="text-primaryBlue font-PretendardSemiBold text-[0.85vw]">
              취소
            </span>
          </button>
          <button
            type="button"
            onClick={handleLangChangeCommit}
            className="flex border-[0.15vw] border-primaryBlue bg-primaryBlue w-[10vw] h-[4vh] items-center justify-center rounded-[0.2vw]"
          >
            <span className="text-white font-PretendardSemiBold text-[0.85vw]">
              저장
            </span>
          </button>
        </div>
      </div>
    </ModalLarge>
  );
}
