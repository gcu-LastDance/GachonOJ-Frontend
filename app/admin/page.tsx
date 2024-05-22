import React from "react";
import AiToken from "./_components/AiToken";
import TodaySubmission from "./_components/TodaySubmission";
import InquiryList from "./_components/InquiryList";

export default function page() {
  return (
    <div className="flex flex-auto space-x-4">
      <div className="flex flex-auto w-1/2">
        <AiToken />
      </div>
      <div className="flex flex-auto w-1/2 h-80">
        <TodaySubmission />
      </div>
      {/* <div className="flex">
        <InquiryList />
      </div> */}
    </div>
  );
}
