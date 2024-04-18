"use client";
import { rankImageMap } from "@/constants/rankImageMap";
import { rank } from "@/types/rank";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

export default function RankBadge({ rank }: { rank: number }) {
  const rankImg = rankImageMap[rank as rank];

  return (
    <div className="w-[2.2vw]">
      <Image src={rankImg} alt="Rank Image" />
    </div>
  );
}
