"use client";

import { nicknameCheckAPI } from "@/api/authAPI";
import { memberSettingGetAPI, memberSettingPutAPI } from "@/api/memberAPI";
import useUserStore from "@/store/useUserStore";
import { MemberSettingData, MemberSettingPutData } from "@/types/member";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

export default function page() {
  const { userImg } = useUserStore();
  const [memberImg, setMemberImg] = useState(userImg);
  const [nicknameCheck, setNicknameCheck] = useState(true); // 기본값을 true로 설정하여 중복확인이 필요없는 상태로 설정

  const fileInput = useRef<HTMLInputElement>(null);

  const { data: memberSettingData, isFetched } = useQuery<MemberSettingData>({
    queryKey: ["memberSettingGet"],
    queryFn: memberSettingGetAPI,
    refetchOnMount: "always",
  });

  const { register, handleSubmit, setValue, getValues } =
    useForm<MemberSettingPutData>({
      defaultValues: {
        memberNickname: memberSettingData?.memberNickname,
        memberIntroduce: memberSettingData?.memberIntroduce,
        memberName: memberSettingData?.memberName,
      },
    });

  useEffect(() => {
    if (isFetched) {
      setValue("memberNickname", memberSettingData?.memberNickname ?? "");
      setValue("memberIntroduce", memberSettingData?.memberIntroduce ?? "");
      setValue("memberName", memberSettingData?.memberName ?? "");
    }
  }, [isFetched, memberSettingData]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // 내가 받을 파일은 하나기 때문에 index 0값의 이미지를 가짐
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      if (reader.readyState === 2) {
        // 파일 onLoad가 성공하면 2, 진행 중은 1, 실패는 0 반환
        setMemberImg(URL.createObjectURL(file));
      }
    };
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

  /** 닉네임 중복 확인 버튼 이벤트 핸들러 */
  const handleNicknameCheck = () => {
    const nickname = getValues("memberNickname");
    nicknameCheckMutation.mutate(nickname);
  };

  const onSubmit = (data: MemberSettingPutData) => {
    console.log(data);
    memberSettingMutation.mutate({ data, memberImg });
  };

  const memberSettingMutation = useMutation({
    mutationFn: memberSettingPutAPI,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        alert("수정이 완료되었습니다.");
      } else {
        alert("수정에 실패했습니다.");
      }
    },
  });

  return (
    <div className="flex flex-col mt-[4.5vh] mb-[4.5vh]">
      <span className="font-PretendardSemiBold text-[1.8vw] text-primaryDark mb-[3vh]">
        내 정보 수정
      </span>
      <div className="flex flex-col bg-white border-[0.1vw] border-semiSemiGrey rounded-lg overflow-hidden w-full h-[75vh]">
        <div className="flex items-center px-[2vw] py-[1vh] mt-[2vh]">
          <div className="flex flex-col items-center">
            <div className="relative border-[0.2vw] border-realGrey rounded-full flex w-[6.5vw] h-[6.5vw] justify-center items-center overflow-hidden">
              {!memberImg || memberImg === "" ? (
                <CiUser className="text-[4vw] text-semiGrey" />
              ) : (
                <Image
                  src={memberImg}
                  alt="Member Profile Image"
                  layout="fill"
                  objectFit="cover"
                />
              )}
              <input
                type="file"
                accept="image/*"
                ref={fileInput}
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </div>
            <div className="flex mt-[1vh]">
              <button
                type="button"
                onClick={() => fileInput?.current?.click()}
                className="hover:bg-primaryLightBlue border-[0.11vw] w-[4vh] h-[4vh] border-primaryBlue rounded-[0.4vw] font-PretendardSemiBold flex text-primaryBlue items-center justify-center"
              >
                <IoSettingsOutline className="text-[1.5vw] text-primaryBlue" />
              </button>
              <button
                type="button"
                onClick={() => setMemberImg("")}
                className="hover:bg-primaryLightBlue border-[0.11vw] w-[5vw] h-[4vh] border-primaryBlue rounded-[0.4vw] font-PretendardRegular text-[0.7vw] text-primaryBlue ml-[0.5vw]"
              >
                기본이미지로
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-[2vw]">
            <div className="flex items-center mb-[1.5vh]">
              <div className="flex items-end">
                <input
                  {...register("memberNickname")}
                  className="h-[6vh] w-[23.5vw] border-[0.11vw] border-realGrey bg-superlightGrey rounded-[0.5vw] font-PretendardBold text-[1.8vw] text-primaryDark focus:placeholder-semiGrey disabled:text-realGrey px-[0.5vw] focus:outline-none ml-[0.3vw]"
                />
                <button
                  type="button"
                  onClick={handleNicknameCheck}
                  className="hover:bg-primaryLightBlue border-[0.11vw] w-[6vw] h-[4.5vh] border-primaryBlue rounded-[0.4vw] font-PretendardSemiBold text-[0.8vw] text-primaryBlue ml-[1vw]"
                >
                  중복 확인
                </button>
              </div>
            </div>
            <textarea
              {...register("memberIntroduce")}
              placeholder="자기소개를 입력해보세요!"
              className="h-[12vh] w-[40vw] border-[0.11vw] border-realGrey bg-superlightGrey rounded-[0.5vw] font-PretendardLight text-[0.85vw] text-primaryDark focus:placeholder-semiGrey disabled:text-realGrey px-[0.5vw] focus:outline-none ml-[0.3vw] py-[0.5vh] resize-none"
            />
          </div>
        </div>
        <div className="flex flex-col w-[41vw] mx-auto space-y-[4.5vh] my-[4.5vh]">
          <div className="flex space-x-[5vw] items-center">
            <span className="font-PretendardSemiBold text-[1.3vw] text-primaryDark w-[10vw]">
              이메일
            </span>
            <span className="font-PretendardLight text-[1.2vw] text-primaryDark">
              {memberSettingData?.memberEmail}
            </span>
          </div>
          <div className="flex space-x-[5vw] items-center">
            <span className="font-PretendardSemiBold text-[1.3vw] text-primaryDark w-[10vw]">
              이름
            </span>
            <div className="flex flex-col">
              <input
                {...register("memberName")}
                className="h-[6vh] w-[17vw] border-[0.11vw] border-realGrey bg-superlightGrey rounded-[0.5vw] font-PretendardLight text-[1vw] text-primaryDark focus:placeholder-semiGrey px-[0.5vw] focus:outline-none"
              />
              <span className="text-primaryBlue font-PretendardLight text-[0.6vw] pl-[0.5vw] mt-[0.2vh]">
                * 정상적인 서비스 이용을 위해 반드시 실명을 사용해주세요
              </span>
            </div>
          </div>
          <div className="flex space-x-[5vw] items-center">
            <span className="font-PretendardSemiBold text-[1.3vw] text-primaryDark w-[10vw]">
              학번
            </span>
            <span className="font-PretendardLight text-[1.2vw] text-primaryDark">
              {memberSettingData?.memberNumber}
            </span>
          </div>
          <div className="flex space-x-[5vw] items-center">
            <span className="font-PretendardSemiBold text-[1.3vw] text-primaryDark w-[10vw]">
              비밀번호
            </span>
            <Link
              href="/profile/settings/password"
              className="hover:bg-primaryLightBlue border-[0.11vw] w-[8vw] h-[4.5vh] border-primaryBlue rounded-[0.4vw] font-PretendardRegular text-[0.8vw] text-primaryBlue flex items-center pl-[0.3vw]"
            >
              <IoSettingsOutline className="text-[1.5vw] text-primaryBlue mr-[0.8vw]" />
              비밀번호 변경
            </Link>
          </div>
        </div>
        <div className="flex justify-end space-x-[1vw] mr-[3vw]">
          <Link
            href="/profile"
            className="w-[5vw] h-[4.2vh] border-[0.12vw] border-primaryBlue bg-white font-PretendardSemiBold text-primaryBlue text-[0.85vw] rounded-[0.3vw] flex items-center justify-center"
          >
            취소
          </Link>
          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            className="w-[5vw] h-[4.2vh] border-[0.12vw] border-primaryBlue bg-primaryBlue font-PretendardSemiBold text-white text-[0.85vw] rounded-[0.3vw]"
          >
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
