import { rank } from "@/types/rank";
import Rank0Image from "@images/rank/rank0.png";
import Rank1Image from "@images/rank/rank1.png";
import Rank2Image from "@images/rank/rank2.png";
import Rank3Image from "@images/rank/rank3.png";
import Rank4Image from "@images/rank/rank4.png";
import Rank5Image from "@images/rank/rank5.png";
import { StaticImageData } from "next/image";

export const rankImageMap: Record<rank, StaticImageData> = {
  0: Rank0Image,
  1: Rank1Image,
  2: Rank2Image,
  3: Rank3Image,
  4: Rank4Image,
  5: Rank5Image,
};
