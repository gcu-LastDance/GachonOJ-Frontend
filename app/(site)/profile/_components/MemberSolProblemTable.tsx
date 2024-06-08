"use client";

import {
  memberProblemTableAPI,
  problemBookmarkDeleteAPI,
  problemBookmarkPostAPI,
} from "@/api/problemAPI";
import DiffBadge from "@/components/badge/DiffBadge";
import CategoryButton from "@/components/button/CategoryButton";
import columnHelper from "@/lib/columnHelper";
import {
  ProblemTableData,
  SolProblemTableData,
  difficulty,
} from "@/types/problem";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import React from "react";
import { BsStars } from "react-icons/bs";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

const columns: ColumnDef<SolProblemTableData, any>[] = [
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
  columnHelper("submissionId", {
    header: "AI 분석",
    cell: (value) => (
      <div className="flex items-center justify-center">
        <Link
          href={`/problem/feedback/${value}`}
          className="flex items-center justify-center"
        >
          <BsStars />
        </Link>
      </div>
    ),
  }),
];

export default function MemberSolProblemTable({
  data,
  isLoading,
  isFetching,
}: {
  data: any;
  isLoading: boolean;
  isFetching: boolean;
}) {
  const queryClient = useQueryClient();

  const table = useReactTable({
    data: isLoading ? [] : data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleBookmarkAdd = (problemId: number) => {
    bookmarkAddMutation.mutate(problemId);
  };

  const handleBookmarkRemove = (problemId: number) => {
    bookmarkRemoveMutation.mutate(problemId);
  };

  const bookmarkAddMutation = useMutation({
    mutationFn: problemBookmarkPostAPI,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["memberProblemTable"] });
    },
  });

  const bookmarkRemoveMutation = useMutation({
    mutationFn: problemBookmarkDeleteAPI,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["memberProblemTable"] });
    },
  });

  return (
    !isFetching && (
      <table className={`w-[47vw] ${isLoading && "animate-pulse"}`}>
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
                  ) : cell.column.id === "isBookmarked" ? (
                    row.original.isBookmarked ? (
                      <div className="flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() =>
                            handleBookmarkRemove(row.original.problemId)
                          }
                          className="text-[1vw] flex items-center justify-center"
                        >
                          <IoBookmark />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <button
                          type="button"
                          onClick={() =>
                            handleBookmarkAdd(row.original.problemId)
                          }
                          className="text-[1vw] flex items-center justify-center"
                        >
                          <IoBookmarkOutline />
                        </button>
                      </div>
                    )
                  ) : (
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
}
