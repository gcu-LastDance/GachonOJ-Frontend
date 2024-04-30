import DiffBadge from "@/components/badge/DiffBadge";
import CategoryButton from "@/components/button/CategoryButton";
import PaginationBar from "@/components/pagination/PaginationBar";
import columnHelper from "@/lib/columnHelper";
import { ProblemTableData, difficulty } from "@/types/problem";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import React, { useState } from "react";

export const prob_table_data: ProblemTableData[] = [
  {
    problemId: 1,
    problemTitle: "Regular Expression Matching",
    problemDiff: "2단계",
    problemClass: "String",
    correctPeople: 75,
    correctRate: 37.5,
    isBookmarked: false,
  },
  {
    problemId: 2,
    problemTitle: "Regular Expression Matching",
    problemDiff: "2단계",
    problemClass: "String",
    correctPeople: 75,
    correctRate: 37.5,
    isBookmarked: false,
  },
  {
    problemId: 3,
    problemTitle: "Regular Expression Matching",
    problemDiff: "2단계",
    problemClass: "String",
    correctPeople: 75,
    correctRate: 37.5,
    isBookmarked: false,
  },
  {
    problemId: 4,
    problemTitle: "Regular Expression Matching",
    problemDiff: "2단계",
    problemClass: "String",
    correctPeople: 75,
    correctRate: 37.5,
    isBookmarked: false,
  },
  {
    problemId: 5,
    problemTitle: "Regular Expression Matching",
    problemDiff: "2단계",
    problemClass: "String",
    correctPeople: 75,
    correctRate: 37.5,
    isBookmarked: false,
  },
  {
    problemId: 6,
    problemTitle: "Regular Expression Matching",
    problemDiff: "2단계",
    problemClass: "String",
    correctPeople: 75,
    correctRate: 37.5,
    isBookmarked: false,
  },
  {
    problemId: 7,
    problemTitle: "Regular Expression Matching",
    problemDiff: "2단계",
    problemClass: "String",
    correctPeople: 75,
    correctRate: 37.5,
    isBookmarked: false,
  },
  {
    problemId: 8,
    problemTitle: "Regular Expression Matching",
    problemDiff: "2단계",
    problemClass: "String",
    correctPeople: 75,
    correctRate: 37.5,
    isBookmarked: false,
  },
  {
    problemId: 9,
    problemTitle: "Regular Expression Matching",
    problemDiff: "2단계",
    problemClass: "String",
    correctPeople: 75,
    correctRate: 37.5,
    isBookmarked: false,
  },
  {
    problemId: 10,
    problemTitle: "Regular Expression Matching",
    problemDiff: "2단계",
    problemClass: "String",
    correctPeople: 75,
    correctRate: 37.5,
    isBookmarked: false,
  },
];

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

export default function MemberProblemTable() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [data, setData] = useState<ProblemTableData[]>(prob_table_data);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col items-center">
      <div className="h-[5.5vh] flex mb-[2.5vh]">
        <button
          type="button"
          className="flex w-[16.3vw] h-[5.5vh] items-center justify-center bg-white"
        >
          북마크 문제 : 10제
        </button>
        <button
          type="button"
          className="flex w-[16.4vw] h-[5.5vh] items-center justify-center border-b-[0.15vw] border-l-[0.15vw] border-semiSemiGrey bg-lightGrey"
        >
          도전중인 문제
        </button>
        <button
          type="button"
          className="flex w-[16.3vw] h-[5.5vh] items-center justify-center border-b-[0.15vw] border-l-[0.15vw] border-semiSemiGrey bg-lightGrey"
        >
          해결한 문제
        </button>
      </div>
      <table className="w-[47vw]">
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
