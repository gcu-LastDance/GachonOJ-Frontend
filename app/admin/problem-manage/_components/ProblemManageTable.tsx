import React, { useState } from "react";
import Link from "next/link";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { problemListAPI  } from "@/api/adminProblemAPI";
import { problemListData, problemTableData } from "@/types/admin/problem";
import columnHelper from "@/lib/columnHelper";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const columns: ColumnDef<problemTableData, any>[] = [
  columnHelper("problemId", { header: "번호" }),
  columnHelper("problemTitle", { header: "문제 제목" }),
  columnHelper("problemDiff", { header: "난이도" }),
  columnHelper("problemStatus", { header: "상태" }),
  columnHelper("correctPeople", { header: "채점 수" }),
  columnHelper("correctSubmit", { header: "정답 수" }),
  columnHelper("submitCount", { header: "정답자 수" }),
  columnHelper("problemCreatedDate", { header: "생성일" }),
];


export function ProblemManageTable({ tableData }: { tableData: problemTableData[] }) {
  const [data, setData] = useState<problemTableData[]>(tableData);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mt-20">
      <div className="text-xl font-PretendardBlack mb-10 px-4 py-4 border-b-4 inline-block w-3/4 ">
        문제 관리 &gt; 문제 목록
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
                <Link
                  href={{
                    pathname: "edit",
                    query: { memberId: row.original.problemId },
                  }}  // as ="edit"
                >
                  <button className="underline underline-offset-auto">
                    수정
                  </button>
                 
                </Link>
              </td>

              <td className="border px-4 py-2 text-left border-l-0 border-r-0">
                <Link href="/admin/user-manage/list">
                <button className="underline underline-offset-auto">
                  삭제
                </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end items-center mt-5">
        <Link href="enroll">
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
          >
            새 문제 생성
          </button>
        </Link>
      </div>
    </div>
  );
}

const ProblemManageTableContainer = () => {
  const { data } = useQuery<problemListData>({
    queryKey: ["problemList"],
    queryFn: problemListAPI,
  });

  if (!data) return null;
  return <ProblemManageTable tableData={data?.result.content} />;
};

export default ProblemManageTableContainer;
