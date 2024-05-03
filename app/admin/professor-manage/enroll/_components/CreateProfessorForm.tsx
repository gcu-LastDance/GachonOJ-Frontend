"use client";
import { userFormData } from "@/types/admin/user";
import React from "react";
import { useForm} from "react-hook-form";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { userEnrollAPI } from "@/api/admin/adminUserAPI";
import Link from "next/link";

export default function CreateAdminForm() {
  const router = useRouter();
  const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm<userFormData>();

  const onSubmit = (data: userFormData) => {
    EnrollMutation.mutate(data);
  };
  
  const EnrollMutation = useMutation({
    mutationFn: (data: userFormData) => userEnrollAPI(data),
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
    <form>
      <div className="flex-auto ml-10 mt-10 mb-4 items-center">
        <div className="w-full mb-5 sm:mb-0 flex items-center justify-start">
          <label htmlFor="role" className="w-28 block font-medium mb-1 mr-2">
            권한
          </label>
          <input
            value="교수"
            {...register("memberRole")}
            className="block font-medium mb-1 ml-10"
          />
        </div>
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center">
          <label htmlFor="email" className="w-28 block font-medium mb-1 mr-2">
            이메일
          </label>
          <input
            type="text"
            {...register("memberEmail")}
            className="w-80 ml-10 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center">
          <label htmlFor="password" className="w-28 block font-medium mb-1 mr-2">
            비밀번호
          </label>
          <input
            type="password"
            {...register("memberPassword")}
            className="w-80 ml-10 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center justify-start">
          <label htmlFor="passwordconfirm" className="w-28 block font-medium mb-1 mr-2">
            비밀번호 확인
          </label>
          <input
            type="password"
            {...register("memberPasswordConfirm")}
            className="w-80 ml-10 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center justify-start">
          <label htmlFor="name" className="w-28 block font-medium mb-1 mr-2">
            이름
          </label>
          <input
            type="text"
            {...register("memberName")}
            className="w-80 ml-10 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center justify-start">
          <label htmlFor="nickname" className="w-28 block font-medium mb-1 mr-2">
            닉네임
          </label>
          <input
            type="text"
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
        <div className="flex justify-center">
          <Link href="member/admin/members">
        <button
          onClick={handleSubmit(onSubmit)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold  py-2 px-4 rounded-lg mt-8 mr-8"
        > 
          회원 생성
        </button></Link>
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
