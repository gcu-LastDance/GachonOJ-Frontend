import { RatingHelperData } from "@/types/member";
import React from "react";

export default function RatingHelperCard({ data }: { data: RatingHelperData }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center my-[4vh] space-y-[1vh]">
        <span className="font-PretendardLight text-realGrey text-[0.9vw]">
          현재 경험치 : {data?.memberRank}
        </span>
        <span className="font-PretendardLight text-realGrey text-[0.9vw]">
          승급 필요 경험치 : {data?.needRank}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <span className="font-PretendardRegular text-primaryDark text-[0.9vw]">
            얼마 남지 않았어요
          </span>
        </div>
        <span className="font-PretendardRegular text-primaryDark text-[0.9vw]">
          오늘도 화이팅입니다!
        </span>
      </div>
    </div>
  );
}
