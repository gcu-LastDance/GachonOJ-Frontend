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

export default function SideAdminNav() {
  return (
    <div className="h-screen w-[14vw] border-[0.1vw] border-semiGrey flex flex-col items-center fixed bg-white">
      
      <Link href="/main" className="w-[10vw] mt-[2vh] mb-[3.5vh]">
        <Image src={GachonOJ_logo_image} alt="GachonOJ logo" />
      </Link>
      <SideNavUser />
      <div className="flex flex-col mt-[4vh] mb-[3vh] space-y-[1.6vh]">
        <Link href="/main" className="flex items-center space-x-[0.4vw]">
          <MdMargin className="text-[1.2vw]" />
          <span className="font-PretendardRegular text-primaryDark text-[1.1vw]">
            서비스 바로가기
          </span>
        </Link>
        <Link href="/admin" className="flex items-center space-x-[0.4vw]">
          <LuLayoutDashboard className="text-[1.2vw]" />
          <span className="font-PretendardRegular text-primaryDark text-[1.1vw]">
            관리 대시보드
          </span>
        </Link>
      </div>
      <div className="flex flex-col ml-[0.6vw]">
        <div>
          <div className="flex items-center space-x-[0.6vw]">
            <IoSettingsOutline className="text-[1vw]" />
            <span className="font-PretendardRegular text-primaryDark text-[0.95vw]">
              서비스 관리
            </span>
          </div>
          <div className="flex flex-col items-start ml-[1.5vw] space-y-[0.8vh] my-[1.2vh]">
            <Link href="/admin/notice-manage/list">
              <p className="font-PretendardLight text-realGrey text-[0.75vw]">
                공지사항 관리
              </p>
            </Link>
            <Link href="/admin/inquiry-manage/list">
              <p className="font-PretendardLight text-realGrey text-[0.75vw]">
                문의사항 관리
              </p>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-[0.6vw]">
            <GrUserAdmin className="text-[1vw]" />
            <span className="font-PretendardRegular text-primaryDark text-[0.95vw]">
              관리자 관리
            </span>
          </div>
          <div className="flex flex-col items-start ml-[1.5vw] space-y-[0.8vh] my-[1.2vh]">
            <Link href="/admin/admin-manage/my-account">
              <p className="font-PretendardLight text-realGrey text-[0.75vw]">
                내 계정 관리
              </p>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-[0.6vw]">
            <GrUser className="text-[1vw]" />
            <span className="font-PretendardRegular text-primaryDark text-[0.95vw]">
              사용자 관리
            </span>
          </div>
          <div className="flex flex-col items-start ml-[1.5vw] space-y-[0.8vh] my-[1.2vh]">
            <Link href="/admin/user-manage/list">
              <p className="font-PretendardLight text-realGrey text-[0.75vw]">
                학생 목록
              </p>
            </Link>
            <Link href="/admin/professor-manage/list">
              <p className="font-PretendardLight text-realGrey text-[0.75vw]">
                교수 목록
              </p>
            </Link>
            <Link href="/admin/professor-manage/enroll">
              <p className="font-PretendardLight text-realGrey text-[0.75vw]">
                새로운 교수 추가
              </p>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-[0.6vw]">
            <PiCodeBlockBold className="text-[1vw]" />
            <span className="font-PretendardRegular text-primaryDark text-[0.95vw]">
              문제 관리
            </span>
          </div>
          <div className="flex flex-col items-start ml-[1.5vw] space-y-[0.8vh] my-[1.2vh]">
            <Link href="/admin/problem-manage/list">
              <p className="font-PretendardLight text-realGrey text-[0.75vw]">
                문제 목록
              </p>
            </Link>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-[0.6vw]">
            <FiAward className="text-[1vw]" />
            <span className="font-PretendardRegular text-primaryDark text-[0.95vw]">
              시험&대회 관리
            </span>
          </div>
          <div className="flex flex-col items-start ml-[1.5vw] space-y-[0.8vh] my-[1.2vh]">
            <button>
              <Link href="/admin/exam-manage/list">
                <p className="font-PretendardLight text-realGrey text-[0.75vw]">
                  시험 목록
                </p>
              </Link>
            </button>

            <button>
              <Link href="/admin/contest-manage/list">
                <p className="font-PretendardLight text-realGrey text-[0.75vw]">
                  대회 목록
                </p>
              </Link>
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-[0.6vw]">
            <PiShootingStarBold className="text-[1vw]" />
            <span className="font-PretendardRegular text-primaryDark text-[0.95vw]">
              AI 분석 관리
            </span>
          </div>
          <div className="flex flex-col items-start ml-[1.5vw] space-y-[0.8vh] my-[1.2vh]">
            <button>
              <p className="font-PretendardLight text-realGrey text-[0.75vw]">
                프롬프트 관리
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
