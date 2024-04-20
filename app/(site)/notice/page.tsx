import React from "react";
import NoticeTable from "./_components/NoticeTable";
import PaginationBar from "@/components/pagination/PaginationBar";

export default function page() {
  return (
    <div>
      <span className="font-PretendardMedium text-[1.4vw]">공지사항 목록</span>
      <div className="mt-[2vh]">
        <NoticeTable />
      </div>
      <div className="mt-[3.5vh]">
        <PaginationBar />
      </div>
    </div>
  );
}
