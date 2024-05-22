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
import {
  ProblemExcuteResultData,
  ProblemSubmitResultData,
  TestcaseSetData,
} from "@/types/problem";
import TestcaseModal from "../_components/TestcaseModal";
import ResultModal from "../_components/ResultModal";
import HistoryModal from "../_components/HistoryModal";
import { useQuery } from "@tanstack/react-query";
import { examInfoAPI } from "@/api/testAPI";
import { RxHamburgerMenu } from "react-icons/rx";

export default function page({ params }: { params: { examId: number } }) {
  const { token } = useUserStore();
  const { programLang } = useProgramLangStore();
  const [code, setCode] = useState<string>(
    programLangSampleCodeMap[programLang ?? "C"]
  );
  const [excuteResult, setExcuteResult] = useState<ProblemExcuteResultData[]>(
    []
  );
  const [testcaseModalOpen, setTestcaseModalOpen] = useState(false);
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [testcase, setTestcase] = useState<TestcaseSetData[]>([]);
  const [resultModalOpen, setResultModalOpen] = useState(false);
  const [submitResult, setSubmitResult] = useState<ProblemSubmitResultData>();

  useEffect(() => {
    setCode(programLangSampleCodeMap[programLang ?? "C"]);
  }, [programLang]);

  const { data: examInfo } = useQuery({
    queryKey: ["examInfo"],
    queryFn: () => examInfoAPI(params.examId),
    refetchOnMount: "always",
  });

  useEffect(() => {
    setTimeLeft(examInfo?.examDueTime * 60 ?? 0);
  }, [examInfo?.examDueTime]);

  /** 타이머 */
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }

    // 시간이 만료되었을 때 경고 메시지
    if (timeLeft === 0) {
      setTimerActive(false); // 타이머 비활성화
    }
  }, [timerActive, timeLeft]);

  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="h-[89vh]">
          <div className="w-[30vw] h-[17vh]">
            <div className="flex font-PretendardSemiBold text-[1.5vw] w-[30vw] h-[10vh] items-center justify-center">
              <span>제한 시간</span>
              <span className="font-PretendardRegular pl-[1vw] text-[1.4vw]">
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </span>
              <span className="px-[0.5vw]">/</span>
              <span className="font-PretendardRegular text-[1.4vw]">
                {examInfo?.examDueTime}:00
              </span>
            </div>
            <div className="flex w-[30vw]">
              <button
                type="button"
                className="w-[10vw] h-[7vh] border-t-[0.12vw] border-l-[0.12vw] border-r-[0.06vw] font-PretendardSemiBold text-[1vw] justify-center items-center"
              >
                <div className="flex items-center px-[1vw]">
                  <RxHamburgerMenu className="text-[2vw]" />
                  <div className="flex flex-col ml-[1.4vw]">
                    <span>총 문항</span>
                    <span>현재 문항</span>
                  </div>
                </div>
              </button>
              <button
                type="button"
                className="w-[10vw] h-[7vh] border-t-[0.12vw] border-r-[0.06vw] border-l-[0.06vw] font-PretendardSemiBold text-[1.3vw] flex justify-center items-center"
              >
                이전 문항
              </button>
              <button
                type="button"
                className="w-[10vw] h-[7vh] border-t-[0.12vw] border-r-[0.12vw] border-l-[0.06vw] font-PretendardSemiBold text-[1.3vw] flex justify-center items-center"
              >
                다음 문항
              </button>
            </div>
          </div>
          <div className="w-[30vw] h-[72vh] border-[0.12vw] overflow-y-auto">
            <IdeProblemWindow problemData={examInfo?.tests[0]} />
          </div>
        </div>
        <div className="w-[70vw] border-[0.12vw]">
          <div className="overflow-y-auto">
            <IdeMain code={code} setCode={setCode} />
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
          setResultModalOpen={setResultModalOpen}
          setSubmitResult={setSubmitResult}
          setHistoryModalOpen={setHistoryModalOpen}
        />
      )}
      {testcaseModalOpen && (
        <TestcaseModal
          setModalOpen={setTestcaseModalOpen}
          testcase={testcase}
          setTestcase={setTestcase}
        />
      )}
      {resultModalOpen && (
        <ResultModal
          submitResult={submitResult}
          setResultModalOpen={setResultModalOpen}
        />
      )}
      {/* {historyModalOpen && (
        <HistoryModal
          problemId={params.problemId}
          setModalOpen={setHistoryModalOpen}
        />
      )} */}
    </div>
  );
}
