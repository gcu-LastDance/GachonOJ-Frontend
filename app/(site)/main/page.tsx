import React from "react";
import MainBanner from "./_components/MainBanner";

export default function page() {
  return (
    <div className="flex flex-col mt-[4.5vh] mb-[4.5vh] space-y-[7vh]">
      <MainBanner />
      <div>
        <span>공지사항</span>
      </div>
      <div>
        <span>추천 알고리즘 문제</span>
      </div>
    </div>
  );
}
