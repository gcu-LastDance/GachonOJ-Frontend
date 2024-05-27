"use client";

import { examDetailAPI, examEnterAPI } from "@/api/testAPI";
import { TestDetailData } from "@/types/test";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function page({ params }: { params: { examId: number } }) {
  const router = useRouter();
  const { data: testDetailData } = useQuery<TestDetailData>({
    queryKey: ["examDetail"],
    queryFn: () => examDetailAPI(params.examId),
    refetchOnMount: "always",
  });

  const examEnterMutation = useMutation({
    mutationFn: examEnterAPI,
    onError: (error) => {
      console.error(error);
    },
    onSuccess: (data) => {
      if (data.success) {
        router.push(`/test-ide/${params.examId}`);
      }
    },
  });

  const handleTestEnter = () => {
    examEnterMutation.mutate(params.examId);
  };

  return (
    <div className="flex flex-col mx-[8vw] py-[6vh]">
      <div>
        <p className="font-PretendardSemiBold text-[1.8vw] text-primaryDark ml-[0.2vw]">
          {testDetailData?.examTitle}
        </p>
      </div>
      <hr className="w-[44vw] mt-[1.5vh] border-[0.15vh] border-primaryDark" />
      <div className="mt-[3vh]">
        <p className="font-PretendardMedium text-[1.2vw] text-primaryDark">
          시험 정보
        </p>
        <div className="w-[20vw] mx-auto">
          <div className="flex my-[2.5vh] justify-between">
            <span className="font-PretendardLight text-[0.9vw] text-primaryDark">
              시험 시작 시간
            </span>
            <span className="font-PretendardMedium text-[0.9vw] text-primaryDark">
              {testDetailData?.examStartDate}
            </span>
          </div>
          <div className="flex my-[2.5vh] justify-between">
            <span className="font-PretendardLight text-[0.9vw] text-primaryDark">
              시험 종료 시간
            </span>
            <span className="font-PretendardMedium text-[0.9vw] text-primaryDark">
              {testDetailData?.examEndDate}
            </span>
          </div>
          <div className="flex my-[2.5vh] space-x-[6vw]">
            <span className="font-PretendardLight text-[0.9vw] text-primaryDark">
              응시 가능 언어
            </span>
            <span className="font-PretendardMedium text-[0.9vw] text-primaryDark">
              Java
            </span>
          </div>
        </div>
      </div>
      <div className="mt-[2vh]">
        <p className="font-PretendardMedium text-[1.2vw] text-primaryDark">
          안내 사항
        </p>
        <div className="w-[36vw] h-[18vh] border-[0.15vh] border-semiGrey rounded-[0.8vh] bg-superlightGrey py-[1vh] px-[1vw] mx-auto mt-[3vh]">
          <span className="font-PretendardLight text-[0.75vw] text-realGrey">
            {testDetailData?.examNotice}
          </span>
        </div>
      </div>
      <div className="mt-[5vh] mx-auto">
        <button
          type="button"
          onClick={handleTestEnter}
          className="rounded-[0.7vh] bg-primaryBlue w-[7vw] h-[4vh] text-white font-PretendardMedium text-[1.6vh] items-center justify-center flex"
        >
          응시하기
        </button>
      </div>
    </div>
  );
}
