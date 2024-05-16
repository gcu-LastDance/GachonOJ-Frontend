import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { problemDeleteAPI, problemListAPI } from "@/api/admin/adminProblemAPI";
import { problemListData, problemTableData } from "@/types/admin/problem";
import columnHelper from "@/lib/columnHelper";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { GrSearch } from "react-icons/gr";
import PaginationBar from "@/components/pagination/PaginationBar";

const columns: ColumnDef<problemTableData, any>[] = [
  columnHelper("problemTitle", { header: "문제 제목" }),
  columnHelper("problemDiff", { header: "난이도" }),
  columnHelper("problemStatus", { header: "상태" }),
  columnHelper("correctPeople", { header: "채점 수" }),
  columnHelper("correctSubmit", { header: "정답 수" }),
  columnHelper("submitCount", { header: "정답자 수" }),
  columnHelper("problemCreatedDate", { header: "생성일" }),
];

export function ProblemManageTable({
  tableData,
  searchTerm,
  setSearchTerm,
  paginationData,
  pageNo,
  setPageNo,
}: {
  tableData: problemTableData[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  paginationData: any;
  pageNo: number;
  setPageNo: React.Dispatch<React.SetStateAction<number>>;
}) {
  const queryClient = useQueryClient();

  const [showInput, setShowInput] = useState(false);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchIconClick = () => {
    setShowInput(true);
  };

  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const onDelete = (problemId: number) => {
    DeleteMutation.mutate(problemId);
  };

  const DeleteMutation = useMutation({
    mutationFn: (problemId: number) => problemDeleteAPI(problemId),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ["problemList"] });
      }
    },
  });

  return (
    <div>
      <div className="flex justify-end">
        {showInput ? (
          <input
            className="p-2 border-2 rounded-lg px-4"
            type="search"
            placeholder="검색어를 입력하세요"
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
        ) : (
          <div
            className="w-fit border-2 p-2 rounded-lg"
            onClick={handleSearchIconClick}
          >
            <GrSearch />
          </div>
        )}
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
                {row.index + 1 + (paginationData.pageable.pageSize * (pageNo - 1))}
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
                    pathname: "edit/editor",
                    query: { problemId: row.original.problemId },
                  }}
                >
                  <button className="underline underline-offset-auto">
                    수정
                  </button>
                </Link>
              </td>

              <td className="border px-4 py-2 text-left border-l-0 border-r-0">
                <button
                  className="underline underline-offset-auto"
                  onClick={() => onDelete(row.original.problemId)}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end items-center mt-5">
        <Link href="/admin/problem-manage/enroll/editor">
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
          >
            새 문제 생성
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

const ProblemManageTableContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const [pageNo, setPageNo] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const { data } = useQuery<problemListData>({
    queryKey: ["problemList", debouncedSearchTerm, pageNo],
    queryFn: () => problemListAPI(debouncedSearchTerm, pageNo),
  });

  if (!data) return null;
  return (
    <ProblemManageTable
      tableData={data?.result?.content}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      paginationData={data?.result}
      pageNo={pageNo}
      setPageNo={setPageNo}
    />
  );
};

export default ProblemManageTableContainer;
