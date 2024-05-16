"use client";

import { rankingTableAPI } from "@/api/memberAPI";
import RankBadge from "@/components/badge/RankBadge";
import PaginationBar from "@/components/pagination/PaginationBar";
import columnHelper from "@/lib/columnHelper";
import { RankingTableData } from "@/types/member";
import { rank } from "@/types/rank";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";

const columns: ColumnDef<RankingTableData, any>[] = [
  columnHelper("rating", {
    header: "등급",
    cell: (value) => (
      <div className="flex justify-center">
        <div className="w-[2vw]">
          <RankBadge rank={value as rank} />
        </div>
      </div>
    ),
  }),
  columnHelper("memberNickname", {
    header: "닉네임",
  }),
  columnHelper("memberRank", {
    header: "등급 경험치",
  }),
  columnHelper("memberSolved", {
    header: "푼 문제 수",
  }),
];

export default function RankingTable() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [debouncedSearchKeyword, setDebouncedSearchKeyword] =
    useState(searchKeyword);
  const [pageNum, setPageNum] = useState<number>(1);
  const [debouncedPageNum, setDebouncedPageNum] = useState(pageNum);

  const { data: rakingData } = useQuery({
    queryKey: ["rankingTable", debouncedPageNum, debouncedSearchKeyword],
    queryFn: () =>
      rankingTableAPI({
        pageNum: debouncedPageNum,
        searchKeyword: debouncedSearchKeyword,
      }),
    refetchOnMount: "always",
  });

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedPageNum(pageNum), 300);
    return () => clearTimeout(timeout);
  }, [pageNum]);

  useEffect(() => {
    const timeout = setTimeout(
      () => setDebouncedSearchKeyword(searchKeyword),
      1000
    );
    return () => clearTimeout(timeout);
  }, [searchKeyword]);

  const table = useReactTable({
    data: rakingData?.content || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col h-[73vh]">
      <div className="h-[5.5vh] my-[1.5vh] mx-[1.5vw] flex items-end">
        <div className="flex ml-auto border-[0.1vw] border-realGrey h-[5vh] w-[12vw] rounded-lg px-[0.5vw] space-x-[0.3vw] items-center">
          <IoMdSearch className="text-[1vw] text-primaryDark" />
          <input
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="닉네임으로 검색해보세요"
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
                    header.id === "memberNickname"
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
                    cell.column.id === "memberNickname"
                      ? "text-left pl-[3vw]"
                      : "text-center"
                  }  text-[0.95vw] font-PretendardLight text-realGrey`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-auto flex justify-center items-center mb-[3vh]">
        {rakingData && (
          <PaginationBar
            totalElements={rakingData.totalElements}
            pageSize={rakingData.pageable.pageSize}
            pageNo={pageNum}
            setPageNo={setPageNum}
          />
        )}
      </div>
    </div>
  );
}
