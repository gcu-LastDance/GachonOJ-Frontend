"use clinet";
import React from "react";
import ModalLarge from "@/components/modal/ModalLarge";

export default function page() {
  return (
    <ModalLarge>
      <div className="flex-wrap px-5 py-5">
        <div className="text-xl font-bold mb-4">테스트 케이스</div>
        <div className="flex-wrap py-10">
        <div className="mb-4">
          <label className="block">입력</label>
          <textarea
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 resize-none"
            rows={3}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block">출력</label>
          <textarea
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 resize-none"
            rows={3}
          ></textarea>
        </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            확인
          </button>
        </div>
      </div>
    </ModalLarge>
  );
}
