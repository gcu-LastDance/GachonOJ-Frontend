"use client";

import { examResultListAPI } from "@/api/admin/adminExamAPI";
import PaginationBar from "@/components/pagination/PaginationBar";
import columnHelper from "@/lib/columnHelper";
import { ExamResultListContents, ExamResultListData } from "@/types/admin/exam";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import React, { useState } from "react";

const columns: ColumnDef<ExamResultListContents, any>[] = [
  columnHelper("memberName", { header: "이름" }),
  columnHelper("memberNumber", { header: "학번" }),
  columnHelper("memberEmail", { header: "이메일" }),
  columnHelper("totalScore", { header: "최종 점수" }),
  columnHelper("examDueTime", { header: "소요 시간" }),
  columnHelper("submissionDate", { header: "제출일" }),
];

export default function ExamResultList({ examId }: { examId: number }) {
  const [pageNo, setPageNo] = useState(1);
  const { data } = useQuery<ExamResultListData>({
    queryKey: ["examList", pageNo],
    queryFn: () => examResultListAPI(examId),
  });

  const paginationData: any = data?.results;

  const table = useReactTable({
    data: data?.results?.content || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (!data) return null;

  return (
    <div>
      <div className="flex justify-between px-20 mb-10">
        <div className="flex items-center space-x-5">
          <div className="text-2xl text-realGrey font-PretendardBold">
            시험 제목
          </div>
          <div>{data.examTitle}</div>
        </div>
        <div className="flex items-center space-x-5">
          <div className="text-2xl text-realGrey font-PretendardBold">
            시험 메모
          </div>
          <div>{data.examMemo}</div>
        </div>
        <div className="flex items-center space-x-5">
          <div className="text-2xl text-realGrey font-PretendardBold">
            제출 인원
          </div>
          <div>{data.submissionTotal}</div>
        </div>
      </div>
      {/* 테이블 요소 생성 */}
      <table className="w-full text-sm">
        <thead>
          {/* 테이블 헤더 생성 */}
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              <th className="border px-4 py-2 text-black text-left border-t-0 border-l-0 border-r-0">
                번호
              </th>
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
              <td className="border px-4 py-2 text-left border-t-0 border-l-0 border-r-0">
                {row.index +
                  1 +
                  paginationData?.pageable?.pageSize * (pageNo - 1)}
              </td>
              {row.getVisibleCells().map((cell) => (
                <td
                  className="border px-4 py-2 text-left border-t-0 border-l-0 border-r-0"
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}

              <td className="border px-4 py-2 text-left border-l-0 border-r-0"></td>
              {/* <td className="border px-4 py-2 text-left border-l-0 border-r-0">
                <button
                  className="underline underline-offset-auto"
                  onClick={() => onDelete(row.original.examId)}
                >
                  삭제
                </button>
              </td>
              <td className="border px-4 py-2 text-left border-l-0 border-r-0">
                <Link href={`/admin/exam-manage/result/${row.original.examId}`}>
                  <button className="underline underline-offset-auto">
                    상세 조회
                  </button>
                </Link>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center">
        <PaginationBar
          totalElements={paginationData?.totalElements}
          pageSize={paginationData?.pageable?.pageSize}
          pageNo={pageNo}
          setPageNo={setPageNo}
        />
      </div>
    </div>
  );
}
