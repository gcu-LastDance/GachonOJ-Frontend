import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col mt-[4.5vh] mb-[4.5vh]">
      <span className="font-PretendardSemiBold text-[1.8vw] text-primaryDark mb-[3vh]">
        문의사항
      </span>
      <div className="flex flex-col">
        <div className="w-[65vw] h-[70vh] bg-superlightGrey border-2 border-semiSemiGrey rounded-lg overflow-hidden px-[3vw] py-[3.5vh]">
          {children}
        </div>
      </div>
    </div>
  );
}
