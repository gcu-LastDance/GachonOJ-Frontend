import React from "react";
import GachonOJ_logo_image from "@logo/gachonoj_logo.png";
import Image from "next/image";
import SideNavUser from "../../../components/nav/manage/sidenav/SideNavAccount";
import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdMargin } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { GrUser, GrUserAdmin } from "react-icons/gr";
import { FiAward } from "react-icons/fi";
import { PiCodeBlockBold, PiShootingStarBold } from "react-icons/pi";

export default function SideProfessorNav() {
  return (
    <div className="h-screen w-[14vw] border-[0.1vw] border-semiGrey flex flex-col items-center fixed bg-white">
      <div className="w-[10vw] mt-[2vh] mb-[3.5vh]">
        <Image src={GachonOJ_logo_image} alt="GachonOJ logo" />
      </div>
      <SideNavUser />
      <div className="flex flex-col mt-[4vh] mb-[6vh] space-y-[3vh]">
        <Link href="/main" className="flex items-center space-x-[0.4vw]">
          <MdMargin className="text-[1.2vw]" />
          <span className="font-PretendardRegular text-primaryDark text-[1.1vw]">
            서비스 바로가기
          </span>
        </Link>
        <Link href="/professor" className="flex items-center space-x-[0.4vw]">
          <LuLayoutDashboard className="text-[1.2vw]" />
          <span className="font-PretendardRegular text-primaryDark text-[1.1vw]">
            관리 대시보드
          </span>
        </Link>
      </div>
      <div className="flex flex-col ml-[0.6vw] space-y-[1.5vh]">
        <div>
          <div className="flex items-center space-x-[0.6vw]">
            <FiAward className="text-[1vw]" />
            <span className="font-PretendardRegular text-primaryDark text-[0.95vw]">
              시험 관리
            </span>
          </div>
          <div className="flex flex-col items-start ml-[1.5vw] space-y-[1vh] my-[1.5vh]">
            <button>
              <Link href="/professor/exam-manage/list">
              <p className="font-PretendardLight text-realGrey text-[0.75vw]">
                시험 목록
              </p>
              </Link>
            </button>
            <button>
              <p className="font-PretendardLight text-realGrey text-[0.75vw]">
                새 시험 생성
              </p>
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-[0.6vw]">
            <GrUser className="text-[1vw]" />
            <span className="font-PretendardRegular text-primaryDark text-[0.95vw]">
              서비스 지원
            </span>
          </div>
          <div className="flex flex-col items-start ml-[1.5vw] space-y-[1vh] my-[1.5vh]">
            <Link href="/admin/user-manage/list">
              <p className="font-PretendardLight text-realGrey text-[0.75vw]">
                교수님 이용 가이드
              </p>
            </Link>
            <Link href="/professor/inquiry/list">
              <p className="font-PretendardLight text-realGrey text-[0.75vw]">
                서비스 문의
              </p>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-[0.6vw]">
            <IoSettingsOutline className="text-[1vw]" />
            <span className="font-PretendardRegular text-primaryDark text-[0.95vw]">
              계정 관리
            </span>
          </div>
          <div className="flex flex-col items-start ml-[1.5vw] space-y-[1vh] my-[1.5vh]">
            <Link href="/professor/my-account">
              <p className="font-PretendardLight text-realGrey text-[0.75vw]">
                계정 정보 수정
              </p>
            </Link>
            <Link href="/professor/my-account/withdrawl">
              <p className="font-PretendardLight text-realGrey text-[0.75vw]">
                회원 탈퇴
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
