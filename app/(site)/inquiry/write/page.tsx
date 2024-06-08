import React from "react";
import InquiryForm from "./InquiryForm";

export default function page() {
  return (
    <div>
      <span className="font-PretendardMedium text-[1.4vw]">
        새 1:1 문의 작성
      </span>
      <div className="mt-[3vh] flex justify-center items-center">
        <InquiryForm />
      </div>
    </div>
  );
}
