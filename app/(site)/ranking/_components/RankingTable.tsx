"use client";

import DiffBadge from "@/components/badge/DiffBadge";
import RankBadge from "@/components/badge/RankBadge";
import CategoryButton from "@/components/button/CategoryButton";
import { RankingTableColumn, RankingTableData } from "@/types/member";
import { rank } from "@/types/rank";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useTable } from "react-table";

export const ranking_table_data: RankingTableData[] = [
  { id: 1, nickname: "CodeMaster", rank: 1, rankExp: 12000, solvedProb: 150 },
  { id: 2, nickname: "AlgR1an", rank: 2, rankExp: 11500, solvedProb: 145 },
  { id: 3, nickname: "DebugDwarf", rank: 3, rankExp: 11000, solvedProb: 140 },
  { id: 4, nickname: "BinaryBard", rank: 4, rankExp: 10500, solvedProb: 135 },
  { id: 5, nickname: "VarViking", rank: 4, rankExp: 10000, solvedProb: 130 },
  { id: 6, nickname: "LoopLion", rank: 5, rankExp: 9500, solvedProb: 125 },
  { id: 7, nickname: "FunctionFury", rank: 0, rankExp: 9000, solvedProb: 120 },
  { id: 8, nickname: "MethodMage", rank: 0, rankExp: 8500, solvedProb: 115 },
  { id: 9, nickname: "ClassCleric", rank: 0, rankExp: 8000, solvedProb: 110 },
  { id: 10, nickname: "ScriptSage", rank: 0, rankExp: 7500, solvedProb: 105 },
];

const ranking_table_columns: RankingTableColumn[] = [
  {
    Header: "등급",
    accessor: "rank",
    Cell: ({ value }: { value: rank }) => (
      <div className="flex justify-center">
        <RankBadge rank={value} />
      </div>
    ),
  },
  { Header: "닉네임", accessor: "nickname" },
  { Header: "등급 경험치", accessor: "rankExp" },
  { Header: "푼 문제 수", accessor: "solvedProb" },
];

export default function RankingTable() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: ranking_table_columns, data: ranking_table_data });

  return (
    <div className="flex flex-col">
      <div className="h-[5.5vh] my-[1.5vh] mx-[1.5vw] flex items-end">
        <div className="relative ml-auto">
          <input
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="닉네임으로 검색해보세요"
            className="h-[5vh] w-[12vw] border-[0.1vw] border-realGrey pl-[2vw] pr-[0.5vw] placeholder-semiGrey placeholder-PretendardRegular text-[0.85vw] rounded-lg"
          />
          <IoMdSearch className="absolute top-[1.5vh] left-[0.4vw]" />
        </div>
      </div>
      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={index}
              className="h-[5vh] border-b-[0.1vh] border-semiGrey font-PretendardSemiBold text-darkGrey text-[0.95vw]"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id}
                  className={`${
                    column.id === "nickname"
                      ? "text-left w-[16vw] pl-[3vw]"
                      : "text-center w-[11w]"
                  }`}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={row.id}
                className="h-[5vh] border-b-[0.1vh] border-semiGrey font-PretendardSemiBold text-darkGrey text-[1.1vw]"
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    key={cell.column.id}
                    className={`${
                      cell.column.id === "nickname"
                        ? "text-left pl-[3vw]"
                        : "text-center"
                    }  text-[0.95vw] font-PretendardLight text-realGrey`}
                  >
                    {cell.column.id === "title" ? (
                      <Link href={`/notice/${row.original.id}`}>
                        {cell.render("Cell")}
                      </Link>
                    ) : (
                      cell.render("Cell")
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex mt-[2.3vh]">
        <div className="mx-auto w-[24vw] grid grid-cols-12 justify-center items-center border-[0.08vw] border-realGrey overflow-hidden rounded-lg font-PretendardLight text-realGrey">
          <button type="button" className="py-[0.6vh]">
            ⟨
          </button>
          <button
            type="button"
            className="bg-primaryBlue text-white py-[0.6vh]"
          >
            1
          </button>
          <button
            type="button"
            className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
          >
            2
          </button>
          <button
            type="button"
            className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
          >
            3
          </button>
          <button
            type="button"
            className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
          >
            4
          </button>
          <button
            type="button"
            className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
          >
            5
          </button>
          <button
            type="button"
            className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
          >
            6
          </button>
          <button
            type="button"
            className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
          >
            7
          </button>
          <button
            type="button"
            className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
          >
            8
          </button>
          <button
            type="button"
            className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
          >
            9
          </button>
          <button
            type="button"
            className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
          >
            10
          </button>
          <button
            type="button"
            className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
          >
            ⟩
          </button>
        </div>
      </div>
    </div>
  );
}
