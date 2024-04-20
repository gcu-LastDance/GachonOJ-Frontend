"use client";
import { userFormData } from "@/types/admin/user";
import React from "react";
import { useForm, SubmitHandler} from "react-hook-form";

export default function CreateAdminForm() {
  const { register, handleSubmit, setValue, getValues } = useForm<userFormData>();
  const onSubmit: SubmitHandler<userFormData> = (data) => {
    console.log(data);
    // 여기서 데이터를 처리하거나 제출합니다.
  };

  const handleAutoFillNickname = () => {
    setValue("nickname", getValues("name"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-auto ml-10 mt-10 mb-4 items-center">
        <div className="w-full mb-5 sm:mb-0 flex items-center justify-start">
          <label htmlFor="role" className="w-28 block font-medium mb-1 mr-2">
            권한
          </label>
          <input
            id="role"
            value="사용자"
            {...register("role")}
            className="block font-medium mb-1 ml-10"
          />
        </div>
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center">
          <label htmlFor="email" className="w-28 block font-medium mb-1 mr-2">
            이메일
          </label>
          <input
            type="text"
            {...register("email")}
            className="w-80 ml-10 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center">
          <label htmlFor="password" className="w-28 block font-medium mb-1 mr-2">
            비밀번호
          </label>
          <input
            type="password"
            {...register("password")}
            className="w-80 ml-10 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center justify-start">
          <label htmlFor="passwordconfirm" className="w-28 block font-medium mb-1 mr-2">
            비밀번호 확인
          </label>
          <input
            type="password"
            {...register("passwordconfirm")}
            className="w-80 ml-10 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center justify-start">
          <label htmlFor="name" className="w-28 block font-medium mb-1 mr-2">
            이름
          </label>
          <input
            type="text"
            {...register("name")}
            className="w-80 ml-10 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center justify-start">
          <label htmlFor="nickname" className="w-28 block font-medium mb-1 mr-2">
            닉네임
          </label>
          <input
            type="text"
            {...register("nickname")}
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
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center justify-start">
          <label htmlFor="name" className="w-28 block font-medium mb-1 mr-2">
            학번
          </label>
          <input
            type="text"
            {...register("user_number")}
            className="w-80 ml-10 px-3 py-2 text-realGrey border rounded-lg focus:outline-none focus:border-blue-500"
          />
          </div>
        <div className="flex justify-center">
        <button
          name="submit"
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold  py-2 px-4 rounded-lg mt-8 mr-8"
        >
          회원 생성
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
