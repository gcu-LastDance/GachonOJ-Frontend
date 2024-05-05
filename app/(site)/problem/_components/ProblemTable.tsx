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

  const { data: problemData } = useQuery<ProblemTableData[]>({
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

  const table = useReactTable({
    data: problemData || [],
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
                    header.id === "problemTitle"
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
                    cell.column.id === "problemTitle"
                      ? "text-left"
                      : "text-center"
                  } ${
                    cell.column.id === "problemClass" && "w-[8vw]"
                  } text-[0.95vw] font-PretendardLight text-realGrey`}
                >
                  {cell.column.id === "problemTitle" ? (
                    <Link href={`/algorithm-ide/${row.original.problemId}`}>
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
