"use client";

import ModalLarge from "@/components/modal/ModalLarge";
import columnHelper from "@/lib/columnHelper";
import { SubmitHistoryData } from "@/types/problem";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const submitHistoryData: SubmitHistoryData[] = [
  {
    submitId: 1,
    submitTime: "2024-05-05 14:00:00",
    submitResult: "오답",
    submitLang: "C++",
  },
];

const columns: ColumnDef<SubmitHistoryData, any>[] = [
  columnHelper("submitTime", {
    header: "제출 일시",
  }),
  columnHelper("submitResult", {
    header: "정답 여부",
    cell: (value) => {
      const statusStyle =
        value === "정답" ? "text-primaryBlue" : "text-primaryRed";
      return <span className={statusStyle}>{value}</span>;
    },
  }),
  columnHelper("submitLang", {
    header: "언어",
  }),
];

export default function page() {
  const router = useRouter();
  const params = useParams();

  const table = useReactTable({
    data: submitHistoryData || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <ModalLarge>
      <div className="flex flex-col items-center py-[5.5vh] px-[7vw]">
        <p className="font-PretendardBold text-primaryDark text-[1.5vw] mr-auto">
          제출이력
        </p>
        <div className="flex flex-col font-PretendardRegular text-realGrey text-[0.9vw] mt-[4vh] items-center">
          <table className="w-[35vw]">
            <thead>
              {table.getHeaderGroups().map((headerGroup, index) => (
                <tr
                  key={index}
                  className="h-[5vh] border-b-[0.1vh] border-semiGrey font-PretendardSemiBold text-darkGrey text-[1vw]"
                >
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className={`${
                        header.id === "submitTime"
                          ? "text-left w-[15vw] pl-[1vw]"
                          : "text-center w-[8vw]"
                      }`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="h-[5vh] border-b-[0.1vh] border-semiGrey font-PretendardLight text-darkGrey text-[0.85vw]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.column.id}
                      className={`${
                        cell.column.id === "submitTime"
                          ? "text-left w-[15vw] pl-[1vw] tracking-widest"
                          : "text-center w-[8vw]"
                      }`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                  <td>
                    <button
                      type="button"
                      className="underline underline-offset-auto text-realGrey"
                    >
                      불러오기
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex mt-[4vh]">
          <button
            type="button"
            onClick={() => {
              router.back();
            }}
            className="flex border-[0.15vw] border-primaryBlue bg-primaryBlue w-[10vw] h-[4vh] items-center justify-center rounded-[0.2vw]"
          >
            <span className="text-white font-PretendardSemiBold text-[0.85vw]">
              창닫기
            </span>
          </button>
        </div>
      </div>
    </ModalLarge>
  );
}
