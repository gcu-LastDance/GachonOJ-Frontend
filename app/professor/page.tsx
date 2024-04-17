import React from "react";
import OngoingExams from "./_components/OngoingExams";
import ShortCut from "./_components/ShortCut";
export default function page() {
  return (
    <div>
      <div>
        <div>안녕하세요 교수님</div>
        <div>가천OJ 교수님 전용 관리 페이지입니다.</div>
      </div>
      <div>
        <OngoingExams></OngoingExams>
        <ShortCut></ShortCut>
      </div>
    </div>
  );
}
