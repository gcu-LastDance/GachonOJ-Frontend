import React, { useState } from "react";
import ADMIN_MOCK_DATA from "@/mocks/ADMIN_MOCK_DATA.json";
import { adminTableData } from "@/types/admin/admin";
import Link from "next/link";
import columnHelper from "@/lib/columnHelper";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

export const main_table_data: adminTableData[] = ADMIN_MOCK_DATA;

const columns: ColumnDef<adminTableData, any>[] = [
  columnHelper("index", { header: "번호" }),
  columnHelper("member_email", { header: "이메일" }),
  columnHelper("member_name", { header: "이름" }),
  columnHelper("member_nickname", { header: "닉네임" }),
  columnHelper("member_role", { header: "권한" }),
  columnHelper("member_created_date", { header: "가입일" }),
];

export default function AdminManageTable() {
  const [data, setData] = useState<adminTableData[]>(main_table_data);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mt-20">
      <div className="text-xl font-PretendardBlack mb-10 px-4 py-4 border-b-4 inline-block w-3/4 ">
        관리자관리 &gt; 관리자 목록
      </div>
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
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <td className="border px-4 py-2 text-left border-l-0 border-r-0">
                <button className="underline underline-offset-auto">수정</button>
              </td>
              <td className="border px-4 py-2 text-left border-l-0 border-r-0">
                <button className="underline underline-offset-auto">삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end items-center mt-5">
        <Link href="./admin-manage/enroll">
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
          >
            새 관리자 생성
          </button>
        </Link>
      </div>
    </div>
  );
}
