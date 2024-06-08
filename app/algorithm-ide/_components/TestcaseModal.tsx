"use client";

import ModalLarge from "@/components/modal/ModalLarge";
import columnHelper from "@/lib/columnHelper";
import { TestcaseSetData } from "@/types/problem";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useState } from "react";

const columns: ColumnDef<TestcaseSetData, any>[] = [
  columnHelper("input", {
    header: "입력",
  }),
  columnHelper("output", { header: "출력" }),
];

export default function TestcaseModal({
  testcase,
  setTestcase,
  setModalOpen,
}: {
  testcase: TestcaseSetData[];
  setTestcase: React.Dispatch<React.SetStateAction<TestcaseSetData[]>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [newEntry, setNewEntry] = useState({ input: "", output: "" });

  const addTestcase = () => {
    setTestcase([...testcase, newEntry]);
    setNewEntry({ input: "", output: "" });
  };

  const removeTestcase = (index: number) => {
    const newTestcases = testcase.filter((_, idx) => idx !== index);
    setTestcase(newTestcases);
  };

  const table = useReactTable({
    data: testcase,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <ModalLarge>
      <div className="flex flex-col items-center py-[5.5vh]">
        <p className="font-PretendardBold text-primaryDark text-[1.5vw]">
          테스트케이스 추가
        </p>
        <div className="flex flex-col h-[30vh] font-PretendardRegular text-realGrey text-[0.9vw] mt-[1vh] items-center">
          <form className="flex my-[1vh]">
            <table className="w-[34vw]">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr
                    key={headerGroup.id}
                    className="h-[4vh] border-b-[0.1vh] border-semiGrey font-PretendardSemiBold text-darkGrey text-[0.95vw] text-left"
                  >
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} className="pl-[2vw] w-[15vw]">
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
                    className="h-[4vh] border-b-[0.1vh] border-semiGrey font-PretendardLight text-darkGrey text-[0.8vw]"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="pl-[2vw] w-[15vw]">
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
                        onClick={() => removeTestcase(row.index)}
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                ))}
                {testcase.length < 5 && (
                  <tr className="h-[4vh] border-b-[0.1vh] border-semiGrey font-PretendardLight text-darkGrey text-[0.8vw]">
                    <td>
                      <input
                        type="text"
                        className="ml-[2vw] h-[2.5vh] border-[0.1vw] border-realGrey rounded-[0.5vh] bg-superlightGrey focus:outline-none"
                        value={newEntry.input}
                        onChange={(e) =>
                          setNewEntry({ ...newEntry, input: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="ml-[2vw] h-[2.5vh] border-[0.1vw] border-realGrey rounded-[0.5vh] bg-superlightGrey focus:outline-none"
                        value={newEntry.output}
                        onChange={(e) =>
                          setNewEntry({ ...newEntry, output: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <button
                        type="button"
                        className="underline underline-offset-auto text-realGrey"
                        onClick={addTestcase}
                      >
                        추가
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </form>
        </div>
        <div className="flex mt-auto mb-[4vh]">
          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="flex border-[0.15vw] border-primaryBlue bg-primaryBlue w-[10vw] h-[4vh] items-center justify-center rounded-[0.2vw]"
          >
            <span className="text-white font-PretendardSemiBold text-[0.85vw]">
              저장
            </span>
          </button>
        </div>
      </div>
    </ModalLarge>
  );
}
