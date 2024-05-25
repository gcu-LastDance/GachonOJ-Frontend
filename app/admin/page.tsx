import React from "react";
import AiToken from "./_components/AiToken";
import TodaySubmission from "./_components/TodaySubmission";
import InquiryList from "./_components/InquiryList";
import HealthCheck from "./_components/HealthCheck";

export default function page() {
  return (
    <div className="flex flex-auto space-x-4">
      <div className="flex flex-auto w-1/4 ">
        <AiToken />
      </div>
      <div className="flex flex-auto w-1/3 h-80">
        <TodaySubmission />
      </div>
      {/* <div className="flex">
        <HealthCheck service="Ai-Service" />
      </div> */}
      <div className="flex flex-auto w-full h-80">
        <InquiryList />
      </div>
    </div>
  );
}
