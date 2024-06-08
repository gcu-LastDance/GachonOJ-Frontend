"use client";

import {
  programLangMap,
  programLangSampleCodeMap,
} from "@/constants/programLangMap";
import { useProgramLangStore } from "@/store/useProgramLangStore";
import { githubLight } from "@uiw/codemirror-theme-github";
import ReactCodeMirror from "@uiw/react-codemirror";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { java } from "@codemirror/lang-java";

export default function IdeMain({
  code,
  setCode,
}: {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { programLang } = useProgramLangStore();

  const extensions = [java()];

  const handleCode = (value: string) => {
    setCode(value);
  };

  return (
    <div>
      <div className="flex justify-between h-[5.5vh] w-full items-center bg-white px-[1vw] border-b-[0.15vw] z-0">
        <div className="font-PretendardSemiBold text-[1.2vw] text-darkGrey h-[5vh] items-center flex">
          {programLangMap[programLang ?? "JAVA"]}
        </div>
        <Link href={`/test-ide/setting`}>
          <IoSettingsOutline className="text-[1.7vw] text-primaryDark hover:text-realGrey" />
        </Link>
      </div>
      <ReactCodeMirror
        value={code}
        height="55vh"
        theme={githubLight}
        autoFocus={true}
        editable={true}
        onChange={handleCode}
        extensions={[extensions]}
      />
    </div>
  );
}
