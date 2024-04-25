import React, { useState } from "react";
import Link from "next/link";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { userListAPI } from "@/api/adminUserAPI";
import { userListData, userTableData } from "@/types/admin/user";
import { useMutation } from "@tanstack/react-query";
import columnHelper from "@/lib/columnHelper";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const columns : ColumnDef<userTableData, any>[] = [
  columnHelper("memberId", {header: "번호"}),
  columnHelper("memberEmail", {header: "이메일"}),
  columnHelper("memberName", {header: "이름"}),
  columnHelper("memberNumber", {header: "학번"}),
  columnHelper("memberNickname", {header: "닉네임"}),
  columnHelper("memberRole", {header: "권한"}),
  columnHelper("memberCreatedDate", {header: "가입일"}),
];

export function UserManageTable({
  tableData,
}: {
  tableData: userTableData[];
}) {
  const router = useRouter();

  const [data, setData] = useState<userTableData[]>(tableData);

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
                  <Link href="edit">
                  <button className="underline underline-offset-auto">정보 수정</button>
                  </Link>
                </td>
                <td className="border px-4 py-2 text-left border-l-0 border-r-0">
                  <button className="underline underline-offset-auto">정보 삭제</button>
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
            새 사용자 생성
          </button>
        </Link>
      </div>
    </div>
  )
}

const UserManageTableContainer = () => {
  const { data } = useQuery<userListData>({
    queryKey: ["uesrList"],
    queryFn: userListAPI,
  });

  if (!data) return null;
  console.log(data);
  return <UserManageTable tableData={data?.result.content} />;
};

export default UserManageTableContainer;