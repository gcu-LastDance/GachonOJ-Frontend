"use client";

import FullButton from "@/components/Button/FullButton";
import { LoginFormData } from "@/types/auth";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function PwInquiryForm() {
  const { register, handleSubmit } = useForm<{ email: string }>();
  const onSubmit = (data: { email: string }) => {
    console.log(data);
  };

  return (
    <form className="mt-[8vh] mb-[6vh]">
      <div className="mb-[5vh]">
        <div className="flex flex-col mb-6">
          <input
            {...register("email", { required: true })}
            placeholder="비밀번호 재설정을 위해 이메일을 입력하세요"
            type="text"
            className="h-[5vh] w-full border-b-2 border-semiGrey placeholder-realGrey focus:placeholder-semiGrey"
          />
          <span className="font-PretendardLight text-xs text-realGrey mt-2">
            * 가입하신 이메일로 비밀번호 재설정이 가능합니다.
          </span>
        </div>
      </div>
      <FullButton onClick={handleSubmit(onSubmit)} text={"비밀번호 재설정"} />
      <div className="flex justify-between mt-7 items-center">
        <Link href="/login">
          <button type="button" className="flex items-center">
            <span className="font-PretendardMedium text-realGrey text-base">
              로그인 페이지
            </span>
            <MdKeyboardArrowRight size="1.5rem" color="#767676" />
          </button>
        </Link>
        <Link href="/signup">
          <button type="button" className="flex items-center">
            <span className="font-PretendardMedium text-realGrey text-">
              회원가입 페이지
            </span>
            <MdKeyboardArrowRight size="1.5rem" color="#767676" />
          </button>
        </Link>
      </div>
    </form>
  );
}
