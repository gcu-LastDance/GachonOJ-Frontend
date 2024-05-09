import { hoverProfileAPI } from "@/api/memberAPI";
import RankBadge from "@/components/badge/RankBadge";
import useUserStore from "@/store/useUserStore";
import { MemberHoverProfileData } from "@/types/member";
import { rank } from "@/types/rank";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { RiUser3Line } from "react-icons/ri";
import { IoLogOutOutline, IoSettingsOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { logoutAPI } from "@/api/authAPI";

export default function HeaderMemberDropdown() {
  const router = useRouter();
  const { userImg, setUserDrop } = useUserStore();
  const [showDropdown, setShowDropdown] = useState(false);

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
    },
  });

  const { data } = useQuery<MemberHoverProfileData>({
    queryKey: ["hoverProfile"],
    queryFn: hoverProfileAPI,
  });

  return (
    <div className="mt-[0.5vh]">
      <button
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
        onClick={() => router.push("/profile")}
        className="flex text-white border-[0.15vw] w-[2vw] h-[2vw] border-realGrey hover:ring-4 hover:ring-semiGrey rounded-full items-center justify-center overflow-hidden relative"
        type="button"
      >
        {!userImg ? (
          <CiUser className="text-[1.4vw] text-realGrey" />
        ) : (
          <Image
            src={userImg}
            alt="Member Profile Image"
<<<<<<< HEAD
            width={80}
            height={80}
=======
            width={100}
            height={100}
            className="rounded-full"
>>>>>>> parent of 4cf820c ([feat] #102 랜딩페이지 추가 구현)
          />
        )}
      </button>
      {showDropdown && (
        <div
          className="absolute bg-white divide-y divide-semiGrey rounded-lg shadow w-[12vw] border-[0.1vw] z-50"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <ul className="text-[1vw] text-gray-700">
            <li className="border-b border-gray-300 w-full flex flex-col px-[1vw] pb-[1.5vh] pt-[2vh]">
              <div className="flex items-center">
                <div className="w-[1.4vw] mr-[0.5vw]">
                  <RankBadge rank={data?.rating as rank} />
                </div>
                <span className="font-PretendardMedium text-primaryDark text-[1vw]">
                  {data?.memberNickname}
                </span>
              </div>
              <span className="font-PretendardLight text-realGrey text-[0.8vw] mx-auto mt-[1vh]">
                {data?.memberEmail}
              </span>
            </li>
            <li className="border-b border-gray-300">
              <Link
                href="/profile"
                className="flex items-center px-[1vw] py-[1.4vh] hover:bg-gray-100"
              >
                <RiUser3Line className="text-[1.3vw] text-primaryDark mr-[0.8vw]" />
                <span className="font-PretendardLight text-[0.9vw] text-primaryDark">
                  사용자 대시보드
                </span>
              </Link>
            </li>
            <li className="border-b border-gray-300">
              <Link
                href="/profile/settings"
                className="flex items-center px-[1vw] py-[1.4vh] hover:bg-gray-100"
              >
                <IoSettingsOutline className="text-[1.3vw] text-primaryDark mr-[0.8vw]" />
                <span className="font-PretendardLight text-[0.9vw] text-primaryDark">
                  내 정보 수정
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/main"
                onClick={handleLogout}
                className="flex items-center px-[1vw] py-[1.6vh] hover:bg-gray-100"
              >
                z``
                <IoLogOutOutline className="text-[1.3vw] text-primaryRed mr-[0.8vw]" />
                <span className="font-PretendardRegular text-[0.9vw] text-primaryRed">
                  로그아웃
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
