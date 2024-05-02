import React, { useState } from "react";
import Link from "next/link";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { examListAPI } from "@/api/professorExamAPI";
import { examListData, examTableData } from "@/types/admin/exam";
import { useMutation } from "@tanstack/react-query";
import columnHelper from "@/lib/columnHelper";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const columns: ColumnDef<examTableData, any>[] = [
  columnHelper("examId", { header: "인덱스" }),
  columnHelper("examTitle", { header: "제목" }),
  columnHelper("examMemo", { header: "메모" }),
  columnHelper("examStatus", { header: "상태" }),
  columnHelper("examUpdatedDate", { header: "최종 수정일" }),
  columnHelper("examCreatedDate", { header: "작성일" }),
];

export function ExamManageTable({
  tableData,
}: {
  tableData: examTableData[];
}) {
  const router = useRouter();


  const [data, setData] = useState<examTableData[]>(tableData);

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
                      href={`/admin/exam-manage/${row.original.examId}`}
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
              <td className="border px-4 py-2 text-left border-l-0 border-r-0">
                <Link href={`/admin/exam-manage/list`}>
                  <button className="underline underline-offset-auto"
                  // onClick={() => onDelete(row.original.examId)}
                  >
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
            새로운 시험 등록
          </button>
        </Link>
      </div>
    </div>
  );
}

const ExamManageTableConatiner = () => {
  const { data } = useQuery<examListData>({
    queryKey: ["ProfessorexamList"],
    queryFn: examListAPI
  });

  if (!data) return null;

  return <ExamManageTable tableData={data?.result.content} />;
};

export default ExamManageTableConatiner;
