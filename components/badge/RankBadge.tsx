"use client";
import { rankImageMap } from "@/constants/rankImageMap";
import { rank } from "@/types/rank";
import Image from "next/image";
import React from "react";

export default function RankBadge({ rank }: { rank: number }) {
  const rankImg = rankImageMap[rank as rank];

  return (
    <div>
      <Image src={rankImg} alt="Rank Image" />
    </div>
  );
}
