"use client";
import { noticeEnrollAPI } from "@/api/admin/adminNoticeAPI";
import { noticeFormData } from "@/types/admin/notice";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function CreaetNoticeForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<noticeFormData>();

  const onSubmit = (data: noticeFormData) => {
    EnrollMutation.mutate(data);
  };

  const EnrollMutation = useMutation({
    mutationFn: (data: noticeFormData) => noticeEnrollAPI(data),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        router.push("/admin/notice-manage/list");
      }
    },
  });

  return (
    <form>
      <div className="flex-auto ml-10 mt-10 mb-4 items-center">
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center">
          <label htmlFor="title" className="w-28 block font-medium mb-1 mr-2">
            공지제목
          </label>
          <input
            type="text"
            {...register("noticeTitle")}
            className="w-1/2 ml-10 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-full mb-5 mt-5 sm:mb-0 flex items-center">
          <label
            htmlFor="text"
            className="w-28 block font-medium mb-1 mr-2 self-start"
          >
            공지내용
          </label>
          <textarea
            {...register("noticeContents")}
            className="w-1/2 ml-10 px-3 py-2 border rounded-lg
            focus:outline-none focus:border-blue-500"
            rows={8}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center ml-48">
        <div>
          <Link href="/admin/notice-manage/list">
            <button
              name="back"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-8 mr-8"
            >
              뒤로가기
            </button>
          </Link>
        </div>
        <div>

            <button
              onClick={handleSubmit(onSubmit)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-8 mr-8"
            >
              공지등록
            </button>
        
        </div>
      </div>
    </form>
  );
}
