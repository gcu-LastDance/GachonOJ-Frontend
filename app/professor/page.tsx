import React from "react";
import OngoingExams from "./_components/OngoingExams";
import GachonOJShortCut from "./_components/GachonOJShortCut";
import IncorrectRate from "./_components/IncorrectRateQuestions";
import IncorrectAlgorithm from "./_components/IncorrectAlgorithm";
import GuideShortCut from "./_components/GuideShortCut";
import Link from "next/link";
import LanguageGraph from "./_components/LanguageGraph";

export default function page() {
  return (
    <div className="p-10">
      <div className="flex flex-col">
        <div className="border-black border-t-0 border-l-0 border-r-0 border-b-2 text-4xl mb-10 pb-5 font-PretendardExtraBold">
          <div>안녕하세요 교수님</div>
          <div>가천OJ 교수님 전용 관리 페이지입니다.</div>
        </div>
        <div className="flex flex-auto space-x-3 ">
          <div className="flex-col space-y-3 w-3/4">
            <div className="w-full">
              <div className="">
                <OngoingExams />
              </div>
            </div>
            <div className="">
              <div className="flex space-x-3 w-full">
                <div className="w-5/6">
                  <IncorrectRate />
                </div>
                <div className="w-1/6">
                  <GuideShortCut />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-auto space-y-3 w-1/4">
            <Link href="/main">
              <div className="">
                <GachonOJShortCut />
              </div>
            </Link>
            <div className="h-96">
              <LanguageGraph />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
