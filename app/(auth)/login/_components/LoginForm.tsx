"use client";

import { loginAPI } from "@/api/authAPI";
import { memberProgramLangAPI } from "@/api/memberAPI";
import FullButton from "@/components/button/FullButton";
import { useProgramLangStore } from "@/store/useProgramLangStore";
import useUserStore from "@/store/useUserStore";
import { LoginFormData } from "@/types/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function LoginForm() {
  const router = useRouter();
  const { setUser } = useUserStore();
  const { setProgramLang } = useProgramLangStore();
  const { register, handleSubmit } = useForm<LoginFormData>();
  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  const [isLoginReject, setIsLoginReject] = useState(false);

  const onSubmit = (data: LoginFormData) => {
    loginMutation.mutate(data);
  };

  const loginMutation = useMutation({
    mutationFn: loginAPI,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.data.success) {
        setUser(
          data.data.result.memberImg,
          data.data.result.memberRole,
          data.authToken
        );
        setIsLoginSuccessful(true);
        router.push("/main");
      } else if (data.data.code === 4011) {
        setIsLoginReject(true);
      }
    },
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  const { data: memberProgramLangData } = useQuery({
    queryKey: ["memberProgramLang"],
    queryFn: memberProgramLangAPI,
    enabled: isLoginSuccessful, // 로그인 성공했을 때만 쿼리 실행
  });

  useEffect(() => {
    if (memberProgramLangData) {
      setProgramLang(memberProgramLangData);
    }
  }, [memberProgramLangData]);

  return (
    <form className="mt-[8vh] mb-[6vh]">
      <div className="mb-[9vh]">
        <div className="flex flex-col mb-6">
          <input
            {...register("memberEmail", {
              required: true,
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "유효하지 않은 이메일 형식입니다.",
              },
            })}
            onKeyDown={handleKeyDown}
            placeholder="이메일을 입력하세요"
            type="text"
            className="h-[5vh] w-full border-b-2 border-semiGrey placeholder-realGrey focus:placeholder-semiGrey focus:outline-none"
          />
          <span
            className={`${
              isLoginReject
                ? "text-primaryRed text-[1vw]"
                : "text-realGrey text-[0.9vw]"
            } font-PretendardLight mt-[0.5vh]`}
          >
            {!isLoginReject
              ? "* 가천대학교 이메일로 로그인이 가능합니다."
              : "이메일 혹은 비밀번호가 일치하지 않습니다."}
          </span>
        </div>
        <div className="mb-3">
          <input
            {...register("memberPassword", { required: true })}
            type="password"
            onKeyDown={handleKeyDown}
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
