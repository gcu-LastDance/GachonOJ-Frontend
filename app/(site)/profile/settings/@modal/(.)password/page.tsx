"use client";

import { memberPasswordPutAPI } from "@/api/memberAPI";
import ModalLarge from "@/components/modal/ModalLarge";
import { MemberPasswordPutData } from "@/types/member";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function page() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<MemberPasswordPutData>();

  const memberPasswordPutMutation = useMutation({
    mutationFn: memberPasswordPutAPI,
    onError: (error, variables, context) => {
      console.log(error);
    },
    onSuccess: (data, variables, context) => {
      console.log(data);
      if (data.success) {
        router.push("/profile/settings");
      }
    },
  });

  const handlePasswordChange = (data: MemberPasswordPutData) => {
    if (data.memberNewPassword !== data.memberNewPasswordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    memberPasswordPutMutation.mutate(data);
  };

  return (
    <ModalLarge>
      <div className="flex flex-col items-center py-[5.5vh] px-[5vw]">
        <p className="font-PretendardBold text-primaryDark text-[1.5vw] mr-auto">
          비밀번호 변경
        </p>
        <div className="w-[25vw] mt-[2vh]">
          <input
            {...register("memberNewPasswordConfirm", { required: true })}
            type="password"
            className="h-[4.5vh] w-full border-[0.11vw] border-realGrey bg-superlightGrey rounded-[0.5vw] font-PretendardLight text-[0.9vw] text-primaryDark focus:placeholder-semiGrey disabled:text-realGrey px-[0.5vw] focus:outline-none"
            placeholder="현재 비밀번호를 입력하세요"
          />
        </div>
        <div className="flex flex-col font-PretendardRegular text-realGrey items-center w-[25vw] mt-[1.5vh] mb-[1.2vh]">
          <input
            {...register("memberPassword", {
              required: true,
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~]{8,25}$/,
                message:
                  "비밀번호는 8-25자로 영문자, 숫자, 특수문자를 각각 최소 하나 이상 포함해야 합니다.",
              },
            })}
            type="password"
            className="h-[4.5vh] w-full border-[0.11vw] border-realGrey bg-superlightGrey rounded-[0.5vw] font-PretendardLight text-[0.9vw] text-primaryDark focus:placeholder-semiGrey disabled:text-realGrey px-[0.5vw] focus:outline-none"
            placeholder="비밀번호를 입력하세요"
          />
          <span
            className={`${
              errors.memberPassword ? "text-primaryRed" : "text-realGrey"
            } font-PretendardLight text-xs mr-auto pl-[0.2vw]`}
          >
            {!errors.memberPassword
              ? "* 영대소문자/숫자/특수문자를 모두 포함하고, 8자 이상 25자 이하여야합니다."
              : errors.memberPassword.message}
          </span>
        </div>
        <div className="w-[25vw]">
          <input
            {...register("memberNewPasswordConfirm", { required: true })}
            type="password"
            className="h-[4.5vh] w-full border-[0.11vw] border-realGrey bg-superlightGrey rounded-[0.5vw] font-PretendardLight text-[0.9vw] text-primaryDark focus:placeholder-semiGrey disabled:text-realGrey px-[0.5vw] focus:outline-none"
            placeholder="비밀번호를 한번 더 입력하세요"
          />
        </div>
        <div className="flex space-x-[1vw] mt-[4vh] ml-auto">
          <button
            type="button"
            onClick={() => {
              router.back();
            }}
            className="flex border-[0.15vw] border-primaryBlue bg-white w-[6vw] h-[4vh] items-center justify-center rounded-[0.2vw]"
          >
            <span className="text-primaryBlue font-PretendardSemiBold text-[0.85vw]">
              취소
            </span>
          </button>
          <button
            onClick={handleSubmit(handlePasswordChange)}
            type="button"
            className="flex border-[0.15vw] border-primaryBlue bg-primaryBlue w-[6vw] h-[4vh] items-center justify-center rounded-[0.2vw]"
          >
            <span className="text-white font-PretendardSemiBold text-[0.85vw]">
              확인
            </span>
          </button>
        </div>
      </div>
    </ModalLarge>
  );
}
