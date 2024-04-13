import React from "react";

export default function page({ params }: { params: { noticeId: string } }) {
  return <div>noice page - notice num {params.noticeId}</div>;
}
