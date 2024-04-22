"use client";

import React, { useState } from "react";

export default function LanguageForm() {
  // 선택된 값을 상태로 관리
  const [selectedOption, setSelectedOption] = useState<string>("option1");

  // 라디오 버튼 변경을 처리하는 함수
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form className="flex flex-col w-[6.5vw] space-y-[2vh] mx-auto mt-[3.2vh]">
      <div className="flex justify-between">
        <span>C</span>
        <input
          type="radio"
          value={"option1"}
          checked={selectedOption === "option1"}
          onChange={handleRadioChange}
          className="appearance-none border-[1px] border-semiGrey rounded-full w-5 h-5 ml-[1vw] align-middle bg-white checked:bg-primaryBlue checked:border-[0.19vw]"
        />
      </div>
      <div className="flex justify-between">
        <span>C++</span>
        <input
          type="radio"
          value={"option2"}
          checked={selectedOption === "option2"}
          onChange={handleRadioChange}
          className="appearance-none border-[1px] border-semiGrey rounded-full w-5 h-5 ml-[1vw] align-middle bg-white checked:bg-primaryBlue checked:border-[0.19vw]"
        />
      </div>
      <div className="flex justify-between">
        <span>Java</span>
        <input
          type="radio"
          value={"option3"}
          checked={selectedOption === "option3"}
          onChange={handleRadioChange}
          className="appearance-none border-[1px] border-semiGrey rounded-full w-5 h-5 ml-[1vw] align-middle bg-white checked:bg-primaryBlue checked:border-[0.19vw]"
        />
      </div>
      <div className="flex justify-between">
        <span>Python</span>
        <input
          type="radio"
          value={"option4"}
          checked={selectedOption === "option4"}
          onChange={handleRadioChange}
          className="appearance-none border-[1px] border-semiGrey rounded-full w-5 h-5 ml-[1vw] align-middle bg-white checked:bg-primaryBlue checked:border-[0.19vw]"
        />
      </div>
    </form>
  );
}
