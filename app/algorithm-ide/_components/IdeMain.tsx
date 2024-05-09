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

export default function IdeMain({ problemId }: { problemId: number }) {
  const { programLang } = useProgramLangStore();
  const [code, setCode] = useState<string>(
    programLangSampleCodeMap[programLang ?? "C"]
  );

  useEffect(() => {
    setCode(programLangSampleCodeMap[programLang ?? "C"]);
  }, [programLang]);

  const handleCode = (value: string) => {
    setCode(value);
  };

  return (
    <div>
      <div className="flex justify-between h-[5.5vh] w-full items-center bg-white px-[1vw] border-b-[0.15vw] z-0">
        <span className="font-PretendardRegular text-[1.2vw]">
          {programLangMap[programLang ?? "C"]}
        </span>
        <Link href={`/algorithm-ide/setting`}>
          <IoSettingsOutline className="text-[1.7vw] text-primaryDark" />
        </Link>
      </div>
      <ReactCodeMirror
        value={code}
        height="83vh"
        theme={githubLight}
        autoFocus={true}
        onChange={handleCode}
      />
    </div>
  );
}
