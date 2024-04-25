"use client";

import { inquiryTableAPI } from "@/api/inquiryAPI";
import columnHelper from "@/lib/columnHelper";
import { InquiryTableData } from "@/types/inquiry";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import React from "react";

const columns: ColumnDef<InquiryTableData, any>[] = [
  columnHelper("inquiryTitle", {
    header: "문의 제목",
  }),
  columnHelper("inquiryCreatedDate", {
    header: "문의일",
  }),
  columnHelper("inquiryStatus", {
    header: "상태",
    cell: (value) => {
      const statusStyle =
        value === "답변 완료" ? "text-primaryBlue" : "text-primaryRed";
      return (
        <span className={statusStyle}>{value}</span> // 조건에 따른 스타일 적용
      );
    },
  }),
];

export default function InquiryTable() {
  const { data: inquiryTabledata } = useQuery<InquiryTableData[]>({
    queryKey: ["inquiryTable"],
    queryFn: inquiryTableAPI,
    refetchOnMount: "always",
  });

  const table = useReactTable({
    data: inquiryTabledata || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex px-[2vw] mt-[1.5vh]">
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
                    header.id === "inquiryTitle"
                      ? "text-left w-[26vw] pl-[3vw]"
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
                    cell.column.id === "inquiryTitle"
                      ? "text-left pl-[3vw]"
                      : "text-center"
                  }  text-[1vw] font-PretendardLight text-realGrey`}
                >
                  {cell.column.id === "inquiryTitle" ? (
                    <Link href={`/inquiry/${row.original.inquiryId}`}>
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
    </div>
  );
}
