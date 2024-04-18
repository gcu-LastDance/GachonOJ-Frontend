"use client";

import { MainTableColumn, MainTableData } from "@/types/notice";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import React, { useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTable } from "react-table";

const main_table_data: MainTableData[] = [
  {
    id: 1,
    title: "1서비스 정식 오픈을 위한 운영서버 점검 안내",
    author: "가천OJ 관리자",
    date: "2022-01-01",
  },
  {
    id: 2,
    title: "2서비스 정식 오픈을 위한 운영서버 점검 안내",
    author: "가천OJ 관리자",
    date: "2022-01-01",
  },
  {
    id: 3,
    title: "3서비스 정식 오픈을 위한 운영서버 점검 안내",
    author: "가천OJ 관리자",
    date: "2022-01-01",
  },
  {
    id: 4,
    title: "4서비스 정식 오픈을 위한 운영서버 점검 안내",
    author: "GachonOJ",
    date: "2022-01-01",
  },
  {
    id: 5,
    title: "5서비스 정식 오픈을 위한 운영서버 점검 안내",
    author: "가천OJ 관리자",
    date: "2022-01-01",
  },
];

const main_columns: MainTableColumn[] = [
  { Header: "제목", accessor: "title" },
  { Header: "작성자", accessor: "author" },
  { Header: "게시일", accessor: "date" },
];

export default function MainNotice() {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<MainTableData>({ columns: main_columns, data: main_table_data });

  return (
    <div className="flex pl-[3vw] mt-[1.5vh]">
      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map((headerGroup, index) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={index}
              className="h-[5vh] border-b-[0.1vh] border-semiGrey font-PretendardSemiBold text-darkGrey text-[1.1vw]"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.id}
                  className={`${
                    column.id === "title"
                      ? "text-left w-[28vw] pl-[3vw]"
                      : "text-center w-[12.5w]"
                  }`}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                key={row.id}
                className="h-[5vh] border-b-[0.1vh] border-semiGrey font-PretendardSemiBold text-darkGrey text-[1.1vw]"
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    key={cell.column.id}
                    className={`${
                      cell.column.id === "title"
                        ? "text-left pl-[3vw]"
                        : "text-center"
                    }  text-[1vw] font-PretendardLight text-realGrey`}
                  >
                    {cell.column.id === "title" ? (
                      <Link href={`/notice/${row.original.id}`}>
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
    </div>
  );
}
