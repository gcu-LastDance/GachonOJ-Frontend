"use client";

import { AiTokenAPI } from "@/api/admin/adminDashboardAPI";
import { AiTokenData } from "@/types/admin/dashboard";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function AiToken({ data }: { data: AiTokenData }) {
  return (
    <div className="flex flex-col px-5 py-5 shadow-md border-4 border-semiGrey bg-white overflow-y-hidden w-full h-full overflow-x-scroll">
      <div className="text-2xl">토큰 사용 현황</div>
      <div className="flex-auto mt-5 flex flex-col justify-center items-center">
        <div className="flex justify-center py-2">
          <div>금일 사용 토큰:&nbsp;</div>
          <div>{data.todayTokenUsage}</div>
        </div>
        <div className="flex justify-center py-2">
          <div>전체 사용 토큰:&nbsp;</div>
          <div>{data.totalTokenUsage}</div>
        </div>
      </div>
    </div>
  );
}

const AiTokenContainer = () => {
  const { data } = useQuery({
    queryKey: ["AiToken"],
    queryFn: AiTokenAPI,
  });
  if (!data) return null;
  return <AiToken data={data.result} />;
};

export default AiTokenContainer;
