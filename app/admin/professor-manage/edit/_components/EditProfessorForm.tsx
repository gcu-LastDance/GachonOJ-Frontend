"use client";
import { userContentAPI, userModifyAPI } from "@/api/admin/adminUserAPI";
import { userContentData, userFormData } from "@/types/admin/user";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function EditProfessorForm({
  data,
  memberId,
}: {
  data: userContentData;
  memberId: number;
}) {
  const router = useRouter();
  const formdata = data.result;
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<userFormData>();

  const onSubmit = (data: userFormData) => {
    ModifyMutation.mutate(data);
  };

  const ModifyMutation = useMutation({
    mutationFn: (data: userFormData) => userModifyAPI(memberId, data),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        router.push("/admin/professor-manage/list");
      }
    },
  });

  const handleAutoFillNickname = () => {
    setValue("memberNickname", getValues("memberName"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-auto ml-10 mt-10 mb-4 items-center">
        <div className="flex">
          <div className="w-1/3 mb-5 sm:mb-0 flex items-center">
            <label htmlFor="role" className="w-28 block font-medium mb-1 mr-2">
              번호
            </label>
            <input
              id="id"
              value={memberId}
              className="block font-medium mb-1 ml-10"
            />
          </div>
          <div className="w-full mb-5 sm:mb-0 flex items-center">
            <label htmlFor="role" className="w-28 block font-medium mb-1 mr-2">
              권한
            </label>
            <select
              id="role"
              defaultValue={formdata.memberRole}
              {...register("memberRole")}
              className="font-medium mb-1 ml-10"
            >
              <option value="학생">학생</option>
              <option value="교수">교수</option>
              <option value="관리자">관리자</option>
            </select>
          </div>
        </div>
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center">
          <label htmlFor="email" className="w-28 block font-medium mb-1 mr-2">
            이메일
          </label>
          <input
            type="text"
            value={formdata.memberEmail}
            className="w-80 ml-10 px-3 py-2 text-realGrey focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center justify-start">
          <label htmlFor="name" className="w-28 font-medium mb-1 mr-2">
            이름
          </label>
          <input
            type="text"
            defaultValue={formdata.memberName}
            {...register("memberName")}
            className="w-80 ml-10 px-3 py-2 text-realGrey border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center justify-start">
          <label
            htmlFor="nickname"
            className="w-28 font-medium mb-1 mr-2"
          >
            닉네임
          </label>
          <input
            type="text"
            defaultValue={formdata.memberNickname}
            {...register("memberNickname")}
            className="w-80 ml-10 px-3 py-2 text-realGrey border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button
            type="button"
            onClick={handleAutoFillNickname}
            className="ml-2 px-3 py-1 border rounded-lg bg-semiGrey hover:bg-semiSemiGrey"
          >
            이름과 동일하게 설정
          </button>
        </div>
        <div className="flex justify-center">
        
        <button
          onClick={handleSubmit(onSubmit)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold  py-2 px-4 rounded-lg mt-8 mr-8"
        > 
          변경사항 저장
        </button>
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

const UserContentsContainer = () => {
  const params = useSearchParams();
  const memberId = Number(params.get("memberId"));
  const { data } = useQuery<userContentData>({
    queryKey: ["userContent"],
    queryFn: () => userContentAPI(memberId),
  });

  if (!data) return null;
  return <EditProfessorForm data={data} memberId={memberId} />;
};

export default UserContentsContainer;
