import { memberProblemTableAPI } from "@/api/problemAPI";
import DiffBadge from "@/components/badge/DiffBadge";
import CategoryButton from "@/components/button/CategoryButton";
import PaginationBar from "@/components/pagination/PaginationBar";
import columnHelper from "@/lib/columnHelper";
import {
  ProblemTableData,
  ProfileProblemType,
  difficulty,
} from "@/types/problem";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

const columns: ColumnDef<ProblemTableData, any>[] = [
  columnHelper("problemDiff", {
    header: "난이도",
    cell: (value) => (
      <div className="flex justify-center">
        <DiffBadge difficulty={value as difficulty} />
      </div>
    ),
  }),
  columnHelper("problemTitle", {
    header: "문제 제목",
  }),
  columnHelper("problemClass", {
    header: "분류",
    cell: (value) => (
      <div className="flex justify-center">
        <CategoryButton categories={value as string} />
      </div>
    ),
  }),
  columnHelper("correctPeople", {
    header: "정답자 수",
  }),
  columnHelper("correctRate", {
    header: "정답률",
  }),
  columnHelper("isBookmarked", {
    header: "북마크",
    cell: (value) => {
      return value ? (
        <div className="text-[1.2vw] flex items-center justify-center">
          <IoBookmark />
        </div>
      ) : (
        <div className="text-[1.2vw] flex items-center justify-center">
          <IoBookmarkOutline />
        </div>
      );
    },
  }),
];

export default function MemberProblemTable() {
  const [menu, setMenu] = useState<ProfileProblemType>("bookmark");
  const [debouncedMenu, setDebouncedMenu] = useState(menu);
  const [pageNum, setPageNum] = useState<number>(1);
  const [debouncedPageNum, setDebouncedPageNum] = useState(pageNum);

  const activeMenuCss =
    "flex w-[16.3vw] h-[5.5vh] items-center justify-center bg-white";
  const inactiveMenuCss =
    "flex w-[16.4vw] h-[5.5vh] items-center justify-center border-b-[0.15vw] border-semiSemiGrey bg-lightGrey";

  const { data: problemData } = useQuery({
    queryKey: ["problemTableGuest", debouncedMenu, debouncedPageNum],
    queryFn: () =>
      memberProblemTableAPI({ menu: debouncedMenu, pageNum: debouncedPageNum }),
    refetchOnMount: "always",
  });

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedPageNum(pageNum), 300);
    return () => clearTimeout(timeout);
  }, [pageNum]);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedMenu(menu), 300);
    return () => clearTimeout(timeout);
  }, [menu]);

  const table = useReactTable({
    data: problemData?.content || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex flex-col items-center h-[70vh]">
      <div className="h-[5.5vh] flex mb-[2.5vh]">
        <button
          type="button"
          onClick={() => setMenu("bookmark")}
          className={
            menu === "bookmark"
              ? activeMenuCss + " border-r-[0.15vw]"
              : menu === "solved"
              ? inactiveMenuCss + " border-r-[0.15vw]"
              : inactiveMenuCss
          }
        >
          북마크 문제
        </button>
        <button
          type="button"
          onClick={() => setMenu("wrong")}
          className={
            menu === "wrong"
              ? activeMenuCss + " border-x-[0.15vw]"
              : inactiveMenuCss
          }
        >
          도전중인 문제
        </button>
        <button
          type="button"
          onClick={() => setMenu("solved")}
          className={
            menu === "solved"
              ? activeMenuCss + " border-l-[0.15vw]"
              : menu === "bookmark"
              ? inactiveMenuCss + " border-l-[0.15vw]"
              : inactiveMenuCss
          }
        >
          해결한 문제
        </button>
      </div>
      <table className="w-[47vw]">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="h-[5vh] border-b-[0.1vh] border-semiGrey font-PretendardSemiBold text-darkGrey text-[0.95vw]"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={`${
                    header.id === "title"
                      ? "text-left w-[16vw]"
                      : "text-center w-[11w]"
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
              className="h-[5vh] border-b-[0.1vh] border-semiGrey font-PretendardSemiBold text-darkGrey text-[1.1vw]"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={`${
                    cell.column.id === "title" ? "text-left" : "text-center"
                  } ${
                    cell.column.id === "category" && "w-[8vw]"
                  } text-[0.95vw] font-PretendardLight text-realGrey`}
                >
                  {cell.column.id === "title" ? (
                    <Link href={`/algorithm-ide/1`}>
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
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-auto flex justify-center items-center mb-[3vh]">
        {problemData && (
          <PaginationBar
            totalElements={problemData.totalElements}
            pageSize={problemData.pageable.pageSize}
            pageNo={pageNum}
            setPageNo={setPageNum}
          />
        )}
      </div>
    </div>
  );
}
