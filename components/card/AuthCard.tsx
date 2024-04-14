import React from "react";
import GachonOJ_logo_image from "@logo/gachonoj_logo.png";
import Image from "next/image";

export default function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[45vw] mx-auto mb-[1vh] border-2 border-semiSemiGrey rounded-3xl overflow-hidden shadow-xl">
      <div className="flex bg-white h-[20vh] items-center drop-shadow-none">
        <div className="w-[16vw] mx-auto mt-[10vh]">
          <Image src={GachonOJ_logo_image} alt="GachonOJ logo" />
        </div>
      </div>
      <div className="w-[30vw] mx-auto drop-shadow-none">{children}</div>
      <div className="bg-white h-[10vh] drop-shadow-none" />
    </div>
  );
}
