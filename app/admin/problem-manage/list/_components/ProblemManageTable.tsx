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
import { useRouter } from "next/navigation";
import { GrSearch } from "react-icons/gr";

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

export function ProblemManageTable({
  tableData,
  searchTerm,
  setSearchTerm,
}: {
  tableData: problemTableData[];
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [data, setData] = useState<problemTableData[]>(tableData);

  useEffect(() => {
    setData(tableData);
  }, [tableData]);

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
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const router = useRouter();

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
        router.push("/admin/problem-manage");
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
                  }} // as ="edit"
                >
                  <button className="underline underline-offset-auto">
                    수정
                  </button>
                </Link>
              </td>

              <td className="border px-4 py-2 text-left border-l-0 border-r-0">
            
                  <button className="underline underline-offset-auto"onClick={() => onDelete(row.original.problemId)}>
                    삭제
                  </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end items-center mt-5">
        <Link href="/admin/problem-manage/editor">
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
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const queryClient = useQueryClient();

  useEffect(() => {
    // searchTerm이 변경될 때마다 debouncedSearchTerm을 업데이트합니다.
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    // debouncedSearchTerm이 변경될 때마다 데이터를 갱신합니다.
    queryClient.invalidateQueries({ queryKey: ["problemList"] });
  }, [debouncedSearchTerm]);

  const { data } = useQuery<problemListData>({
    queryKey: ["problemList", debouncedSearchTerm],
    queryFn: () => problemListAPI(debouncedSearchTerm),
    enabled: debouncedSearchTerm !== undefined, // 검색어가 있을 때만 API 호출
    staleTime: 0,
  });

  if (!data) return null;
  return (
    <ProblemManageTable
      tableData={data?.result?.content}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
    />
  );
};

export default ProblemManageTableContainer;
