import React from "react";

export default function page({ params }: { params: { problemId: number } }) {
  return (
    <div>
      <span className="font-PretendardMedium text-[1.4vw]">공지사항 조회</span>
      <div>notice num {params.problemId}</div>
    </div>
  );
}
