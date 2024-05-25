"use client";

import ExamResult from "./_components/ExamResult";

export default function page({ params }: { params: { testId: number } }) {
  return (
    <div>
      <ExamResult testId={params.testId} />
    </div>
  );
}
