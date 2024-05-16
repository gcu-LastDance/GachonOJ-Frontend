import React, { useState } from "react";
import Link from "next/link";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { inquiryDeleteAPI, inquiryListAPI } from "@/api/admin/adminInquiryAPI";
import { inquiryTableData, inquiryListData } from "@/types/admin/inquiry";
import columnHelper from "@/lib/columnHelper";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import PaginationBar from "@/components/pagination/PaginationBar";

const columns: ColumnDef<inquiryTableData, any>[] = [
  columnHelper("inquiryTitle", { header: "제목" }),
  columnHelper("memberNickname", { header: "작성자" }),
  columnHelper("inquiryCreatedDate", { header: "작성일" }),
  columnHelper("inquiryStatus", { header: "답변여부" }),
];

export function InquiryManageTable({
  tableData,
  paginationData,
  pageNo,
  setPageNo,
}: {
  tableData: inquiryTableData[];
  paginationData: any;
  pageNo: number;
  setPageNo: React.Dispatch<React.SetStateAction<number>>;
}) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const onDelete = (inquiryId: number) => {
    DeleteMutation.mutate(inquiryId);
  };

  const DeleteMutation = useMutation({
    mutationFn: (inquiryId: number) => inquiryDeleteAPI(inquiryId),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ["inquiryList"] });
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
                  {cell.column.columnDef.header === "제목" ? (
                    <Link
                      href={`/admin/inquiry-manage/${row.original.inquiryId}`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Link>
                  ) : (
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  )}
                </td>
              ))}
              <td className="border px-4 py-2 text-left border-l-0 border-r-0">
                <button
                  className="underline underline-offset-auto"
                  onClick={() => onDelete(row.original.inquiryId)}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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

const InquiryManageTableContainer = () => {
  const [pageNo, setPageNo] = useState(1);
  const { data } = useQuery<inquiryListData>({
    queryKey: ["inquiryList"],
    queryFn: inquiryListAPI,
  });
  if (!data) return null;
  return (
    <InquiryManageTable
      tableData={data.result.content}
      paginationData={data?.result}
      pageNo={pageNo}
      setPageNo={setPageNo}
    />
  );
};

export default InquiryManageTableContainer;
