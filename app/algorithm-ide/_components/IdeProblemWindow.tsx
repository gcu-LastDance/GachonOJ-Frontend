import DiffBadge from "@/components/badge/DiffBadge";
import { ProblemDetailData } from "@/types/problem";
import React from "react";

const problem_data: ProblemDetailData = {
  id: 1,
  title: "후위표기식 변환",
  problemText:
    "가천이는 최근 정보처리기사를 준비하면서 저학년때 배웠던 후위표기식을 다시 만나게 되었다. 가천이는 기억이 가물가물하여 자신이 수행한 후위표기식이 올바른지 혼자 확인할 수 없으므로, 가천이를 돕기 위해 올바른 후위표기식 변환값을 알려주자",
  difficulty: "1단계",
  inputInfo: "후위표기식이 str이 주어진다.",
  outputInfo: "올바른 후위표기식 변환값 answer을 출력한다.",
  examples: [
    {
      input: "A*(B+C)",
      output: "ABC+*",
    },
    {
      input: "A-B",
      output: "AB-",
    },
  ],
};

export default function IdeProblemWindow() {
  return (
    <div className="flex flex-col px-[1vw] py-[3vh]">
      <div className="flex items-center">
        <DiffBadge difficulty={problem_data.difficulty} />
        <p className="font-PretendardBold text-primaryDeepBlue text-[1.5vw] ml-[0.8vw]">
          {problem_data.title}
        </p>
      </div>
      <span className="font-PretendardLight text-primaryDark text-[0.9vw] mt-[1.5vh]">
        {problem_data.problemText}
      </span>
      <p className="font-PretendardMedium text-primaryDark text-[1.3vw] mt-[8vh]">
        입력
      </p>
      <span className="font-PretendardLight text-primaryDark text-[0.9vw] mt-[1vh]">
        {problem_data.inputInfo}
      </span>
      <p className="font-PretendardMedium text-primaryDark text-[1.3vw] mt-[4vh]">
        출력
      </p>
      <span className="font-PretendardLight text-primaryDark text-[0.9vw] mt-[1vh]">
        {problem_data.outputInfo}
      </span>
      <p></p>
    </div>
  );
}
