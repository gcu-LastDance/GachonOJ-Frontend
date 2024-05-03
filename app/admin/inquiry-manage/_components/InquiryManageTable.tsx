"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { inquiryListAPI } from "@/api/admin/adminInquiryAPI";
import { inquiryTableData, inquiryListData } from "@/types/admin/inquiry";
import columnHelper from "@/lib/columnHelper";
import { useQuery } from "@tanstack/react-query";

const columns: ColumnDef<inquiryTableData, any>[] = [
  columnHelper("inquiryId", { header: "번호" }),
  columnHelper("inquiryTitle", { header: "제목" }),
  columnHelper("memberNickname", { header: "작성자" }),
  columnHelper("inquiryCreatedDate", { header: "작성일" }),
  columnHelper("inquiryStatus", { header: "답변여부" }),
];

export function InquiryManageTable({
  tableData,
}: {
  tableData: inquiryTableData[];
}) {
  const [data, setData] = useState<inquiryTableData[]>(tableData);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
  

      {/* 테이블 요소 생성 */}
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

const InquiryManageTableContainer = () => {
  const { data } = useQuery<inquiryListData>({
    queryKey: ["inquiryList"],
    queryFn: inquiryListAPI,
    
  });
  if (!data) return null;
  return <InquiryManageTable tableData={data.result.content} />;
};

export default InquiryManageTableContainer;
