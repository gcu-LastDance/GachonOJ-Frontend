import React from "react";

export default function page() {
  return (
    <div className="flex flex-col mt-[4.5vh] mb-[4.5vh]">
      <span className="font-PretendardSemiBold text-[1.8vw] text-primaryDark mb-[3vh]">
        문의사항
      </span>
      <div className="flex flex-col">
        <div className="w-[65vw] h-[70vh] bg-superlightGrey border-2 border-semiSemiGrey rounded-lg overflow-hidden px-[3vw] py-[3.5vh]">
          <span className="font-PretendardMedium text-[1.4vw]">문의 내역</span>
        </div>
      </div>
    </div>
  );
}
