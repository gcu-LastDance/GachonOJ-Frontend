"use client";
import { myInfoModifyAPI, getMyInfoAPI } from "@/api/professor/professorInfoAPI";
import useUserStore from "@/store/useUserStore";
import { myInfoModifyFormData, userContentData } from "@/types/professor/user";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

function EditProfessorMyAccountForm({ data }: { data: userContentData }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<myInfoModifyFormData>();
  const { userImg } = useUserStore();
  const fileInput = useRef<HTMLInputElement>(null);

  const [memberImg, setMemberImg] = useState(userImg);

  const onSubmit = (data: myInfoModifyFormData) => {
    ModifyMutation.mutate({ data, memberImg });
  };

  const ModifyMutation = useMutation({
    mutationFn: myInfoModifyAPI,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {

      }
    },
  });

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // 내가 받을 파일은 하나기 때문에 index 0값의 이미지를 가짐
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: any) => {
      if (reader.readyState === 2) {
        // 파일 onLoad가 성공하면 2, 진행 중은 1, 실패는 0 반환
        setMemberImg(e.target.result);
      }
    };
  };

  const handleAutoFillNickname = () => {
    setValue("memberNickname", getValues("memberName"));
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
            {...register("memberNickname")}
            className="w-80 ml-10 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="button"
            onClick={handleAutoFillNickname}
            className="ml-2 px-3 py-1 border rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            이름과 동일하게 설정
          </button>
        </div>
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
        <div className="flex justify-center">
          <Link href="/professor/my-account">
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

const EditProfessorMyAccountContainer = () => {
  const { data } = useQuery<userContentData>({
    queryKey: ["professorGetMyInfo"],
    queryFn: () => getMyInfoAPI(),
  });

  if (!data) return null;
  console.log(data);
  return <EditProfessorMyAccountForm data={data} />;
};

export default EditProfessorMyAccountContainer;
