"use client";

import columnHelper from "@/lib/columnHelper";
import { ProblemExcuteResultData } from "@/types/problem";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

const columns: ColumnDef<ProblemExcuteResultData, any>[] = [
  columnHelper("result", {
    header: "결과",
  }),
  columnHelper("output", { header: "출력" }),
];

export default function IdeResultWindow({
  excuteResult,
}: {
  excuteResult: ProblemExcuteResultData[];
}) {
  const table = useReactTable({
    data: excuteResult,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="border-t-[0.5vh]">
      <div className="font-PretendardSemiBold text-[1.2vw] text-darkGrey border-b-[0.2vh] h-[5vh] items-center flex pl-[0.5vw]">
        실행 결과
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="h-[4vh] border-b-[0.1vh] border-semiGrey font-PretendardSemiBold text-darkGrey text-[0.95vw]"
            >
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
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
              className="h-[4vh] border-b-[0.1vh] border-semiGrey font-PretendardSemiBold text-darkGrey text-[0.9vw]"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
