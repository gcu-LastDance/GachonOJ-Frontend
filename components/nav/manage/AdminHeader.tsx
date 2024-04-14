import React from "react";

export default function AdminHeader() {
  return (
    <header className="fixed flex border-b-2 shadow-md h-[7vh] px-[1.5vw] justify-end w-[86vw] bg-white">
      <button type="button">
        <div className="border-[0.15rem] pl-4 pr-4 pt-0.5 pb-0.5 rounded-lg border-primaryBlue">
          <span className="font-PretendardMedium text-primaryBlue text-sm">
            로그아웃
          </span>
        </div>
      </button>
    </header>
  );
}
