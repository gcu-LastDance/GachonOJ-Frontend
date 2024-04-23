import React, { useState } from "react";
import Link from "next/link";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { noticeListAPI } from "@/api/adminNoticeAPI";
import { noticeListData, noticeTableData } from "@/types/admin/notice";
import columnHelper from "@/lib/columnHelper";
import { useQuery } from "@tanstack/react-query";

const columns: ColumnDef<noticeTableData, any>[] = [
  columnHelper("noticeId", { header: "번호" }),
  columnHelper("noticeTitle", { header: "제목" }),
  columnHelper("memberNickname", { header: "작성자" }),
  columnHelper("noticeCreatedDate", { header: "작성일" }),
];

export function NoticeManageTable({ tableData }: { tableData: noticeTableData[] }) {
  const [data, setData] = useState<noticeTableData[]>(tableData);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mt-20">
      <div className="text-xl font-PretendardBlack mb-10 px-4 py-4 border-b-4 inline-block w-3/4">
        관리기능 &gt; 공지사항 관리
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
                  {flexRender(header.column.columnDef.header, header.getContext())}
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
                    <Link href={`/admin/notice-manage/${row.original.noticeId}`}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Link>
                  ) : (
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  )}
                </td>
              ))}
              <td className="border px-4 py-2 text-left border-l-0 border-r-0">
                <button className="border-b-2">삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 페이지 이동 및 페이지 크기 조절을 위한 컨트롤 영역 */}
      <div className="flex justify-end items-center mt-5">
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
        >
          새 공지사항 작성
        </button>
      </div>
    </div>
  );
}

const NoticeManageTableContainer = () => {
  const { data } = useQuery<noticeListData>({
    queryKey: ["noticeList"],
    queryFn: noticeListAPI,
  });

  if(!data) return null;

  return <NoticeManageTable tableData={data?.result.content} />;
}

export default NoticeManageTableContainer