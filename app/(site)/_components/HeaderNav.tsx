"use client";

import Link from "next/link";
import GachonOJ_logo_image from "@logo/gachonoj_logo.png";
import React from "react";
import Image from "next/image";
import HeaderButton from "./HeaderButton";
import useUserStore from "@/store/useUserStore";
import { motion } from "framer-motion";

export default function HeaderNav() {
  const { userPermission } = useUserStore();

  return (
    <header className="border-b-[0.1vw] shadow-xl relative z-50">
      <div className="flex items-center w-[65vw] h-[7vh] mx-auto">
        <div>
          <Link href="/main">
            <div className="w-[8vw]">
              <Image src={GachonOJ_logo_image} alt="gachonOJ logo" />
            </div>
          </Link>
        </div>
        <div className="mx-auto space-x-[4vw] font-PretendardSemiBold text-[1.2vw] pt-[0.3vh] text-primaryDark flex pl-[5vw]">
          <Link href="/problem">
            <span>문제</span>
            <motion.hr
              initial={{ overflow: "hidden" }}
              whileHover={{ x: "-100%" }}
              transition={{ duration: 0.2 }}
            ></motion.hr>
          </Link>
          <Link href="/ranking">
            <motion.hr
              initial={{ overflow: "hidden" }}
              whileHover={{ x: "-100%" }}
              transition={{ duration: 0.2 }}
            >
              랭킹
            </motion.hr>
          </Link>
          <Link href="/contest">
            <motion.span
              initial={{ overflow: "hidden" }}
              whileHover={{ x: "-100%" }}
              transition={{ duration: 0.2 }}
            >
              대회
            </motion.span>
          </Link>
          <Link href="/exam">
            <motion.span
              initial={{ overflow: "hidden" }}
              whileHover={{ x: "-100%" }}
              transition={{ duration: 0.2 }}
            >
              시험
            </motion.span>
          </Link>
          <Link href="/inquiry">
            <motion.span
              initial={{ overflow: "hidden" }}
              whileHover={{ x: "-100%" }}
              transition={{ duration: 0.2 }}
            >
              문의
            </motion.span>
          </Link>
          {userPermission === "ROLE_PROFESSOR" && (
            <Link href="/professor">
              <motion.span
                initial={{ overflow: "hidden" }}
                whileHover={{ x: "-100%" }}
                transition={{ duration: 0.2 }}
              >
                관리페이지
              </motion.span>
            </Link>
          )}
          {userPermission === "ROLE_ADMIN" && (
            <Link href="/admin">
              <motion.span
                initial={{ overflow: "hidden" }}
                whileHover={{ x: "-100%" }}
                transition={{ duration: 0.2 }}
              >
                관리페이지
              </motion.span>
            </Link>
          )}
        </div>
        <div className="ml-auto">
          <HeaderButton />
        </div>
      </div>
    </header>
  );
}
