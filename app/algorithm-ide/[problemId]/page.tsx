import React from "react";
import IdeProblemWindow from "../_components/IdeProblemWindow";
import IdeMain from "../_components/IdeMain";
import IdeGuestFooter from "../_components/IdeGuestFooter";

export default function page({ params }: { params: { problemId: number } }) {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="w-[30vw] h-[89vh] border-[0.12vw]">
          <IdeProblemWindow />
        </div>
        <div className="w-[70vw] h-[89vh] border-[0.12vw]">
          <IdeMain />
        </div>
      </div>
      <IdeGuestFooter />
    </div>
  );
}

{
  /* <span className="font-PretendardMedium text-[1.4vw]">공지사항 조회</span>
      <div>notice num {params.problemId}</div> */
}
