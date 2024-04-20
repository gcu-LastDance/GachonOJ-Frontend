import React from "react";

export default function page() {
  return (
    <div className="flex flex-col mt-[4.5vh] mb-[4.5vh]">
      <span className="font-PretendardSemiBold text-[1.8vw] text-primaryDark mb-[3vh]">
        시험
      </span>
      <div className="flex flex-col">
        <div className="w-[65vw] h-[18vh] bg-white border-2 border-semiSemiGrey rounded-lg overflow-hidden">
          시험 페이지입니다.
        </div>
      </div>
    </div>
  );
}
