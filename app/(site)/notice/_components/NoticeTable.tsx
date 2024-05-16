"use client";

import { noticeTableAPI } from "@/api/noticeAPI";
import PaginationBar from "@/components/pagination/PaginationBar";
import columnHelper from "@/lib/columnHelper";
import { NoticeTableData } from "@/types/notice";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import React, { useState } from "react";

const columns: ColumnDef<NoticeTableData, any>[] = [
  columnHelper("noticeTitle", {
    header: "공지 제목",
  }),
  columnHelper("memberNickname", {
    header: "작성자",
  }),
  columnHelper("noticeCreatedDate", {
    header: "게시일",
  }),
];

export default function NoticeTable() {
  const [pageNum, setPageNum] = useState<number>(1);

  const { data: mainNoticeTabledata } = useQuery({
    queryKey: ["mainNoticeTable"],
    queryFn: noticeTableAPI,
    refetchOnMount: "always",
  });

  const table = useReactTable({
    data: mainNoticeTabledata?.content || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col px-[2vw] mt-[1.5vh] h-[65vh]">
      <table className="w-[58vw]">
        <thead>
          {table.getHeaderGroups().map((headerGroup, index) => (
            <tr
              key={index}
              className="h-[5vh] border-b-[0.1vh] border-semiGrey font-PretendardSemiBold text-darkGrey text-[1.1vw]"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={`${
                    header.id === "noticeTitle"
                      ? "text-left w-[28vw] pl-[3vw]"
                      : "text-center w-[12.5w]"
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
                    cell.column.id === "noticeTitle"
                      ? "text-left pl-[3vw]"
                      : "text-center"
                  }  text-[1vw] font-PretendardLight text-realGrey`}
                >
                  {cell.column.id === "noticeTitle" ? (
                    <Link href={`/notice/${row.original.noticeId}`}>
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
      <div className="mt-auto flex justify-center items-center mb-[3vh]">
        {mainNoticeTabledata && (
          <PaginationBar
            totalElements={mainNoticeTabledata.totalElements}
            pageSize={mainNoticeTabledata.pageable.pageSize}
            pageNo={pageNum}
            setPageNo={setPageNum}
          />
        )}
      </div>
    </div>
  );
}
