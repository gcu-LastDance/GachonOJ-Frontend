"use client";

import { noticeDetailAPI } from "@/api/noticeAPI";
import { NoticeDetailData } from "@/types/notice";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function page({ params }: { params: { noticeId: number } }) {
  const { data: noticeDetailData } = useQuery<NoticeDetailData>({
    queryKey: ["noticeDetailData"],
    queryFn: () => noticeDetailAPI(params.noticeId),
    refetchOnMount: "always",
  });

  return (
    <div>
      <span className="font-PretendardMedium text-[1.4vw]">공지사항 조회</span>
      <div className="flex flex-col mt-[7vh] space-y-[5vh]">
        <div className="flex items-center">
          <span className="font-PretendardSemiBold text-[1vw] mr-[3vw]">
            공지 제목
          </span>
          <span className="font-PretendardLight text-[1vw]">
            {noticeDetailData?.noticeTitle}
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-PretendardSemiBold text-[1vw] mr-[3vw]">
            게시일
          </span>
          <span className="font-PretendardLight text-[1vw]">
            {noticeDetailData?.noticeCreatedDate}
          </span>
          <span className="font-PretendardSemiBold text-[1vw] mr-[3vw] ml-[10vw]">
            작성자
          </span>
          <span className="font-PretendardLight text-[1vw]">
            {noticeDetailData?.memberNickname}
          </span>
        </div>
        <div className="flex">
          <span className="font-PretendardSemiBold text-[1vw] mr-[3vw] w-[8vw]">
            공지 내용
          </span>
          <span className="w-[40vw] font-PretendardLight text-[1vw]">
            {noticeDetailData?.noticeContents}
          </span>
        </div>
      </div>
    </div>
  );
}
