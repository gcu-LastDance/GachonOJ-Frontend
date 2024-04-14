import React from "react";

export default function page({ params }: { params: { noticeId: number } }) {
  return <div>noice page - notice num {params.noticeId}</div>;
}
