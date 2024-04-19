"use client";

import FullButton from "@/components/button/FullButton";
import { LoginFormData } from "@/types/auth";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormData>();
  const [isLoginReject, setIsLoginReject] = useState(false);

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <form className="mt-[8vh] mb-[6vh]">
      <div className="mb-[9vh]">
        <div className="flex flex-col mb-6">
          <input
            {...register("email", {
              required: true,
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "유효하지 않은 이메일 형식입니다.",
              },
            })}
            placeholder="이메일을 입력하세요"
            type="text"
            className="h-[5vh] w-full border-b-2 border-semiGrey placeholder-realGrey focus:placeholder-semiGrey focus:outline-none"
          />
          <span
            className={`${
              isLoginReject
                ? "text-primaryRed text-[1vw]"
                : "text-realGrey text-[0.9vw]"
            } font-PretendardLight pl-[0.5vw] mt-[0.5vh]`}
          >
            {!isLoginReject
              ? "* 가천대학교 이메일로 로그인이 가능합니다."
              : "이메일 혹은 비밀번호가 일치하지 않습니다."}
          </span>
        </div>
        <div className="mb-3">
          <input
            {...register("password", { required: true })}
            placeholder="비밀번호를 입력하세요"
            className="h-[5vh] w-full border-b-2 border-semiGrey placeholder-realGrey focus:placeholder-semiGrey focus:outline-none"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="appearance-none border-[1px] border-semiGrey rounded-full w-5 h-5 checked:bg-primaryBlue checked:border-[0.19vw]"
            />
            <label className="font-PretendardRegular text-sm text-darkGrey ml-2">
              로그인 상태 유지
            </label>
          </div>
          <Link href="/pwinquiry">
            <button type="button" className="flex items-center mt-1">
              <span className="font-PretendardRegular text-realGrey text-sm">
                비밀번호 찾기
              </span>
            </button>
          </Link>
        </div>
      </div>
      <FullButton onClick={handleSubmit(onSubmit)} text={"로그인"} />
      <div className="flex justify-center mt-5 items-center">
        <span className="font-PretendardLight text-realGrey text-sm">
          회원이 아니신가요?
        </span>
        <Link href="/signup">
          <button type="button" className="ml-2 flex items-center">
            <span className="font-PretendardSemiBold text-darkGrey text-sm">
              회원가입
            </span>
            <MdKeyboardArrowRight size="1.5rem" color="#505050" />
          </button>
        </Link>
      </div>
    </form>
  );
}
