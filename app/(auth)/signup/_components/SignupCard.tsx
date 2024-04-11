import React from "react";
import GachonOJ_logo_image from "@logo/gachonoj_logo.png";
import Image from "next/image";

export default function SignupCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-[50vw] mx-auto mb-[1vh] border-2 border-semiSemiGrey rounded-3xl overflow-hidden shadow-xl">
      <div className="flex bg-primaryGrey h-[12.5vh] items-center drop-shadow-none">
        <div className="w-[16vw] mx-auto">
          <Image src={GachonOJ_logo_image} alt="GachonOJ logo" />
        </div>
      </div>
      <div className="w-[30vw] mx-auto drop-shadow-none">{children}</div>
      <div className="bg-primaryGrey h-[12.5vh] drop-shadow-none" />
    </div>
  );
}
