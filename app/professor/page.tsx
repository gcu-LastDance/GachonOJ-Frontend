import React from "react";
import OngoingExams from "./_components/OngoingExams";
import GachonOJShortCut from "./_components/GachonOJShortCut";
import IncorrectRate from "./_components/IncorrectRateQuestions";
import IncorrectAlgorithm from "./_components/IncorrectAlgorithm";
import GuideShortCut from "./_components/GuideShortCut";
// import LanguageGraph from "./_components/LanguageGraph";

export default function page() {
  return (
    <div className="p-10">
      <div className="border-black border-t-0 border-l-0 border-r-0 border-b-2 text-4xl mb-10 pb-5 font-PretendardExtraBold">
        <div>안녕하세요 교수님</div>
        <div>가천OJ 교수님 전용 관리 페이지입니다.</div>
      </div>
      <div className="flex">
        <div className="mr-3 flex-auto w-3/4">
          <div className="mb-3 w-full h-1/3 ">
            <div className="h-full">
              <OngoingExams />
            </div>
          </div>
          <div className="mb-3">
            <div className="flex w-full h-1/3">
              <div className="w-5/6 mr-3">
                <IncorrectRate />
              </div>
              <div className="w-1/6">
                <GuideShortCut />
              </div>
            </div>
          </div>
          <div className="w-full h-1/3">
            <IncorrectAlgorithm />
          </div>
        </div>

        <div className="flex-wrap w-1/4">
          <div className="mb-3">
            <GachonOJShortCut />
          </div>
          <div className="w-full h-max">{/* <LanguageGraph/> */}</div>
        </div>
      </div>
    </div>
  );
}
