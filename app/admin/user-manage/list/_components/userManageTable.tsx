import { userTableData } from "@/types/admin/user";
import React, {useState} from "react";
import columnHelper from "@/lib/columnHelper";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

export const main_table_data: userTableData[] = [
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

const columns : ColumnDef<userTableData, any>[] = [
  columnHelper("id", {header: "번호"}),
  columnHelper("email", {header: "이메일"}),
  columnHelper("name", {header: "이름"}),
  columnHelper("member_number", {header: "학번"}),
  columnHelper("nickname", {header: "닉네임"}),
  columnHelper("role", {header: "권한"}),
  columnHelper("created_date", {header: "가입일"}),
];

export default function UserManageTable() {
  const [data, setData] = useState<userTableData[]>(main_table_data);
  // useTable 훅을 사용하여 테이블을 생성하고 테이블에 필요한 상태 및 동작을 설정

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="mt-20">
      <div className="text-xl font-PretendardBlack mb-10 px-4 py-4 border-b-4 inline-block w-3/4 ">
        회원관리 &gt; 사용자 목록
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
                  <button className="underline underline-offset-8">정보 수정</button>
                </td>
                <td className="border px-4 py-2 text-left border-l-0 border-r-0">
                  <button className="underline underline-offset-8s">정보 삭제</button>
                </td>
              </tr>
            
              ))}
        </tbody>
      </table>
    </div>
  )
}