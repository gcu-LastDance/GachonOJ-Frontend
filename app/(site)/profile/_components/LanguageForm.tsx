"use client";

import {
  memberProgramLangAPI,
  memberProgramLangPatchAPI,
} from "@/api/memberAPI";
import { useProgramLangStore } from "@/store/useProgramLangStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";

export default function LanguageForm() {
  const queryClient = useQueryClient();
  const { setProgramLang } = useProgramLangStore();

  // 라디오 버튼 변경을 처리하는 함수
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    memberProgramLangMutation.mutate(event.target.value);
  };

  const { data: memberProgramLangData } = useQuery<string>({
    queryKey: ["memberProgramLang"],
    queryFn: memberProgramLangAPI,
  });

  const memberProgramLangMutation = useMutation({
    mutationFn: memberProgramLangPatchAPI,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ["memberProgramLang"] });
    },
  });

  useEffect(() => {
    if (memberProgramLangData) {
      setProgramLang(memberProgramLangData);
    }
  }, [memberProgramLangData]);

  return (
    <form className="flex flex-col w-[6.5vw] space-y-[2vh] mx-auto mt-[3.2vh]">
      <div className="flex justify-between">
        <span>C</span>
        <input
          type="radio"
          value={"C"}
          checked={memberProgramLangData === "C"}
          onChange={handleRadioChange}
          className="appearance-none border-[1px] border-semiGrey rounded-full w-5 h-5 ml-[1vw] align-middle bg-white checked:bg-primaryBlue checked:border-[0.19vw]"
        />
      </div>
      <div className="flex justify-between">
        <span>C++</span>
        <input
          type="radio"
          value={"CPP"}
          checked={memberProgramLangData === "CPP"}
          onChange={handleRadioChange}
          className="appearance-none border-[1px] border-semiGrey rounded-full w-5 h-5 ml-[1vw] align-middle bg-white checked:bg-primaryBlue checked:border-[0.19vw]"
        />
      </div>
      <div className="flex justify-between">
        <span>Java</span>
        <input
          type="radio"
          value={"JAVA"}
          checked={memberProgramLangData === "JAVA"}
          onChange={handleRadioChange}
          className="appearance-none border-[1px] border-semiGrey rounded-full w-5 h-5 ml-[1vw] align-middle bg-white checked:bg-primaryBlue checked:border-[0.19vw]"
        />
      </div>
      <div className="flex justify-between">
        <span>Python</span>
        <input
          type="radio"
          value={"PYTHON"}
          checked={memberProgramLangData === "PYTHON"}
          onChange={handleRadioChange}
          className="appearance-none border-[1px] border-semiGrey rounded-full w-5 h-5 ml-[1vw] align-middle bg-white checked:bg-primaryBlue checked:border-[0.19vw]"
        />
      </div>
    </form>
  );
}
