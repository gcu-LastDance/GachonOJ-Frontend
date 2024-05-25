"use client";

import {
  solutionHistorySubmitDetailAPI,
  sumbitHistoryAPI,
} from "@/api/problemAPI";
import ModalLarge from "@/components/modal/ModalLarge";
import columnHelper from "@/lib/columnHelper";
import { useProgramLangStore } from "@/store/useProgramLangStore";
import {
  SolutionHistorySubmitDetailData,
  SubmitHistoryData,
} from "@/types/problem";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState, useMemo } from "react";

const columns: ColumnDef<SubmitHistoryData, any>[] = [
  columnHelper("submissionDate", {
    header: "제출 일시",
  }),
  columnHelper("submissionStatus", {
    header: "정답 여부",
    cell: (value) => {
      const statusStyle =
        value === "정답" ? "text-primaryBlue" : "text-primaryRed";
      return <span className={statusStyle}>{value}</span>;
    },
  }),
  columnHelper("submissionLang", {
    header: "언어",
  }),
];

export default function HistoryModal({
  problemId,
  setCode,
  setModalOpen,
}: {
  problemId: number;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { setProgramLang } = useProgramLangStore();
  const [page, setPage] = useState(0);
  const [itemsPerPage] = useState(5);
  const [selectedSubmissionId, setSelectedSubmissionId] = useState<
    number | null
  >(null);

  const { data: submitHistoryData } = useQuery<SubmitHistoryData[]>({
    queryKey: ["submitHistory", problemId],
    queryFn: () => sumbitHistoryAPI(problemId),
    refetchOnMount: "always",
  });

  const paginatedData = useMemo(() => {
    if (!submitHistoryData) return [];
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    return submitHistoryData.slice(start, end);
  }, [submitHistoryData, page, itemsPerPage]);

  const handleGetSubmitCode = (
    submissionId: number,
    submissionLang: string
  ) => {
    setSelectedSubmissionId(submissionId);
    setProgramLang(submissionLang);
  };

  const { data: submitDetailCodeData } =
    useQuery<SolutionHistorySubmitDetailData>({
      queryKey: ["submitDetailCode", selectedSubmissionId],
      queryFn: () => solutionHistorySubmitDetailAPI(selectedSubmissionId!),
      enabled: !!selectedSubmissionId,
      refetchOnMount: "always",
    });

  setCode(submitDetailCodeData?.submissionCode || "");

  const table = useReactTable({
    data: paginatedData || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const pageCount = submitHistoryData
    ? Math.ceil(submitHistoryData.length / itemsPerPage)
    : 0;

  return (
    <ModalLarge>
      <div className="flex flex-col items-center py-[4vh] px-[7vw] h-[50vh]">
        <p className="font-PretendardBold text-primaryDark text-[1.5vw] mr-auto">
          제출이력
        </p>
        <div className="flex flex-col font-PretendardRegular text-realGrey text-[0.9vw] mt-[2vh] items-center">
          <table className="w-[35vw]">
            <thead>
              {table.getHeaderGroups().map((headerGroup, index) => (
                <tr
                  key={index}
                  className="h-[4vh] border-b-[0.1vh] border-semiGrey font-PretendardSemiBold text-darkGrey text-[1vw]"
                >
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className={`${
                        header.id === "submissionDate"
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
                  className="h-[4vh] border-b-[0.1vh] border-semiGrey font-PretendardLight text-darkGrey text-[0.85vw]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.column.id}
                      className={`${
                        cell.column.id === "submissionDate"
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
                      onClick={() =>
                        handleGetSubmitCode(
                          row.original.submissionId,
                          row.original.submissionLang
                        )
                      }
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
        <div className="flex justify-center mt-auto border-[0.15vw] border-primaryBlue bg-primaryBlue rounded-[0.2vw] h-[3vh] w-[9vw]">
          <button
            type="button"
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            className="w-[3vw] items-center justify-center flex"
            disabled={page === 0}
          >
            <span className="text-white font-PretendardSemiBold text-[0.8vw]">
              이전
            </span>
          </button>
          <span className="text-white font-PretendardSemiBold text-[0.8vw] flex items-center justify-center">
            {page + 1} / {pageCount}
          </span>
          <button
            type="button"
            onClick={() => setPage((prev) => Math.min(prev + 1, pageCount - 1))}
            className="border-[0.15vw] border-primaryBlue bg-primaryBlue w-[3vw] items-center justify-center rounded-[0.2vw] flex"
            disabled={page >= pageCount - 1}
          >
            <span className="text-white font-PretendardSemiBold text-[0.8vw]">
              다음
            </span>
          </button>
        </div>
        <div className="flex mt-[2vh]">
          <button
            type="button"
            onClick={() => {
              setModalOpen(false);
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
