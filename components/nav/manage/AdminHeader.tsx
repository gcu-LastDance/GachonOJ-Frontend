"use client";

import { logoutAPI } from "@/api/authAPI";
import useUserStore from "@/store/useUserStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

export default function AdminHeader() {
  const router = useRouter();
  const { setUserDrop } = useUserStore();

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  const logoutMutation = useMutation({
    mutationFn: logoutAPI,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        router.push("/main");
      }
    },
    onSettled: () => {
      setUserDrop();
      window.sessionStorage.clear();
    },
  });

  return (
    <header className="fixed flex border-b-2 shadow-md h-[7vh] px-[1.5vw] justify-end w-[86vw] bg-white">
      <button type="button" onClick={handleLogout}>
        <div className="border-[0.15rem] pl-4 pr-4 pt-0.5 pb-0.5 rounded-lg border-primaryBlue">
          <span className="font-PretendardMedium text-primaryBlue text-sm">
            로그아웃
          </span>
        </div>
      </button>
    </header>
  );
}
