"use client";

import { problemTableGuestAPI } from "@/api/problemAPI";
import DiffBadge from "@/components/badge/DiffBadge";
import CategoryButton from "@/components/button/CategoryButton";
import PaginationBar from "@/components/pagination/PaginationBar";
import columnHelper from "@/lib/columnHelper";
import useUserStore from "@/store/useUserStore";
import { ProblemTableData, difficulty } from "@/types/problem";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

// export const prob_table_data: ProblemTableData[] = [
//   {
//     id: 1,
//     title: "영희의 대중교통 여행 이야기",
//     difficulty: 1,
//     category: ["Array"],
//     correct: 150,
//     correctRate: 75.5,
//     isBookmarked: true,
//   },
//   {
//     id: 2,
//     title: "철수의 버스 노선도",
//     difficulty: 2,
//     category: ["Linked List"],
//     correct: 120,
//     correctRate: 60.5,
//     isBookmarked: false,
//   },
//   {
//     id: 3,
//     title: "기찻길",
//     difficulty: 3,
//     category: ["String", "Hash Table"],
//     correct: 200,
//     correctRate: 85.0,
//     isBookmarked: true,
//   },
//   {
//     id: 4,
//     title: "디자인 딜레마",
//     difficulty: 4,
//     category: ["Array", "Divide and Conquer"],
//     correct: 100,
//     correctRate: 50.0,
//     isBookmarked: false,
//   },
//   {
//     id: 5,
//     title: "게임이론",
//     difficulty: 2,
//     category: ["String", "Dynamic Programming"],
//     correct: 180,
//     correctRate: 90.2,
//     isBookmarked: true,
//   },
//   {
//     id: 6,
//     title: "영희의 일본 여행 이야기",
//     difficulty: 2,
//     category: ["String"],
//     correct: 110,
//     correctRate: 55.0,
//     isBookmarked: false,
//   },
//   {
//     id: 7,
//     title: "조깅시간!",
//     difficulty: 0,
//     category: ["Math"],
//     correct: 300,
//     correctRate: 95.0,
//     isBookmarked: true,
//   },
//   {
//     id: 8,
//     title: "신도시 계획",
//     difficulty: 3,
//     category: ["String", "Math"],
//     correct: 130,
//     correctRate: 65.0,
//     isBookmarked: false,
//   },
//   {
//     id: 9,
//     title: "실적발표",
//     difficulty: 1,
//     category: ["Math"],
//     correct: 250,
//     correctRate: 88.3,
//     isBookmarked: true,
//   },
//   {
//     id: 10,
//     title: "커뮤니티 게임",
//     difficulty: 4,
//     category: ["String", "Dynamic Programming"],
//     correct: 75,
//     correctRate: 37.5,
//     isBookmarked: false,
//   },
// ];

const columns: ColumnDef<ProblemTableData, any>[] = [
  columnHelper("problemDiff", {
    header: "난이도",
    cell: (value) => (
      <div className="flex justify-center">
        <DiffBadge difficulty={value as difficulty} />
      </div>
    ),
  }),
  columnHelper("problemTitle", {
    header: "문제 제목",
  }),
  columnHelper("problemClass", {
    header: "분류",
    cell: (value) => (
      <div className="flex justify-center">
        <CategoryButton categories={value as string} />
      </div>
    ),
  }),
  columnHelper("correctPeople", {
    header: "정답자 수",
  }),
  columnHelper("correctRate", {
    header: "정답률",
  }),
  columnHelper("isBookmarked", {
    header: "북마크",
  }),
];

export default function ProblemTable() {
  const { token } = useUserStore();
  const [pageNum, setPageNum] = useState<number>(1);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [classType, setClassType] = useState<string>("");
  const [diff, setDiff] = useState<difficulty>();
  const [sortType, setSortType] = useState<string>("");

  const {
    data: problemData,
    isLoading,
    isError,
    error,
  } = useQuery<ProblemTableData[]>({
    queryKey: [
      "problemTableGuest",
      pageNum,
      searchKeyword,
      classType,
      diff,
      sortType,
    ],
    queryFn: () =>
      problemTableGuestAPI({
        pageNum,
        searchKeyword,
        classType,
        diff,
        sortType,
      }),
  });

  const [data, setData] = useState<ProblemTableData[]>(problemData ?? []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col">
      <div className="h-[5.5vh] my-[1.5vh] mx-[1.5vw] flex items-end">
        <div className="flex space-x-[1.1vw]">
          <button
            type="button"
            className="w-[10vw] h-[4vh] border-[0.12vw] rounded-xl border-realGrey bg-superlightGrey font-PretendardRegular text-[0.9vw] flex justify-center items-center"
          >
            난이도 오름차순
          </button>
          <button
            type="button"
            className="w-[7vw] h-[4vh] border-[0.12vw] rounded-xl border-realGrey bg-superlightGrey font-PretendardRegular text-[0.9vw] flex justify-center items-center"
          >
            난이도 선택
          </button>
          <button
            type="button"
            className="w-[7vw] h-[4vh] border-[0.12vw] rounded-xl border-realGrey bg-superlightGrey font-PretendardRegular text-[0.9vw] flex justify-center items-center"
          >
            분류 선택
          </button>
        </div>
        <div className="flex ml-auto border-[0.1vw] border-realGrey h-[5vh] w-[12vw] rounded-lg px-[0.5vw] space-x-[0.3vw] items-center">
          <IoMdSearch className="text-[1vw] text-primaryDark" />
          <input
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="문제 제목을 검색해보세요"
            className="placeholder-semiGrey placeholder-PretendardRegular text-[0.85vw] focus:outline-none w-[9vw] h-[4vh]"
          />
        </div>
      </div>
      <table className="w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="h-[5vh] border-b-[0.1vh] border-semiGrey font-PretendardSemiBold text-darkGrey text-[0.95vw]"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={`${
                    header.id === "title"
                      ? "text-left w-[16vw]"
                      : "text-center w-[11w]"
                  }`}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="h-[5vh] border-b-[0.1vh] border-semiGrey font-PretendardSemiBold text-darkGrey text-[1.1vw]"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={`${
                    cell.column.id === "title" ? "text-left" : "text-center"
                  } ${
                    cell.column.id === "category" && "w-[8vw]"
                  } text-[0.95vw] font-PretendardLight text-realGrey`}
                >
                  {cell.column.id === "title" ? (
                    <Link href={`/algorithm-ide/1`}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Link>
                  ) : (
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-[2.3vh]">
        <PaginationBar />
      </div>
    </div>
  );
}
