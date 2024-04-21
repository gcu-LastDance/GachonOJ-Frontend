import React , {useEffect} from "react";
import { usePagination, useTable } from "react-table";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { inquiryListAPI } from "@/api/adminInquiryAPI";
import { inquiryTableColumn, inquiryTableData } from "@/types/admin/inquiry";

const main_columns: inquiryTableColumn[] = [
  { Header: "번호", accessor: "inquiryId" },
  { Header: "제목", accessor: "inquiryTitle" },
  { Header: "작성자", accessor: "memberNickname" },
  { Header: "작성일", accessor: "inquiryCreatedDate" },
  { Header: "답변여부", accessor: "inquiryStatus" },
];

export const InquiryManageTable = ({ data }: { data: inquiryTableData[] }) => {

  // useTable 훅을 사용하여 테이블을 생성하고 테이블에 필요한 상태 및 동작을 설정
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    prepareRow,
  } = useTable<inquiryTableData[]>(
    {
      columns: main_columns,
      data: data.result?.content || []
    },
    usePagination
  );

  // 테이블 상태에서 pageIndex와 pageSize를 추출
  const { pageIndex, pageSize } = state;

  return (
    <div className="mt-20">
      <div className="text-xl font-PretendardBlack mb-10 px-4 py-4 border-b-4 inline-block w-3/4 ">
        관리기능 &gt; 문의사항 관리
      </div>

      {/* 테이블 요소 생성 */}
      <table {...getTableProps()} className="w-full text-sm">
        <thead>
          {/* 테이블 헤더 생성 */}
          {headerGroups.map((headerGroup, index) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column) => (
                <th
                  className="border px-4 py-2 text-black text-left border-t-0 border-l-0 border-r-0"
                  {...column.getHeaderProps()}
                  key={column.id}
                >
                  {/* 컬럼 헤더 렌더링 */}
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {/* 페이지에 해당하는 데이터 행들을 렌더링 */}
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td
                    className="border px-4 py-2 text-left border-t-0 border-l-0 border-r-0"
                    {...cell.getCellProps()}
                    key={cell.column.id}
                  >
                    {cell.column.Header === "제목" ? (
                      <Link
                        href={`/admin/inquiry-manage/${row.original.inquiryId}`}
                      >
                        {cell.render("Cell")}
                      </Link>
                    ) : (
                      cell.render("Cell")
                    )}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* 페이지 이동 및 페이지 크기 조절을 위한 컨트롤 영역 */}
      <div className="flex justify-center items-center mt-5">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <span>
          {/* 현재 페이지 / 전체 페이지 수 */}
          <strong className="block w-20 text-center">
            {pageIndex + 1} / {pageOptions.length}
          </strong>
        </span>
        <span>
          {/* 페이지 번호 입력 필드 */}
          Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
            className="w-12"
          />
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
      </div>
      {/* 페이지 크기 선택 영역 */}
      <div className="flex justify-end items-center mt-5">
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="py-2 px-4 border rounded"
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}개 씩 보기
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const InquiryManageTableContainer = () => {
  const { data } = useQuery<inquiryTableData[]>({
    queryKey: ["inquiryList"],
    queryFn: inquiryListAPI,
  }
  );

  if (!data) return null;
  return <InquiryManageTable data={data} />;

};

export default InquiryManageTableContainer;
