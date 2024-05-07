"use client";
import React, { useState } from "react";
import ModalLarge from "@/components/modal/ModalLarge";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  
  const handleCloseModal = () => {
    router.back();
  };

  const handleSubmitModal = () => {
    router.back();
  };

  return (
    <ModalLarge>
      <div className="flex-auto w-full px-5 py-5">
        <div className="text-xl font-bold mb-2">테스트 케이스 입력/수정</div>
        <div className="flex-auto w-full px-10 py-5">
          <div className="mb-4">
            <div>입력</div>
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
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
            
            className="mr-10 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
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
