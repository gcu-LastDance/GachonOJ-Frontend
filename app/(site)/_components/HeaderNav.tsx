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
        <div className="mx-auto space-x-[4vw] font-PretendardSemiBold text-[1.2vw] pt-[0.4vh] text-primaryDark flex pl-[3vw]">
          <Link href="/problem">
            <motion.span
              className="relative inline-block"
              style={{
                borderBottom: "2px solid transparent",
                width: "0%",
                display: "inline-block",
              }}
              whileHover={{
                width: "100%",
                borderBottomColor: "black",
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.2 }}
            >
              <span className="flex w-[3vw] justify-center">문제</span>
            </motion.span>
          </Link>
          <Link href="/ranking">
            <motion.span
              className="relative inline-block"
              style={{
                borderBottom: "2px solid transparent",
                width: "0%",
                display: "inline-block",
              }}
              whileHover={{
                width: "100%",
                borderBottomColor: "black",
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.2 }}
            >
              <span className="flex w-[3vw] justify-center">랭킹</span>
            </motion.span>
          </Link>
          <Link href="/contest">
            <motion.span
              className="relative inline-block"
              style={{
                borderBottom: "2px solid transparent",
                width: "0%",
                display: "inline-block",
              }}
              whileHover={{
                width: "100%",
                borderBottomColor: "black",
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.2 }}
            >
              <span className="flex w-[3vw] justify-center">대회</span>
            </motion.span>
          </Link>
          <Link href="/exam">
            <motion.span
              className="relative inline-block"
              style={{
                borderBottom: "2px solid transparent",
                width: "0%",
                display: "inline-block",
              }}
              whileHover={{
                width: "100%",
                borderBottomColor: "black",
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.2 }}
            >
              <span className="flex w-[3vw] justify-center">시험</span>
            </motion.span>
          </Link>
          <Link href="/inquiry">
            <motion.span
              className="relative inline-block"
              style={{
                borderBottom: "2px solid transparent",
                width: "0%",
                display: "inline-block",
              }}
              whileHover={{
                width: "100%",
                borderBottomColor: "black",
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.2 }}
            >
              <span className="flex w-[3vw] justify-center">문의</span>
            </motion.span>
          </Link>
          {userPermission === "ROLE_PROFESSOR" && (
            <Link href="/professor">
              <motion.span
                className="relative inline-block"
                style={{
                  borderBottom: "2px solid transparent",
                  width: "0%",
                  display: "inline-block",
                }}
                whileHover={{
                  width: "100%",
                  borderBottomColor: "black",
                  transition: { duration: 0.2 },
                }}
                transition={{ duration: 0.2 }}
              >
                <span className="flex w-[6vw] justify-center">관리페이지</span>
              </motion.span>
            </Link>
          )}
          {userPermission === "ROLE_ADMIN" && (
            <Link href="/admin">
              <motion.span
                className="relative inline-block"
                style={{
                  borderBottom: "2px solid transparent",
                  width: "0%",
                  display: "inline-block",
                }}
                whileHover={{
                  width: "100%",
                  borderBottomColor: "black",
                  transition: { duration: 0.2 },
                }}
                transition={{ duration: 0.2 }}
              >
                <span className="flex w-[6vw] justify-center">관리페이지</span>
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
