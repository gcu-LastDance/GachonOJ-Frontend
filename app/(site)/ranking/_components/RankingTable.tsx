"use client";

import RankBadge from "@/components/badge/RankBadge";
import PaginationBar from "@/components/pagination/PaginationBar";
import columnHelper from "@/lib/columnHelper";
import { RankingTableData } from "@/types/member";
import { rank } from "@/types/rank";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";

export const ranking_table_data: RankingTableData[] = [
  {
    id: 1,
    nickname: "gachonCodeKing",
    rank: 5,
    rankExp: 12000,
    solvedProb: 150,
  },
  {
    id: 2,
    nickname: "성적우수장학금 헌터",
    rank: 5,
    rankExp: 11500,
    solvedProb: 145,
  },
  { id: 3, nickname: "SurVeine", rank: 4, rankExp: 11000, solvedProb: 140 },
  {
    id: 4,
    nickname: "심화프로그래밍",
    rank: 3,
    rankExp: 10500,
    solvedProb: 135,
  },
  { id: 5, nickname: "macbookpro", rank: 3, rankExp: 10000, solvedProb: 130 },
  { id: 6, nickname: "batton", rank: 2, rankExp: 9500, solvedProb: 125 },
  {
    id: 7,
    nickname: "가천대라곰빈백도둑",
    rank: 2,
    rankExp: 9000,
    solvedProb: 120,
  },
  { id: 8, nickname: "학식메뉴봇", rank: 1, rankExp: 8500, solvedProb: 115 },
  { id: 9, nickname: "graph", rank: 1, rankExp: 8000, solvedProb: 110 },
  { id: 10, nickname: "PDSS", rank: 0, rankExp: 7500, solvedProb: 105 },
];

const columns: ColumnDef<RankingTableData, any>[] = [
  columnHelper("rank", {
    header: "등급",
    cell: (value) => (
      <div className="flex justify-center">
        <div className="w-[2vw]">
          <RankBadge rank={value as rank} />
        </div>
      </div>
    ),
  }),
  columnHelper("nickname", {
    header: "닉네임",
  }),
  columnHelper("rankExp", {
    header: "등급 경험치",
  }),
  columnHelper("solvedProb", {
    header: "푼 문제 수",
  }),
];

export default function RankingTable() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [data, setData] = useState<RankingTableData[]>(ranking_table_data);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col">
      <div className="h-[5.5vh] my-[1.5vh] mx-[1.5vw] flex items-end">
        <div className="flex ml-auto border-[0.1vw] border-realGrey h-[5vh] w-[12vw] rounded-lg px-[0.5vw] space-x-[0.3vw] items-center">
          <IoMdSearch className="text-[1vw] text-primaryDark" />
          <input
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="닉네임으로 검색해보세요"
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
                    header.id === "nickname"
                      ? "text-left w-[16vw] pl-[3vw]"
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
                  key={cell.column.id}
                  className={`${
                    cell.column.id === "nickname"
                      ? "text-left pl-[3vw]"
                      : "text-center"
                  }  text-[0.95vw] font-PretendardLight text-realGrey`}
                >
                  {cell.column.id === "title" ? (
                    <Link href={`/notice/${row.original.id}`}>
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
