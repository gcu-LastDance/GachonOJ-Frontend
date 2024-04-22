import { RatingData } from "@/types/member";
import React from "react";

const rating_helper_data: RatingData = {
  currentExp: 1000,
  nextExp: 2000,
  consecutiveSolvedDate: 0,
};

export default function RatingHelperCard() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center my-[4vh] space-y-[1vh]">
        <span className="font-PretendardLight text-realGrey text-[0.9vw]">
          현재 경험치 : {rating_helper_data.currentExp}
        </span>
        <span className="font-PretendardLight text-realGrey text-[0.9vw]">
          승급 필요 경험치 : {rating_helper_data.nextExp}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <span className="font-PretendardRegular text-primaryDark text-[0.9vw]">
            현재
          </span>
          <span className="font-PretendardBold text-primaryBlue text-[1vw] mx-[0.4vw]">
            {rating_helper_data.consecutiveSolvedDate}
          </span>
          <span className="font-PretendardRegular text-primaryDark text-[0.9vw]">
            일 연속 해결
          </span>
        </div>
        <span className="font-PretendardRegular text-primaryDark text-[0.9vw]">
          대단합니다!
        </span>
      </div>
    </div>
  );
}
