import React from "react";
import InquiryTable from "./_components/InquiryTable";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="font-PretendardMedium text-[1.4vw]">
          내 1:1 문의 내역
        </span>
        <Link
          href="/inquiry/write"
          className="flex border-[0.15vw] bg-superlightGrey border-primaryBlue w-[8vw] h-[3.9vh] items-center justify-center rounded-lg"
        >
          <span className="font-PretendardMedium text-[0.93vw] text-primaryBlue">
            새 문의사항 작성
          </span>
        </Link>
      </div>
      <div className="mt-[2vh]">
        <InquiryTable />
      </div>
    </div>
  );
}
