"use client";

import { InquiryDashboardAPI } from "@/api/admin/adminDashboardAPI";
import columnHelper from "@/lib/columnHelper";
import type { InquiryList } from "@/types/admin/dashboard";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import React from "react";

function InquiryList({ data }: { data: InquiryList[] }) {
  const columns: ColumnDef<InquiryList, any>[] = [
    columnHelper("inquiryTitle", { header: "제목" }),
    columnHelper("memberNickname", { header: "작성자" }),
    columnHelper("inquiryCreatedDate", { header: "작성일" }),
  ];

  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(data);
  return (
    <div className="flex-col px-5 py-5 shadow-md border-4 w-full border-semiGrey  bg-white overflow-y-hidden overflow-x-scroll">
      <div className="text-2xl">미응답 문의사항</div>
      <table className="w-full text-sm">
        <thead>
          {/* 테이블 헤더 생성 */}
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="border px-4 py-2 text-black text-left border-t-0 border-l-0 border-r-0"
                  key={header.id}
                >
                  {/* 컬럼 헤더 렌더링 */}
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {/* 페이지에 해당하는 데이터 행들을 렌더링 */}
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="h-[5vh] border-b-[0.1vh] border-semiGrey font-PretendardSemiBold text-s"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  className="border px-4 py-2 text-left border-t-0 border-l-0 border-r-0"
                  key={cell.id}
                >
                  {cell.column.columnDef.header === "제목" ? (
                    <Link
                      href={`/admin/inquiry-manage/${row.original.inquiryId}`}
                    >
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

const InquiryListContainer = () => {
  const { data, isFetching } = useQuery({
    queryKey: ["InquriyDashboard"],
    queryFn: InquiryDashboardAPI,
  });
  if (!data) return null;
  if (!isFetching) return <InquiryList data={data} />;
};

export default InquiryListContainer;
