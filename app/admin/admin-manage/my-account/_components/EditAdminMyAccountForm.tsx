"use client";
import {
  myInfoModifyAPI,
  getMyInfoAPI,
  nicknameCheckAPI,
} from "@/api/admin/adminUserAPI";
import { myInfoModifyFormData, userContentData } from "@/types/admin/user";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import Image from "next/image";
import { IoSettingsOutline } from "react-icons/io5";
import useUserStore from "@/store/useUserStore";

function EditAdminMyAccountForm({ data }: { data: userContentData }) {
  const { setUserImg } = useUserStore();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<myInfoModifyFormData>();

  const nicknameCheckMutation = useMutation({
    mutationFn: nicknameCheckAPI,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.result.available === true) {
        setNicknameCheck(true);
        alert("사용 가능한 닉네임입니다.");
      }
      else {
        setNicknameCheck(false);
        alert("이미 사용 중인 닉네임입니다.");
      }
    },
  });

  const handleNicknameCheck = () => {
    const nickname = getValues("memberNickname");
    nicknameCheckMutation.mutate(nickname);
  };

  const [nicknameCheck, setNicknameCheck] = useState(true);

  const userImg = data?.result.memberImg;
  const fileInput = useRef<HTMLInputElement>(null);
  const [memberImg, setMemberImg] = useState<string | File | null>(
    userImg || null
  );

  const onSubmit = (data: myInfoModifyFormData) => {
    if (nicknameCheck) {
      console.log(nicknameCheck);
      ModifyMutation.mutate({
        data,
        memberImg: fileInput.current?.files?.[0] || null,
      });
      if (memberImg) {
        setUserImg(
          memberImg instanceof File ? URL.createObjectURL(memberImg) : memberImg
        );
      }
    } else alert("닉네임 중복 확인을 해주세요.");
  };

  const NicknameStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 닉네임이 변경될 때마다 setNicknameCheck(false) 호출
    setNicknameCheck(false);
  };

  const ModifyMutation = useMutation({
    mutationFn: myInfoModifyAPI,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        console.log(data);
      }
    },
  });

  const handleAutoFillNickname = () => {
    setValue("memberNickname", getValues("memberName"));
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // 내가 받을 파일은 하나기 때문에 index 0값의 이미지를 가짐
    const file = e.target.files?.[0];
    if (!file) return;
    setMemberImg(URL.createObjectURL(file)); // 이미지 미리보기 표시

    // setValue를 통해 파일 정보를 직접 전달
    setValue("memberImg", file);
  };

  return (
    <form>
      <div className="flex-auto ml-10 mt-10 mb-4 items-center">
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center">
          <label htmlFor="email" className="w-28 block font-medium mb-1 mr-2">
            이메일
          </label>
          <input
            type="text"
            value={data?.result.memberEmail}
            className="w-80 ml-10 px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center justify-start">
          <label htmlFor="name" className="w-28 block font-medium mb-1 mr-2">
            이름
          </label>
          <input
            type="text"
            defaultValue={data?.result.memberName}
            {...register("memberName")}
            className="w-80 ml-10 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center justify-start">
          <label
            htmlFor="nickname"
            className="w-28 block font-medium mb-1 mr-2"
          >
            닉네임
          </label>
          <input
            type="text"
            defaultValue={data?.result.memberNickname}
            {...register("memberNickname", { onChange: NicknameStatusChange })}
            className="w-80 ml-10 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="button"
            onClick={handleNicknameCheck}
            className="ml-2 px-3 py-1 border rounded-lg bg-semiGrey hover:bg-semiSemiGrey"
          >
            중복 확인
          </button>
          <button
            type="button"
            onClick={handleAutoFillNickname}
            className="ml-2 px-3 py-1 border rounded-lg bg-semiGrey hover:bg-semiSemiGrey"
          >
            이름과 동일하게 설정
          </button>
        </div>
        <div className="relative border-[0.2vw] border-realGrey rounded-full flex w-[6.5vw] h-[6.5vw] justify-center items-center overflow-hidden">
          {!memberImg || memberImg === null ? (
            <CiUser className="text-[4vw] text-semiGrey" />
          ) : (
            <Image
              src={
                typeof memberImg === "string"
                  ? memberImg
                  : URL.createObjectURL(memberImg)
              }
              alt="Member Profile Image"
              layout="fill"
              objectFit="cover"
            />
          )}
          <input
            type="file"
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
        <div className="flex justify-center">
          <Link href="/member/info">
            <button
              onClick={handleSubmit(onSubmit)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-8 mr-8"
            >
              변경사항 저장
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          name="back"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-8 mr-8"
        >
          뒤로가기
        </button>
      </div>
    </form>
  );
}

const EditAdminMyAccountContainer = () => {
  const { data } = useQuery<userContentData>({
    queryKey: ["getMyInfo"],
    queryFn: () => getMyInfoAPI(),
  });

  if (!data) return null;
  return <EditAdminMyAccountForm data={data} />;
};

export default EditAdminMyAccountContainer;
