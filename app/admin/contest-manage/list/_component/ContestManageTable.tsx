import React, { useState } from "react";
import Link from "next/link";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { contestListData, contestTableData } from "@/types/admin/contest";
import { useMutation } from "@tanstack/react-query";
import columnHelper from "@/lib/columnHelper";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {
  contestAdminDeleteAPI,
  contestListAPI,
} from "@/api/admin/adminContestAPI";
import PaginationBar from "@/components/pagination/PaginationBar";

const columns: ColumnDef<contestTableData, any>[] = [
  columnHelper("examTitle", { header: "제목" }),
  columnHelper("examMemo", { header: "메모" }),
  columnHelper("memberNickname", { header: "생성자" }),
  columnHelper("examStatus", { header: "상태" }),
  columnHelper("examUpdatedDate", { header: "최종 수정일" }),
  columnHelper("examCreatedDate", { header: "작성일" }),
];

export function ContestManageTable({
  tableData,
  paginationData,
  pageNo,
  setPageNo,
}: {
  tableData: contestTableData[];
  paginationData: any;
  pageNo: number;
  setPageNo: React.Dispatch<React.SetStateAction<number>>;
}) {
  const router = useRouter();

  const onDelete = (noticeId: number) => {
    DeleteMutation.mutate(noticeId);
  };

  const DeleteMutation = useMutation({
    mutationFn: (examId: number) => contestAdminDeleteAPI(examId),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        router.push("/admin/contest-manage/list");
      }
    },
  });

  const table = useReactTable({
    data: tableData,
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
                  paginationData.pageable.pageSize * (pageNo - 1)}
              </td>
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
                    query: { examId: row.original.examId },
                  }}
                >
                  <button className="underline underline-offset-auto hover:text-realGrey">
                    수정
                  </button>
                </Link>
              </td>
              <td className="border px-4 py-2 text-left border-l-0 border-r-0">
                <button
                  className="underline underline-offset-auto hover:text-realGrey"
                  onClick={() => onDelete(row.original.examId)}
                >
                  삭제
                </button>
              </td>
              <td className="border px-4 py-2 text-left border-l-0 border-r-0">
                <Link
                  className="hover:underline-offset-auto hover:text-realGrey"
                  href={`/admin/contest-manage/result/list/${row.original.examId}`}
                >
                  <button className="underline underline-offset-auto">
                    결과 조회
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
            새로운 대회 등록
          </button>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <PaginationBar
          totalElements={paginationData.totalElements}
          pageSize={paginationData.pageable.pageSize}
          pageNo={pageNo}
          setPageNo={setPageNo}
        />
      </div>
    </div>
  );
}

const ContestManageTableConatiner = () => {
  const [pageNo, setPageNo] = useState(1);

  const { data } = useQuery<contestListData>({
    queryKey: ["contestList"],
    queryFn: () => contestListAPI("대회", pageNo),
  });

  if (!data) return null;

  return (
    <ContestManageTable
      tableData={data?.result.content}
      paginationData={data?.result}
      pageNo={pageNo}
      setPageNo={setPageNo}
    />
  );
};

export default ContestManageTableConatiner;
