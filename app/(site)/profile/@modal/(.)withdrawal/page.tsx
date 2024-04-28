"use client";

import { withDrawalAPI } from "@/api/authAPI";
import ModalLarge from "@/components/modal/ModalLarge";
import useUserStore from "@/store/useUserStore";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function page() {
  const router = useRouter();
  const { setUserDrop } = useUserStore();

  const withDrawalMutation = useMutation({
    mutationFn: withDrawalAPI,
    onError: (error, variables, context) => {
      console.log(error);
    },
    onSuccess: (data, variables, context) => {
      console.log(data);
      if (data.success) {
        router.push("/main");
      }
    },
    onSettled: () => {
      setUserDrop();
    },
  });

  const handleWithDrawalCommit = () => {
    withDrawalMutation.mutate();
  };

  return (
    <ModalLarge>
      <div className="flex flex-col items-center py-[5.5vh]">
        <p className="font-PretendardBold text-primaryDark text-[1.5vw]">
          탈퇴하기
        </p>
        <div className="flex flex-col font-PretendardRegular text-realGrey text-[0.9vw] mt-[6vh] items-center">
          <p>저희 서비스를 이용해주셔서 감사합니다</p>
          <p>
            회원 탈퇴 시 해결한 문제, 획득한 경험치, 등급은 복구가 불가능합니다.
          </p>
        </div>
        <div className="flex space-x-[2vw] mt-[7vh]">
          <button
            type="button"
            onClick={handleWithDrawalCommit}
            className="flex border-[0.15vw] border-primaryBlue bg-white w-[13vw] h-[4vh] items-center justify-center rounded-[0.2vw]"
          >
            <span className="text-primaryBlue font-PretendardSemiBold text-[0.85vw]">
              탈퇴하기
            </span>
          </button>
          <button
            type="button"
            onClick={() => {
              router.back();
            }}
            className="flex border-[0.15vw] border-primaryBlue bg-primaryBlue w-[13vw] h-[4vh] items-center justify-center rounded-[0.2vw]"
          >
            <span className="text-white font-PretendardSemiBold text-[0.85vw]">
              뒤로가기
            </span>
          </button>
        </div>
      </div>
    </ModalLarge>
  );
}
