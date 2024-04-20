import { userTableColumn, userTableData } from "@/types/admin/user";
import React from "react";
import { usePagination, useTable } from "react-table";

const main_table_data: userTableData[] = [
  {
    id: 1,
    email: "asdf@gachon.ac.kr",
    name: "사람1",
    member_number: 12345678,
    nickname: "닉네임1",
    role: "사용자",
    created_date: "2024.12.21",

  },
  {
    id: 2,
    email: "asdf@gachon.ac.kr",
    name: "사람2",
    member_number: 49398383,
    nickname: "닉네임2",
    role: "사용자",
    created_date: "2024.12.21",

  },
  {
    id: 3,
    email: "asdf@gachon.ac.kr",
    name: "사람3",
    member_number: 89439838,
    nickname: "닉네임3",
    role: "사용자",
    created_date: "2024.12.21",

  },
];

const main_columns: userTableColumn[] = [
  { Header: "번호", accessor: "id" },
  { Header: "제목", accessor: "email" },
  { Header: "이름", accessor: "name" },
  { Header: "학번", accessor: "member_number" },
  { Header: "닉네임", accessor: "nickname" },
  { Header: "권한", accessor: "role"},
  { Header: "가입일", accessor: "created_date" },
];

export const UserManageTable = () => {
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
  } = useTable<userTableData>(
    {
      columns: main_columns,
      data: main_table_data,
    },
    usePagination
  );

  // 테이블 상태에서 pageIndex와 pageSize를 추출
  const { pageIndex, pageSize } = state;

  return (
    <div className="mt-20">
      <div className="text-xl font-PretendardBlack mb-10 px-4 py-4 border-b-4 inline-block w-3/4 ">
        회원관리 &gt; 사용자 목록
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
               
                      {cell.render("Cell")} 
                  </td>
                ))}
                <td className="border px-4 py-2 text-left border-l-0 border-r-0">
                  <button className="border-b-2">정보 수정</button>
                </td>
                <td className="border px-4 py-2 text-left border-l-0 border-r-0">
                  <button className="border-b-2">정보 삭제</button>
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
    </div>
  );
};
export default UserManageTable;
