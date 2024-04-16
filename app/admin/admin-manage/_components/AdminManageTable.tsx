import React, { useMemo } from "react";
import ADMIN_MOCK_DATA from "@/mocks/ADMIN_MOCK_DATA.json";
import { adminTableColumn, adminTableData } from "@/types/admin/admin";
import { usePagination, useTable } from "react-table";

const main_table_data: adminTableData[] = ADMIN_MOCK_DATA

export const main_columns: adminTableColumn[] = [
  {
    Header: "번호",
    accessor: "index",
  },
  {
    Header: "이메일",
    accessor: "member_email",
  },
  {
    Header: "이름",
    accessor: "member_name",
  },
  {
    Header: "닉네임",
    accessor: "member_nickname",
  },
  {
    Header: "권한",
    accessor: "member_role",
  },
  {
    Header: "가입일",
    accessor: "member_created_date",
  },

];

const AdminManageTable = () => {
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
  } = useTable<adminTableData>(
    {
      columns: main_columns,
      data: main_table_data
    },
    usePagination
  );

  // 테이블 상태에서 pageIndex와 pageSize를 추출
  const { pageIndex, pageSize } = state;

  return (
    <div className="mt-20">
      <div className="text-xl font-PretendardBlack mb-10 px-4 py-4 border-b-4 inline-block w-3/4 ">
        관리자관리 &gt; 관리자 목록
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
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <tr  {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell, index) => {
                  return (
                    <td
                     
                      className="border px-4 py-2 text-left border-t-0 border-l-0 border-r-0"
                      {...cell.getCellProps()}
                      key={cell.column.id}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
                <td className="border px-4 py-2 text-left border-l-0 border-r-0">
                  <button className="border-b-2">수정</button>
                </td>
                <td className="border px-4 py-2 text-left border-l-0 border-r-0">
                  <button className="border-b-2">삭제</button>
                </td>
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
      <div className="flex justify-end items-center mt-5">
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700"
        >
          새 관리자 생성
        </button>
      </div>
    </div>
  );
};
export default AdminManageTable;
