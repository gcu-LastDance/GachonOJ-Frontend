"use client";

import { withDrawalAPI } from "@/api/professor/professorInfoAPI";
import { useMutation } from "@tanstack/react-query";
import router from "next/router";

export default function page() {
  const onDelete = () => {
    DeleteMutation.mutate();
  };

  const DeleteMutation = useMutation({
    mutationFn: withDrawalAPI,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        router.push("/main");
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <div className="mb-4 text-xl font-PretendardSemiBold ">회원 탈퇴</div>
        <div className="mb-6">
          정말로 탈퇴하시겠습니까? 회원 탈퇴 시 모든 정보가 삭제됩니다.
        </div>
        <div className="flex justify-center">
          <button
            className="bg-primaryDark text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
            onClick={() => onDelete()}
          >
            회원 탈퇴
          </button>
          <button className="ml-5 bg-darkGrey text-white py-2 px-4 rounded">
            돌아가기
          </button>
        </div>
        <div className="text-sm text-gray-500 mt-4">
          지금까지 이용해 주셔서 감사합니다.
        </div>
      </div>
    </div>
  );
}
