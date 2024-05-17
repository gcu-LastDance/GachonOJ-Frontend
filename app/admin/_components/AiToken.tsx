"use client";

import { AiTokenAPI } from "@/api/admin/adminDashboardAPI";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function AiToken({ data }: { data: any }) {
  return (
    <div className="flex-col px-5 py-5 shadow-md border-4 border-semiGrey bg-white overflow-y-hidden overflow-x-scroll">
      <div>금일 사용 토큰</div>
      <div>{data.result?.todayTokenUsage}</div>
      <div>전체 사용 토큰</div>
      <div>{data.result?.totalTokenUsage}</div>
    </div>
  );
}

const AiTokenContainer = () => {
  const { data } = useQuery({
    queryKey: ["AiToken"],
    queryFn: AiTokenAPI,
  });
  if (!data) return null;
  return <AiToken data={data} />;
};

export default AiTokenContainer;
