import RecProblemCard from "@/components/\bcard/RecProblemCard";
import { RecProblemData } from "@/types/problem";
import React from "react";

// id: number;
//   title: string;
//   difficulty: difficulty;
//   category?: string[];

const main_table_data: RecProblemData[] = [
  {
    id: 1,
    title: "가천대역 길찾기",
    difficulty: 0,
    category: ["그래프 이론", "다익스트라"],
  },
  {
    id: 2,
    title: "가천대역 길찾기",
    difficulty: 1,
    category: ["그래프 이론", "DFS", "BFS"],
  },
  {
    id: 3,
    title: "가천대역 길찾기",
    difficulty: 2,
    category: ["그래프 이론", "DFS", "BFS"],
  },
  {
    id: 4,
    title: "가천대역 길찾기",
    difficulty: 3,
    category: ["그래프 이론", "다익스트라"],
  },
  {
    id: 5,
    title: "가천대역 길찾기",
    difficulty: 4,
    category: ["그래프 이론", "다익스트라"],
  },
  {
    id: 6,
    title: "가천대역 길찾기",
    difficulty: 1,
    category: ["다이나믹프로그래밍"],
  },
];

export default function MainProblem() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-y-[4vh] gap-x-[3vw] ml-[3vw] my-[4vh]">
      {main_table_data.map((data) => (
        <RecProblemCard key={data.id} data={data} />
      ))}
    </div>
  );
}
