"use client";

import {
  problemBookmarkDeleteAPI,
  problemBookmarkPostAPI,
  problemTableGuestAPI,
  problemTableUserAPI,
} from "@/api/problemAPI";
import DiffBadge from "@/components/badge/DiffBadge";
import CategoryButton from "@/components/button/CategoryButton";
import PaginationBar from "@/components/pagination/PaginationBar";
import columnHelper from "@/lib/columnHelper";
import useUserStore from "@/store/useUserStore";
import { ProblemTableData, difficulty } from "@/types/problem";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

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

type SortType = "ASC" | "DESC";

export default function ProblemTable() {
  const { token } = useUserStore();
  const router = useRouter();
  const [pageNum, setPageNum] = useState<number>(1);
  const [debouncedPageNum, setDebouncedPageNum] = useState(pageNum);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [debouncedSearchKeyword, setDebouncedSearchKeyword] =
    useState(searchKeyword);
  const [diff, setDiff] = useState<difficulty>();
  const [debouncedDiff, setDebouncedDiff] = useState(diff);
  const [sortType, setSortType] = useState<SortType>("ASC");
  const [debouncedSortType, setDebouncedSortType] =
    useState<SortType>(sortType);

  const queryClient = useQueryClient();

  const { data: problemDataGuest } = useQuery({
    queryKey: [
      "problemTableGuest",
      debouncedPageNum,
      debouncedSearchKeyword,
      debouncedDiff,
      debouncedSortType,
    ],
    queryFn: () =>
      problemTableGuestAPI({
        pageNum: debouncedPageNum,
        searchKeyword: debouncedSearchKeyword,
        diff: debouncedDiff,
        sortType: debouncedSortType,
      }),
    enabled: !token, // 게스트일 때만 활성화
  });

  const { data: problemData } = useQuery({
    queryKey: [
      "problemTableUser",
      debouncedPageNum,
      debouncedSearchKeyword,
      debouncedDiff,
      debouncedSortType,
    ],
    queryFn: () =>
      problemTableUserAPI({
        pageNum: debouncedPageNum,
        searchKeyword: debouncedSearchKeyword,
        diff: debouncedDiff,
        sortType: debouncedSortType,
      }),
    enabled: !!token,
  });

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedPageNum(pageNum), 300);
    return () => clearTimeout(timeout);
  }, [pageNum]);

  useEffect(() => {
    const timeout = setTimeout(
      () => setDebouncedSearchKeyword(searchKeyword),
      500
    );
    return () => clearTimeout(timeout);
  }, [searchKeyword]);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedSortType(sortType), 300);
    return () => clearTimeout(timeout);
  }, [sortType]);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedDiff(diff), 300);
    return () => clearTimeout(timeout);
  }, [diff]);

  const handleDiffChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDiff(e.target.value as difficulty);
  };

  const handleBookmarkAdd = (problemId: number) => {
    if (!token) router.push("/login");
    bookmarkAddMutation.mutate(problemId);
  };

  const handleBookmarkRemove = (problemId: number) => {
    if (!token) router.push("/login");
    bookmarkRemoveMutation.mutate(problemId);
  };

  const bookmarkAddMutation = useMutation({
    mutationFn: problemBookmarkPostAPI,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["problemTableUser"] });
    },
  });

  const bookmarkRemoveMutation = useMutation({
    mutationFn: problemBookmarkDeleteAPI,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["problemTableUser"] });
    },
  });

  const table = useReactTable({
    data: (token ? problemData?.content : problemDataGuest?.content) || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col h-[73vh]">
      <div className="h-[5.5vh] my-[1.5vh] mx-[1.5vw] flex items-end">
        <div className="flex space-x-[1.1vw]">
          <button
            type="button"
            onClick={() => {
              sortType == "ASC" ? setSortType("DESC") : setSortType("ASC");
            }}
            className="w-[10vw] h-[4vh] border-[0.12vw] rounded-xl border-realGrey bg-superlightGrey font-PretendardRegular text-[0.9vw] flex justify-center items-center"
          >
            {sortType === "ASC" ? "난이도 오름차순" : "난이도 내림차순"}
          </button>
          <select
            onChange={handleDiffChange}
            className="w-[9vw] h-[4vh] border-[0.12vw] rounded-xl border-realGrey bg-superlightGrey font-PretendardRegular text-[0.9vw] flex justify-center items-center focus:outline-none pl-[1.8vw]"
          >
            <option value={""}>난이도 선택</option>
            <option value={1}>1단계</option>
            <option value={2}>2단계</option>
            <option value={3}>3단계</option>
            <option value={4}>4단계</option>
          </select>
          {/* <button
            type="button"
            className="w-[7vw] h-[4vh] border-[0.12vw] rounded-xl border-realGrey bg-superlightGrey font-PretendardRegular text-[0.9vw] flex justify-center items-center"
          >
            분류 선택
          </button> */}
        </div>
        <div className="flex ml-auto border-[0.1vw] border-realGrey h-[5vh] w-[12vw] rounded-lg px-[0.5vw] space-x-[0.3vw] items-center">
          <IoMdSearch className="text-[1vw] text-primaryDark" />
          <input
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="문제 제목을 검색해보세요"
            className="placeholder-semiGrey placeholder-PretendardRegular text-[0.75vw] focus:outline-none w-[9vw] h-[4vh]"
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
      <div className="mt-auto flex justify-center items-center mb-[3vh]">
        {problemData && (
          <PaginationBar
            totalElements={problemData?.totalElements}
            pageSize={problemData?.pageable?.pageSize}
            pageNo={pageNum}
            setPageNo={setPageNum}
          />
        )}
      </div>
    </div>
  );
}
