"use client";

import { healthCheckAPI } from "@/api/admin/adminDashboardAPI";
import { useQuery } from "@tanstack/react-query";

export default function HealthCheck({ service }: { service: string }) {
  const { data, isFetching } = useQuery({
    queryKey: ["healthCheck"],
    queryFn: () => healthCheckAPI(service),
  });

  if (!isFetching)
    return (
      <div>
        <div className="flex justify-between px-20 mb-10">
          <div className="flex items-center space-x-5">
            <div className="text-2xl text-realGrey font-PretendardBold">
              서비스
            </div>
            <div>{data?.service}</div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="text-2xl text-realGrey font-PretendardBold">
              상태
            </div>
            <div>{data?.status}</div>
          </div>
        </div>
      </div>
    );
}
