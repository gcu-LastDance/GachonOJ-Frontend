import { findCandidateAPI } from "@/api/admin/adminExamAPI";
import columnHelper from "@/lib/columnHelper";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import Image from "next/image";

function CandidateListTable({
  tableData,
  candidateList,
  setCandidateList,
}: {
  tableData: any;
  candidateList: [];
  setCandidateList: any,
}) {

  const handleCheckboxChange = (memberId: number, isChecked: boolean) => {
    
    if (isChecked) {
      setCandidateList([...candidateList, memberId]);
    } else {
      setCandidateList(candidateList.filter(id => id !== memberId));
    }
  };

  const columns: ColumnDef<any, any>[] = [
    columnHelper("memberNumber", { header: "학번" }),
    columnHelper("memberImg", {
      header: "사진",
      cell: (value) =>
        value && (
          <Image
            src={value}
            alt="사진"
            className="rounded-full"
            objectFit="cover"
            width={20}
            height={20}
          />
        ),
    }),
    columnHelper("memberName", { header: "이름" }),
    columnHelper("memberEmail", { header: "이메일" }),
  ];

  const [data, setData] = useState<any[]>(tableData);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-fit text-sm">
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
            <td>
              <input
                type="checkbox"
                onChange={(e) =>
                  handleCheckboxChange(row.original.memberId, e.target.checked)
                }
              />
            </td>
            {row.getVisibleCells().map((cell) => (
              <td
                className="border px-4 py-2 text-left border-t-0 border-l-0 border-r-0"
                key={cell.id}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function AddCandidate({
  memberInfo,
  candidateList,
  setCandidateList,
}: {
  memberInfo: number | string;
  candidateList: [];
  setCandidateList: any;
}) {
  // memberInfo가 변경될 때마다 검색어 상태를 업데이트

  const { data } = useQuery({
    queryKey: ["candidateList", memberInfo], // 검색어를 queryKey에 추가
    queryFn: () => findCandidateAPI(memberInfo), // 검색어를 사용하여 API 호출
    staleTime: 0,
  });
  console.log(data);

  if (data) {
    return (
      <CandidateListTable
        tableData={data?.result}
        candidateList={candidateList}
        setCandidateList={setCandidateList}
      />
    );
  } else {
    return null;
  }
}
