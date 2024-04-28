"use client";
import { MyInfoModifyAPI, getMyInfoAPI} from "@/api/adminUserAPI";
import { myInfoModifyFormData, userContentData } from "@/types/admin/user";
import { useMutation, useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function EditAdminMyAccountForm({
  data,
}: {
  data: userContentData;
})  {
  const router = useRouter();
  const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm<myInfoModifyFormData>();

  const onSubmit = (data: myInfoModifyFormData) => {
    ModifyMutation.mutate(data);
  };
  
  const ModifyMutation = useMutation({
    mutationFn: (data: myInfoModifyFormData) => MyInfoModifyAPI(data),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        router.push("/admin");
      }
    },
  });
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
