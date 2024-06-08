import React from "react";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="text-3xl font-bold mb-4">페이지를 찾을 수 없음</div>
        <div className="text-lg">죄송합니다, 찾으시는 페이지가 존재하지 않습니다.</div>
        <div className="text-lg"> URL을 다시 확인해주세요.</div>
      </div>
    </div>
  );
}
