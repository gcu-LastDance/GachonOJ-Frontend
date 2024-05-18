import React from "react";
import AiToken from "./_components/AiToken";
import TodaySubmission from "./_components/TodaySubmission";

export default function page() {
  return (
    <div className="flex">
      <div className="flex-wrap">
        <AiToken />
      </div>
      <div className="flex w-1/2 h-60">
        <TodaySubmission />
      </div>
    </div>
  );
}
