"use client";

import { inquiryDetailAPI } from "@/api/inquiryAPI";
import { InquiryDetailData } from "@/types/inquiry";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function page({ params }: { params: { inquiryId: number } }) {
  const { data: inquiryDetailData } = useQuery<InquiryDetailData>({
    queryKey: ["inquiryDetailData"],
    queryFn: () => inquiryDetailAPI(params.inquiryId),
    refetchOnMount: "always",
  });

  return (
    <div>
      <span className="font-PretendardMedium text-[1.4vw]">문의 상세 조회</span>
      <div className="flex flex-col mt-[7vh] space-y-[5vh]">
        <div className="flex items-center">
          <span className="font-PretendardSemiBold text-[1vw] mr-[3vw]">
            문의 제목
          </span>
          <span className="font-PretendardLight text-[1vw]">
            {inquiryDetailData?.inquiryTitle}
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-PretendardSemiBold text-[1vw] mr-[3vw]">
            작성일
          </span>
          <span className="font-PretendardLight text-[1vw]">
            {inquiryDetailData?.inquiryCreatedDate}
          </span>
        </div>
        <div className="flex items-center">
          <span className="font-PretendardSemiBold text-[1vw] mr-[3vw]">
            문의 내용
          </span>
          <span className="font-PretendardLight text-[1vw]">
            {inquiryDetailData?.inquiryContents}
          </span>
        </div>
        {inquiryDetailData?.replyContents && (
          <div>
            <hr />
            <div className="flex">
              <span className="font-PretendardSemiBold text-[1vw] mr-[3vw] w-[8vw]">
                문의 답변
              </span>
              <span className="w-[40vw] font-PretendardLight text-[1vw]">
                {inquiryDetailData?.replyContents}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
