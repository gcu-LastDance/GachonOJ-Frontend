"use client";

import FullButton from "@/components/button/FullButton";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SignUpFormData } from "@/types/auth";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  /** 회원가입 폼을 위한 useForm */
  const { register, handleSubmit } = useForm<SignUpFormData>();

  /** 정상적인 이메일을 입력한 뒤 이메일 인증 요청 버튼을 누른 상태인지 상태 관리 */
  const [isReadytoEmailVerification, setIsReadytoEmailVerification] =
    useState(false);

  const handleEmailVerification = () => {
    alert("인증코드가 발송되었습니다.");
    setIsReadytoEmailVerification(true);
  };
  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <form className="mt-6 mb-4">
      <div className="mb-3">
        <div className="flex items-center">
          {/* <label>email</label> */}
          <input
            {...register("email", { required: true })}
            placeholder="이메일을 입력하세요"
            disabled={isReadytoEmailVerification}
            className="h-[5vh] w-[23.5vw] border-b-2 border-semiGrey placeholder-realGrey focus:placeholder-semiGrey"
          />
          <button
            type="button"
            onClick={handleEmailVerification}
            disabled={isReadytoEmailVerification}
            className={`${
              isReadytoEmailVerification
                ? "border-semiGrey bg-lightGrey cursor-not-allowed"
                : ""
            } border-[1.5px] w-[6vw] h-[5vh] border-primaryBlue rounded-md ml-auto`}
          >
            <span
              className={`${
                isReadytoEmailVerification ? "text-semiGrey" : ""
              } font-PretendardSemiBold text-sm text-primaryBlue`}
            >
              {!isReadytoEmailVerification ? "인증 요청" : "요청됨"}
            </span>
          </button>
        </div>
        <span className="font-PretendardLight text-xs text-realGrey">
          * 가천대학교 이메일로 가입이 가능합니다.
        </span>
      </div>
      {isReadytoEmailVerification && (
        <div className="flex items-center mb-3">
          {/* <label>email</label> */}
          <input
            className="h-[5vh] w-[23.5vw] border-b-2 border-semiGrey placeholder-realGrey focus:placeholder-semiGrey"
            placeholder="이메일로 전송된 인증코드를 입력하세요."
          />
          <button
            type="button"
            className="border-[1.5px] w-[6vw] h-[5vh] border-primaryBlue rounded-md ml-auto"
          >
            <span className="font-PretendardSemiBold text-sm text-primaryBlue">
              확인
            </span>
          </button>
        </div>
      )}
      <div className="flex mb-3">
        {/* <label>name</label> */}
        <input
          {...register("name", { required: true })}
          className="h-[5vh] w-[14.2vw] border-b-2 border-semiGrey placeholder-realGrey focus:placeholder-semiGrey"
          placeholder="이름을 입력하세요"
        />
        {/* <label>stdnum</label> */}
        <input
          {...register("stdnum", { required: true })}
          className="h-[5vh] w-[14.2vw] ml-auto border-b-2 border-semiGrey placeholder-realGrey focus:placeholder-semiGrey"
          placeholder="학번을 입력하세요"
        />
      </div>
      <div className="flex items-center mb-3">
        {/* <label>nickname</label> */}
        <input
          {...register("nickname", { required: true })}
          className="h-[5vh] w-[23.5vw] border-b-2 border-semiGrey placeholder-realGrey focus:placeholder-semiGrey"
          placeholder="닉네임을 입력하세요"
        />
        <button
          type="button"
          className="border-[1.5px] w-[6vw] h-[5vh] border-primaryBlue rounded-md ml-auto"
        >
          <span className="font-PretendardSemiBold text-sm text-primaryBlue">
            중복 확인
          </span>
        </button>
      </div>
      <div className="mb-3">
        {/* <label>password</label> */}
        <input
          {...register("password", { required: true })}
          className="h-[5vh] w-full border-b-2 border-semiGrey placeholder-realGrey focus:placeholder-semiGrey"
          placeholder="비밀번호를 입력하세요"
        />
        <span className="font-PretendardLight text-xs text-realGrey">
          * 영대소문자/숫자/특수문자를 모두 포함하고, 8자 이상 25자 이하여야
          합니다.
        </span>
      </div>
      <div>
        {/* <label>passwordConfirm</label> */}
        <input
          {...register("passwordConfirm", { required: true })}
          className="h-[5vh] w-full border-b-2 border-semiGrey placeholder-realGrey placeholder-text-xs focus:placeholder-semiGrey"
          placeholder="비밀번호를 한번 더 입력하세요"
        />
      </div>
      <div className="ml-10 mr-10 mt-5 mb-5">
        <div className="mb-3 flex items-center justify-center">
          <label className="font-PretendardSemiBold text-sm text-realGrey">
            이용약관 및 개인정보수집 및 이용에 모두 동의합니다.
          </label>
          <input
            type="checkbox"
            className="appearance-none border-[1px] border-semiGrey rounded-full w-4 h-4 ml-2"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex mb-1 items-center">
            <label className="font-PretendardRegular text-sm text-realGrey">
              &#91;필수&#93; 이용약관 동의
            </label>
            <input
              type="checkbox"
              {...register("terms_agree")}
              className="appearance-none border-[1px] border-semiGrey rounded-full w-4 h-4 ml-2"
            />
            <button className="ml-auto flex items-center">
              <span className="font-PretendaradRegular text-sm text-realGrey">
                약관보기
              </span>
              <MdKeyboardArrowRight size="1.5rem" color="#767676" />
            </button>
          </div>
          <div className="flex items-center">
            <label className="font-PretendardRegular text-sm text-realGrey">
              &#91;필수&#93; 이용약관 동의
            </label>
            <input
              type="checkbox"
              {...register("privacy_agree")}
              className="appearance-none border-[1px] border-semiGrey rounded-full w-4 h-4 ml-2"
            />
            <button className="ml-auto flex items-center">
              <span className="font-PretendaradRegular text-sm text-realGrey">
                약관보기
              </span>
              <MdKeyboardArrowRight size="1.5rem" color="#767676" />
            </button>
          </div>
        </div>
      </div>
      <FullButton onClick={handleSubmit(onSubmit)} text={"회원가입"} />
      <div className="flex justify-center mt-1 items-center">
        <span className="font-PretendardLight text-realGrey text-sm">
          이미 계정이 있으신가요?
        </span>
        <Link href="/login">
          <button type="button" className="ml-2 flex items-center">
            <span className="font-PretendardSemiBold text-darkGrey text-sm">
              로그인
            </span>
            <MdKeyboardArrowRight size="1.5rem" color="#505050" />
          </button>
        </Link>
      </div>
    </form>
  );
}
