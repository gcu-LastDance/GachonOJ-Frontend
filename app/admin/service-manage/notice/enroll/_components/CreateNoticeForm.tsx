"use client";
import { NoticeFormData } from "@/types/NoticeForm";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export default function CreaetNoticeForm() {
  const { register, handleSubmit } = useForm<NoticeFormData>();
  const onSubmit: SubmitHandler<NoticeFormData> = (data) => {
    console.log(data);
    // 여기서 데이터를 처리하거나 제출합니다.
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-auto ml-10 mt-10 mb-4 items-center">
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center">
          <label htmlFor="title" className="w-28 block font-medium mb-1 mr-2">
            공지제목
          </label>
          <input
            type="text"
            {...register("title")}
            className="w-1/2 ml-10 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center">
          <label htmlFor="text" className="w-28 block font-medium mb-1 mr-2 self-start">
            공지내용
          </label>
          <textarea
            {...register("contents")}
            className="w-1/2 ml-10 px-3 py-2 border rounded-lg
            focus:outline-none focus:border-blue-500" rows={8}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center ml-48">
        <div>
          <button
            name="back"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-8 mr-8"
          >
            뒤로가기
          </button>
        </div>
        <div>
          <button
            name="submit"
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-8 mr-8"
          >
            공지등록
          </button>
        </div>
      </div>
    </form>
  );
}
