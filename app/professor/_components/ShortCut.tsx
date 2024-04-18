import React from "react";
import GachonOJ_logo_image from "@logo/gachonoj_logo.png";
import Image from "next/image";

const ShortCut = () => {
  return (
    <div>
      <div className="flex items-center w-fit shadow-md  border-semigrey border-4 bg-white px-7 py-7">
        <div className="w-[16vw]">
          <Image src={GachonOJ_logo_image} alt="GachonOJ logo" />
        </div>
        <div className="text-lg ml-5 font-PretendardBold">바로가기</div>
      </div>
    </div>
  );
};

export default ShortCut;
