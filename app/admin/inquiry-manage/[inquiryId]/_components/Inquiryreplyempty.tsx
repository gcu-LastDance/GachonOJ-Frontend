import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { inquiryReplyAPI } from "@/api/admin/adminInquiryAPI";
import { replyFormData } from "@/types/admin/inquiry";
import { useRouter } from "next/navigation";

const Inquiryreplyempty = ({ inquiryId }: { inquiryId: number }) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  console.log(inquiryId);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<replyFormData>();

  const onSubmit = (data: replyFormData) => {
    replyMutation.mutate(data);
  };

  const replyMutation = useMutation({
    mutationFn: (data: replyFormData) => inquiryReplyAPI(inquiryId, data),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ["inquiryContents"] });
      }
    },
  });

  return (
    <form className="flex-auto flex flex-col">
      <div className="flex py-3 mb-4 items-center">
        <label
          htmlFor="answer"
          className="self-start text-realGrey font-bold mb-2 mr-4"
        >
          답변 내용 작성
        </label>
        <div className="flex flex-col w-1/2">
          <textarea
            id="replyContents"
            className="shadow appearance-none border rounded text-realGrey leading-tight focus:outline-none focus:shadow-outline"
            rows={5}
            {...register("replyContents", { required: true })} // useForm hook에서 register 함수를 사용하여 input을 등록합니다.
          ></textarea>
          {errors.replyContents && (
            <span className="text-red-500">이 필드는 필수입니다.</span>
          )}{" "}
          {/* 에러 메시지 */}
          <div className="flex mt-auto justify-end">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 d py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSubmit(onSubmit)}
            >
              답변 제출
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Inquiryreplyempty;
