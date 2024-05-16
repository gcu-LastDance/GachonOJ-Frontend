import React from "react";
import GachonOJ_logo_image from "@logo/gachonoj_logo.png";
import Image from "next/image";

const GachonOJShortCut = () => {
  return (
   
      <div className="flex items-center justify-center shadow-md border-semiGrey border-4 bg-white px-5 py-5">
        <div className="w-fit">
          <Image src={GachonOJ_logo_image} alt="GachonOJ logo" />
        </div>
        <div className="shrink-0 text-lg ml-5 font-PretendardBold">바로가기</div>
      </div>
   
  );
};

export default GachonOJShortCut;
