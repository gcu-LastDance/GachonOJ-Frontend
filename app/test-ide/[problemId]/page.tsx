"use client";

import React, { useEffect, useState } from "react";
import IdeProblemWindow from "../_components/IdeProblemWindow";
import IdeMain from "../_components/IdeMain";
import useUserStore from "@/store/useUserStore";
import IdeGuestFooter from "../_components/IdeGuestFooter";
import IdeFooter from "../_components/IdeFooter";
import { useProgramLangStore } from "@/store/useProgramLangStore";
import { programLangSampleCodeMap } from "@/constants/programLangMap";
import IdeResultWindow from "../_components/IdeResultWindow";
import { ProblemExcuteResultData, TestcaseSetData } from "@/types/problem";
import TestcaseModal from "../_components/TestcaseModal";

export default function page({ params }: { params: { problemId: number } }) {
  const { token } = useUserStore();
  const { programLang } = useProgramLangStore();
  const [code, setCode] = useState<string>(
    programLangSampleCodeMap[programLang ?? "C"]
  );
  const [excuteResult, setExcuteResult] = useState<ProblemExcuteResultData[]>(
    []
  );
  const [testcaseModalOpen, setTestcaseModalOpen] = useState(false);
  const [testcase, setTestcase] = useState<TestcaseSetData[]>([]);

  useEffect(() => {
    setCode(programLangSampleCodeMap[programLang ?? "C"]);
  }, [programLang]);

  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="w-[30vw] h-[89vh] border-[0.12vw] overflow-y-auto">
          <IdeProblemWindow problemId={params.problemId} />
        </div>
        <div className="w-[70vw] border-[0.12vw]">
          <div className="overflow-y-auto">
            <IdeMain
              problemId={params.problemId}
              code={code}
              setCode={setCode}
            />
          </div>
          <div className="overflow-y-auto">
            <IdeResultWindow excuteResult={excuteResult} />
          </div>
        </div>
      </div>
      {!token ? (
        <IdeGuestFooter />
      ) : (
        <IdeFooter
          code={code}
          testcase={testcase}
          setExcuteResult={setExcuteResult}
          setTestcaseModalOpen={setTestcaseModalOpen}
        />
      )}
      {testcaseModalOpen && (
        <TestcaseModal
          setModalOpen={setTestcaseModalOpen}
          testcase={testcase}
          setTestcase={setTestcase}
        />
      )}
    </div>
  );
}
