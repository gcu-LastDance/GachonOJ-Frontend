"use client";
import React, { useState } from "react";
import ModalLarge from "@/components/modal/ModalLarge";
import { useRouter } from "next/navigation";
import { useTestCaseStore } from "@/store/useTestCaseStore";


export default function Page() {
  const router = useRouter();
  const { testcaseInput, testcaseOutput, setTestCase } = useTestCaseStore();
  const [inputValue, setInputValue] = useState(""); // useState를 사용하여 입력값 상태를 관리합니다.
  const [outputValue, setOutputValue] = useState(""); // useState를 사용하여 입력값 상태를 관리합니다.

  const handleCloseModal = () => {
    router.back();
  };

  const handleSubmitModal = () => {
    if(inputValue && outputValue) {
    setTestCase(inputValue, outputValue, "VISIBLE");
    router.back();
    }
    else {
      console.log("실패");
      alert("입력값과 출력값을 입력해주세요.");
    }
  };

  return (
    <ModalLarge>
      <div className="flex-auto w-full px-5 py-5">
        <div className="text-xl font-bold mb-2">테스트 케이스 입력/수정</div>
        <div className="flex-auto w-full px-10 py-5">
          <div className="mb-4">
            <div>입력</div>
            <textarea
              value={inputValue} // 입력값은 inputValue로 설정합니다.
              onChange={(e) => setInputValue(e.target.value)} // 입력값이 변경될 때마다 setInputValue를 호출하여 상태를 업데이트합니다.
              className="border w-full rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 resize-none"
              rows={3}
            ></textarea>
          </div>
          <div className="mb-2">
            <div>출력</div>
            <textarea
              value={outputValue}
              onChange={(e) => setOutputValue(e.target.value)}
              className="border w-full rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 resize-none"
              rows={3}
            ></textarea>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div>
            <button
              onClick={handleSubmitModal} 
              className="mr-10 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              확인
            </button>
          </div>
          <div>
            <button
              onClick={handleCloseModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              돌아가기
            </button>
          </div>
        </div>
      </div>
    </ModalLarge>
  );
}
