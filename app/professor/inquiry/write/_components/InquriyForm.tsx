"use client";

import { inquirySubmitAPI } from "@/api/professor/professorInquiryAPI";
import { InquiryFormData } from "@/types/professor/inquiry";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function InquiryForm() {
  const { register, handleSubmit } = useForm<InquiryFormData>();
  const router = useRouter();

  const onSubmit = (data: InquiryFormData) => {
    inquirySubmitMutation.mutate(data);
  };

  const inquirySubmitMutation = useMutation({
    mutationFn: inquirySubmitAPI,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        router.push("");
      }
    },
  });

  return (
    <form className="flex flex-col space-y-[4vh] my-[2vh]">
      <div className="flex items-center space-x-[4vw]">
        <span className="font-PretendardSemiBold text-[1vw] text-primaryDark">
          문의 제목
        </span>
        <input
          type="text"
          {...register("inquiryTitle")}
          className="w-[40vw] h-[5vh] border-semiGrey border-[0.15vw] rounded-[0.2vw] bg-white focus:outline-none px-[0.7vw]"
        />
      </div>
      <div className="flex items-baseline  space-x-[4vw]">
        <span className="font-PretendardSemiBold text-[1vw] text-primaryDark">
          문의 내용
        </span>
        <textarea
          {...register("inquiryContents")}
          className="w-[40vw] h-[34vh] border-semiGrey border-[0.15vw] rounded-[0.2vw] bg-white focus:outline-none py-[0.8vh] px-[0.7vw]"
          rows={10}
        />
      </div>
      <div className="flex justify-end space-x-[1vw]">
        <Link
          href="/list"
          className="w-[5vw] h-[4.2vh] border-[0.12vw] border-realGrey bg-white font-PretendardSemiBold text-realGrey text-[0.85vw] rounded-[0.3vw] flex items-center justify-center"
        >
          돌아 가기
        </Link>
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          className="w-[5vw] h-[4.2vh] border-[0.12vw] border-realGrey bg-realGrey font-PretendardSemiBold text-white text-[0.85vw] rounded-[0.3vw]"
        >
          문의 제출
        </button>
      </div>
    </form>
  );
}
