import { hoverProfileAPI } from "@/api/memberAPI";
import useUserStore from "@/store/useUserStore";
import { MemberHoverProfileData } from "@/types/member";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CiUser } from "react-icons/ci";

export default function HeaderMemberDropdown() {
  const { userImg, setUserDrop } = useUserStore();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    setUserDrop();
  };

  const { data } = useQuery<MemberHoverProfileData>({
    queryKey: ["hoverProfile"],
    queryFn: hoverProfileAPI,
  });

  return (
    <div className="mt-[0.5vh]">
      <button
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
        className="flex text-white border-[0.15vw] w-[2.5vw] h-[2.5vw] border-realGrey hover:ring-4 hover:ring-semiGrey rounded-full items-center justify-center"
        type="button"
      >
        {!userImg ? (
          <CiUser className="text-[1.8vw] text-realGrey" />
        ) : (
          <Image
            src={userImg}
            alt="Member Profile Image"
            width={100}
            height={100}
            className="rounded-full"
          />
        )}
      </button>
      {showDropdown && (
        <div
          className="absolute z-10 bg-white divide-y divide-semiGrey rounded-lg shadow w-[12vw]"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <ul className="py-2 text-[1vw] text-gray-700">
            <li className="border-b border-gray-300">
              {data?.rating}
              {data?.memberEmail}
              {data?.memberNickname}
            </li>
            <li className="border-b border-gray-300">
              <Link
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                사용자 대시보드
              </Link>
            </li>
            <li className="border-b border-gray-300">
              <Link
                href="/내정보수정"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                내 정보 수정
              </Link>
            </li>
            <li>
              <Link
                href="/main"
                onClick={handleLogout}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                로그아웃
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
