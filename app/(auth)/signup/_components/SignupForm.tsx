"use client";

import FullButton from "@/components/button/FullButton";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SignUpData, SignUpFormData } from "@/types/auth";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import {
  emailCodeVerifyAPI,
  emailVerifyAPI,
  nicknameCheckAPI,
  signUpAPI,
} from "@/api/authAPI";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();
  /** 회원가입 폼 useForm */
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignUpFormData>();

  /** 이메일 인증 완료 상태관리 */
  const [emailVerification, setEmailVerification] = useState(false);

  /** 닉네임 중복 확인 완료 상태관리 */
  const [nicknameCheck, setNicknameCheck] = useState(false);

  /** 이용약관 및 개인정보수집 및 이용 동의 상태관리 */
  const [termsAgree, setTermsAgree] = useState(false);
  const [privacyAgree, setPrivacyAgree] = useState(false);

  /** 이메일 인증 요청 상태관리 */
  const [isReadytoEmailVerification, setIsReadytoEmailVerification] =
    useState(false);

  /** 이메일 인증 요청 버튼 이벤트 핸들러 */
  const handleEmailVerification = () => {
    const email = getValues("memberEmail");
    emailVerifyMutation.mutate(email);
    // setIsReadytoEmailVerification(true);
    // setEmailVerification(true);
  };

  /** 이메일 인증 코드 타이머 */
  const [timeLeft, setTimeLeft] = useState(300);
  const [timerActive, setTimerActive] = useState(false);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }

    // 시간이 만료되었을 때 경고 메시지
    if (timeLeft === 0) {
      alert("시간이 만료되었습니다. 인증번호를 다시 요청해주세요.");
      setTimerActive(false); // 타이머 비활성화
    }
  }, [timerActive, timeLeft]);

  /** 이메일 인증 요청 API 호출 useMutation */
  const emailVerifyMutation = useMutation({
    mutationFn: emailVerifyAPI,
    onError: (error, variables, context) => {
      console.log(error);
    },
    onSuccess: (data, variables, context) => {
      console.log(data);
      if (data.success) {
        setIsReadytoEmailVerification(true);
        setTimerActive(true);
      }
    },
  });

  const handleEmailCodeVerification = () => {
    const memberEmail = getValues("memberEmail");
    const emailCode = getValues("emailCode");
    emailCodeVerifyMutation.mutate({ memberEmail, emailCode });
  };

  const emailCodeVerifyMutation = useMutation({
    mutationFn: emailCodeVerifyAPI,
    onError: (error, variables, context) => {
      console.log(error);
    },
    onSuccess: (data, variables, context) => {
      console.log(data);
      if (data.success) {
        setEmailVerification(true);
      }
    },
  });

  /** 닉네임 중복 확인 버튼 이벤트 핸들러 */
  const handleNicknameCheck = () => {
    const nickname = getValues("memberNickname");
    nicknameCheckMutation.mutate(nickname);
  };

  /** 닉네임 중복 확인 API 호출 useMutation */
  const nicknameCheckMutation = useMutation({
    mutationFn: nicknameCheckAPI,
    onError: (error, variables, context) => {
      console.log(error);
    },
    onSuccess: (data, variables, context) => {
      console.log(data);
      if (data.success) {
        setNicknameCheck(true);
      }
    },
  });

  /** 회원가입 폼 제출 이벤트 핸들러 */
  const onSubmit = (data: SignUpData) => {
    if (!termsAgree || !privacyAgree) {
      alert("이용약관 및 개인정보수집 및 이용에 동의해주세요.");
      return;
    }

    if (!emailVerification) {
      alert("이메일 인증을 완료해주세요.");
      return;
    }

    if (!nicknameCheck) {
      alert("닉네임 중복확인을 완료해주세요.");
      return;
    }

    signUpMutation.mutate(data);
  };

  /** 회원가입 API 호출 useMutation */
  const signUpMutation = useMutation({
    mutationFn: signUpAPI,
    onError: (error, variables, context) => {
      console.log(error);
    },
    onSuccess: (data, variables, context) => {
      if (data.success) {
        router.push("/login");
      }
    },
  });

  return (
    <form className="mt-6 mb-4">
      <div className="mb-[1vh]">
        <div className="flex items-center">
          <input
            {...register("memberEmail", {
              required: true,
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "유효하지 않은 이메일 형식입니다.",
              },
            })}
            placeholder="이메일을 입력하세요"
            disabled={isReadytoEmailVerification}
            className="h-[5vh] w-[23.5vw] border-b-2 border-semiGrey placeholder-realGrey text-[0.95vw] focus:placeholder-semiGrey disabled:text-realGrey px-[0.5vw] focus:outline-none"
          />
          <button
            type="button"
            onClick={handleEmailVerification}
            disabled={isReadytoEmailVerification}
            className={`${
              isReadytoEmailVerification
                ? "border-semiGrey bg-lightGrey cursor-not-allowed"
                : "hover:bg-primaryLightBlue"
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
        <span
          className={`${
            errors.memberEmail ? "text-primaryRed" : "text-realGrey"
          } font-PretendardLight text-xs  pl-[0.5vw]`}
        >
          {!errors.memberEmail
            ? "* 가천대학교 이메일로 가입이 가능합니다."
            : errors.memberEmail.message}
        </span>
      </div>
      {isReadytoEmailVerification && (
        <div className="flex items-center mb-[2.3vh]">
          <div className="flex border-b-2 border-semiGrey w-[23.5vw] justify-between items-baseline">
            <input
              {...register("emailCode", {
                required: "이메일 인증 코드는 필수입니다.",
              })}
              className="h-[4vh] w-[18vw] placeholder-realGrey focus:placeholder-semiGrey px-[0.5vw] text-[0.95vw] focus:outline-none"
              placeholder="이메일로 전송된 인증코드를 입력하세요."
            />
            {isReadytoEmailVerification && (
              <span className="font-PretendardMedium text-primaryBlue pr-[1vw]">
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </span>
            )}
          </div>
          <button
            type="button"
            disabled={emailVerification}
            onClick={handleEmailCodeVerification}
            className={`${
              emailVerification && `bg-primaryLightBlue`
            } border-[1.5px] w-[6vw] h-[5vh] border-primaryBlue rounded-md ml-auto`}
          >
            <span className="font-PretendardSemiBold text-sm text-primaryBlue">
              확인
            </span>
          </button>
        </div>
      )}
      <div className="flex mb-[2vh]">
        {/* <label>name</label> */}
        <input
          {...register("memberName", { required: true })}
          className="h-[4vh] w-[14.2vw] border-b-2 border-semiGrey placeholder-realGrey focus:placeholder-semiGrey px-[0.5vw] text-[0.95vw] focus:outline-none"
          placeholder="이름을 입력하세요"
        />
        {/* <label>stdnum</label> */}
        <input
          {...register("memberNumber", {
            required: true,
            pattern: {
              value: /^\d{9}$/,
              message: "학번은 9자리 숫자여야 합니다.",
            },
          })}
          className="h-[4vh] w-[14.2vw] ml-auto border-b-2 border-semiGrey placeholder-realGrey focus:placeholder-semiGrey px-[0.5vw] text-[0.95vw] focus:outline-none"
          placeholder="학번을 입력하세요"
        />
      </div>
      <div className="flex items-center mb-[2vh]">
        {/* <label>nickname</label> */}
        <input
          {...register("memberNickname", { required: true })}
          disabled={nicknameCheck}
          className={`${
            nicknameCheck && `bg-primaryLightBlue`
          } h-[4vh] w-[23.5vw] border-b-2 border-semiGrey placeholder-realGrey focus:placeholder-semiGrey px-[0.5vw] text-[0.95vw] focus:outline-none`}
          placeholder="닉네임을 입력하세요"
        />
        <button
          type="button"
          onClick={handleNicknameCheck}
          className="border-[1.5px] w-[6vw] h-[5vh] border-primaryBlue rounded-md ml-auto"
        >
          <span className="font-PretendardSemiBold text-sm text-primaryBlue">
            중복 확인
          </span>
        </button>
      </div>
      <div className="mb-[2vh]">
        {/* <label>password</label> */}
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
          className="h-[4vh] w-full border-b-2 border-semiGrey placeholder-realGrey focus:placeholder-semiGrey px-[0.5vw] text-[0.95vw] focus:outline-none"
          placeholder="비밀번호를 입력하세요"
        />
        <span
          className={`${
            errors.memberPassword ? "text-primaryRed" : "text-realGrey"
          } font-PretendardLight text-xs  pl-[0.5vw]`}
        >
          {!errors.memberPassword
            ? "* 영대소문자/숫자/특수문자를 모두 포함하고, 8자 이상 25자 이하여야합니다."
            : errors.memberPassword.message}
        </span>
      </div>
      <div>
        {/* <label>passwordConfirm</label> */}
        <input
          {...register("memberPasswordConfirm", { required: true })}
          type="password"
          className="h-[4vh] w-full border-b-2 border-semiGrey placeholder-realGrey placeholder-text-xs focus:placeholder-semiGrey px-[0.5vw] text-[0.95vw] focus:outline-none"
          placeholder="비밀번호를 한번 더 입력하세요"
        />
      </div>
      <div className="ml-10 mr-10 mt-5 mb-5">
        <div className="mb-3 flex items-center justify-center">
          <label className="font-PretendardSemiBold text-[1vw] text-realGrey">
            이용약관 및 개인정보수집 및 이용에 모두 동의합니다.
          </label>
          <input
            type="checkbox"
            checked={termsAgree && privacyAgree}
            onChange={
              termsAgree || privacyAgree
                ? () => {
                    setTermsAgree(false);
                    setPrivacyAgree(false);
                  }
                : () => {
                    setTermsAgree(true);
                    setPrivacyAgree(true);
                  }
            }
            className="appearance-none border-[1px] border-semiGrey rounded-full w-4 h-4 ml-2 align-middle bg-white checked:bg-primaryBlue checked:border-[0.19vw]"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex mb-1 items-center">
            <label className="font-PretendardRegular text-[0.9vw] text-realGrey">
              &#91;필수&#93; 이용약관 동의
            </label>
            <input
              type="checkbox"
              checked={termsAgree}
              onChange={() => setTermsAgree(!termsAgree)}
              className="appearance-none border-[1px] border-semiGrey rounded-full w-4 h-4 ml-2 align-middle bg-white checked:bg-primaryBlue checked:border-[0.19vw]"
            />
            <button className="ml-auto flex items-center">
              <span className="font-PretendaradRegular text-[0.9vw] text-realGrey">
                약관보기
              </span>
              <MdKeyboardArrowRight size="1.5rem" color="#767676" />
            </button>
          </div>
          <div className="flex items-center">
            <label className="font-PretendardRegular text-[0.9vw] text-realGrey">
              &#91;필수&#93; 이용약관 동의
            </label>
            <input
              type="checkbox"
              checked={privacyAgree}
              onChange={() => setPrivacyAgree(!privacyAgree)}
              className="appearance-none border-[1px] border-semiGrey rounded-full w-4 h-4 ml-2 align-middle bg-white checked:bg-primaryBlue checked:border-[0.19vw]"
            />
            <button className="ml-auto flex items-center">
              <span className="font-PretendaradRegular text-[0.9vw] text-realGrey">
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
