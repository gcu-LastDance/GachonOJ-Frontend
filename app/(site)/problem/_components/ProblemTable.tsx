"use client";

import DiffBadge from "@/components/badge/DiffBadge";
import CategoryButton from "@/components/button/CategoryButton";
import {
  ProblemTableColumn,
  ProblemTableData,
  difficulty,
} from "@/types/problem";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useTable } from "react-table";

export const prob_table_data: ProblemTableData[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: 1,
    category: ["Array"],
    correct: 150,
    correctRate: 75.5,
    isBookmarked: true,
  },
  {
    id: 2,
    title: "Add Two Numbers",
    difficulty: 2,
    category: ["Linked List"],
    correct: 120,
    correctRate: 60.5,
    isBookmarked: false,
  },
  {
    id: 3,
    title: "Repeating Characters",
    difficulty: 3,
    category: ["String", "Hash Table"],
    correct: 200,
    correctRate: 85.0,
    isBookmarked: true,
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: 4,
    category: ["Array", "Divide and Conquer"],
    correct: 100,
    correctRate: 50.0,
    isBookmarked: false,
  },
  {
    id: 5,
    title: "Longest Palindromic Substring",
    difficulty: 2,
    category: ["String", "Dynamic Programming"],
    correct: 180,
    correctRate: 90.2,
    isBookmarked: true,
  },
  {
    id: 6,
    title: "Zigzag Conversion",
    difficulty: 2,
    category: ["String"],
    correct: 110,
    correctRate: 55.0,
    isBookmarked: false,
  },
  {
    id: 7,
    title: "Reverse Integer",
    difficulty: 0,
    category: ["Math"],
    correct: 300,
    correctRate: 95.0,
    isBookmarked: true,
  },
  {
    id: 8,
    title: "String to Integer (atoi)",
    difficulty: 3,
    category: ["String", "Math"],
    correct: 130,
    correctRate: 65.0,
    isBookmarked: false,
  },
  {
    id: 9,
    title: "Palindrome Number",
    difficulty: 1,
    category: ["Math"],
    correct: 250,
    correctRate: 88.3,
    isBookmarked: true,
  },
  {
    id: 10,
    title: "Regular Expression Matching",
    difficulty: 4,
    category: ["String", "Dynamic Programming"],
    correct: 75,
    correctRate: 37.5,
    isBookmarked: false,
  },
];

const prob_table_columns: ProblemTableColumn[] = [
  {
    Header: "난이도",
    accessor: "difficulty",
    Cell: ({ value }: { value: difficulty }) => (
      <div className="flex justify-center">
        <DiffBadge difficulty={value} />
      </div>
    ),
  },
  { Header: "문제 제목", accessor: "title" },
  {
    Header: "분류",
    accessor: "category",
    Cell: ({ value }: { value: string[] }) => (
      <div className="flex justify-center">
        <CategoryButton categories={value} />
      </div>
    ),
  },
  { Header: "정답자 수", accessor: "correct" },
  { Header: "정답률", accessor: "correctRate" },
  { Header: "북마크", accessor: "isBookmarked" },
];

export default function ProblemTable() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns: prob_table_columns, data: prob_table_data });

  return (
    <div className="flex flex-col">
      <div className="h-[5.5vh] my-[1.5vh] mx-[1.5vw] flex items-end">
        <div className="flex space-x-[1.1vw]">
          <button
            type="button"
            className="w-[10vw] h-[4vh] border-[0.12vw] rounded-xl border-realGrey bg-superlightGrey font-PretendardRegular text-[0.9vw]"
          >
            난이도 오름차순
          </button>
          <button
            type="button"
            className="w-[7vw] h-[4vh] border-[0.12vw] rounded-xl border-realGrey bg-superlightGrey font-PretendardRegular text-[0.9vw]"
          >
            난이도 선택
          </button>
          <button
            type="button"
            className="w-[7vw] h-[4vh] border-[0.12vw] rounded-xl border-realGrey bg-superlightGrey font-PretendardRegular text-[0.9vw]"
          >
            분류 선택
          </button>
        </div>
        <div className="relative ml-auto">
          <input
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="문제 제목을 검색해보세요"
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
                    column.id === "title"
                      ? "text-left w-[16vw]"
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
                      cell.column.id === "title" ? "text-left" : "text-center"
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
