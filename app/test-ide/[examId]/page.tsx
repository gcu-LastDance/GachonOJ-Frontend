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
import { useQuery } from "@tanstack/react-query";
import { examInfoAPI } from "@/api/testAPI";
import { RxHamburgerMenu } from "react-icons/rx";
import { AllofTestDetailData } from "@/types/test";
import ProbNavModal from "./_components/ProbNavModal";

export default function page({ params }: { params: { examId: number } }) {
  /**
   * 사용자 토큰
   */
  const { token } = useUserStore();
  /**
   * 문제 풀이 언어
   */
  const { programLang } = useProgramLangStore();
  /**
   * 작성한 코드 상태관리
   */
  const [code, setCode] = useState<string>(
    programLangSampleCodeMap[programLang ?? "JAVA"]
  );
  /**
   * 실행 데이터 상태관리
   */
  const [excuteResult, setExcuteResult] = useState<ProblemExcuteResultData[]>(
    []
  );
  /**
   * 테스트케이스 모달 상태관리
   */
  const [testcaseModalOpen, setTestcaseModalOpen] = useState(false);
  /**
   * 테스트케이스 데이터
   */
  const [testcase, setTestcase] = useState<TestcaseSetData[]>([]);
  /**
   * 결과 모달 상태관리
   */
  const [resultModalOpen, setResultModalOpen] = useState(false);
  /**
   * 제출 결과 상태관리
   */
  const [submitResult, setSubmitResult] = useState<ProblemSubmitResultData>();
  /**
   * 현재 문제 번호 상태관리
   * -> 화면에 표시할 때는 +1 해서 표시
   */
  const [curProbNum, setCurProbNum] = useState(0);

  const [probNavModalOpen, setProvNavModalOpen] = useState(false);

  const handleSetNextProb = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(`${params.examId}-${curProbNum}`, code);
    }
    setCurProbNum(
      Math.min(
        curProbNum + 1,
        examInfo?.tests.length ? examInfo?.tests.length - 1 : 0
      )
    );
  };

  const handleSetPrevProb = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(`${params.examId}-${curProbNum}`, code);
    }
    setCurProbNum(Math.max(curProbNum - 1, 0));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sessionStorage.getItem(`${params.examId}-${curProbNum}`) !== null) {
        setCode(sessionStorage.getItem(`${params.examId}-${curProbNum}`) ?? "");
      } else {
        setCode(programLangSampleCodeMap[programLang ?? "JAVA"]);
      }
    }
  }, [curProbNum, params.examId]);

  useEffect(() => {
    setCode(programLangSampleCodeMap[programLang ?? "JAVA"]);
  }, [programLang]);

  const { data: examInfo } = useQuery<AllofTestDetailData>({
    queryKey: ["examInfo"],
    queryFn: () => examInfoAPI(params.examId),
  });

  useEffect(() => {
    if (examInfo?.examDueTime) {
      const storedTimeLeft = sessionStorage.getItem(`timer-${params.examId}`);
      if (storedTimeLeft !== null) {
        setTimeLeft(parseInt(storedTimeLeft, 10));
      } else {
        const initialTime = examInfo.examDueTime * 60;
        setTimeLeft(initialTime);
        sessionStorage.setItem(
          `timer-${params.examId}`,
          initialTime.toString()
        );
      }
      setTimerActive(true); // Start the timer when the component mounts
    }
  }, [examInfo?.examDueTime, params.examId]);

  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    if (!timerActive) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        const newTimeLeft = prevTimeLeft - 1;
        sessionStorage.setItem(
          `timer-${params.examId}`,
          newTimeLeft.toString()
        );
        if (newTimeLeft <= 0) {
          clearInterval(intervalId);
          setTimerActive(false);
          return 0;
        }
        return newTimeLeft;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timerActive, params.examId]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

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
                onClick={() => setProvNavModalOpen(true)}
                className="w-[12vw] h-[7vh] border-t-[0.12vw] border-l-[0.12vw] border-r-[0.06vw] font-PretendardSemiBold text-[1vw] justify-center items-center"
              >
                <div className="flex items-center px-[1vw]">
                  <RxHamburgerMenu
                    className={`text-[2vw] ${
                      !probNavModalOpen ? "text-primaryDark" : "text-realGrey"
                    }`}
                  />
                  <div className="flex flex-col ml-[1.4vw]">
                    <div className="flex w-[5.8vw] justify-between">
                      <span className="font-PretendardSemiBold text-realGrey">
                        총 문항
                      </span>
                      <span className="font-PretendardSemiBold">
                        {examInfo?.tests.length}
                      </span>
                    </div>
                    <div className="flex w-[5.8vw] justify-between">
                      <span className="font-PretendardSemiBold text-realGrey">
                        현재 문항
                      </span>
                      <span className="font-PretendardSemiBold">
                        {curProbNum + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
              {probNavModalOpen && (
                <ProbNavModal
                  setModalOpen={setProvNavModalOpen}
                  totalProblems={examInfo?.tests.length ?? 0}
                  selectProblem={(index) => {
                    if (typeof window !== "undefined") {
                      window.sessionStorage.setItem(
                        `${params.examId}-${curProbNum}`,
                        code
                      );
                    }
                    setCurProbNum(index);
                  }}
                />
              )}
              <button
                type="button"
                onClick={handleSetPrevProb}
                disabled={curProbNum === 0}
                className="w-[9vw] h-[7vh] border-t-[0.12vw] border-r-[0.06vw] border-l-[0.06vw] font-PretendardSemiBold text-[1.3vw] flex justify-center items-center hover:bg-lightGrey disabled:text-realGrey disabled:bg-lightGrey"
              >
                이전 문항
              </button>
              <button
                type="button"
                onClick={handleSetNextProb}
                disabled={
                  examInfo?.tests.length
                    ? curProbNum === examInfo?.tests.length - 1
                    : false
                }
                className="w-[9vw] h-[7vh] border-t-[0.12vw] border-r-[0.12vw] border-l-[0.06vw] font-PretendardSemiBold text-[1.3vw] flex justify-center items-center hover:bg-lightGrey disabled:text-realGrey disabled:bg-lightGrey"
              >
                다음 문항
              </button>
            </div>
          </div>
          <div className="w-[30vw] h-[72vh] border-[0.12vw] overflow-y-auto">
            <IdeProblemWindow problemData={examInfo?.tests[curProbNum]} />
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
          curProbNum={curProbNum}
          problems={examInfo?.tests ?? []}
          setExcuteResult={setExcuteResult}
          setTestcaseModalOpen={setTestcaseModalOpen}
          setResultModalOpen={setResultModalOpen}
          setSubmitResult={setSubmitResult}
        />
      )}
      {testcaseModalOpen && (
        <TestcaseModal
          setModalOpen={setTestcaseModalOpen}
          testcase={testcase}
          setTestcase={setTestcase}
        />
      )}
      {resultModalOpen && <ResultModal />}
    </div>
  );
}
