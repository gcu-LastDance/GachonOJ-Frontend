import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const IncorrectAlgorithm = () => {
  // Replace this with your actual data
  const questions = [
    {
      id: 1,
      AlgorithmTitle: "그래프 탐색",
      incorrectRate: 0.4
    },
    {
      id: 2,
      AlgorithmTitle: "최단거리 알고리즘",
      incorrectRate: 0.1
    },
    {
      id: 3,
      AlgorithmTitle: "최소 스패닝 트리",
      incorrectRate: 0.2
    },
    {
      id: 4,
      AlgorithmTitle: "문자열",
      incorrectRate: 0.4
    },
    {
      id: 5,
      AlgorithmTitle: "다이나믹 프로그래밍",
      incorrectRate: 0.2
    }
  ];
  return (
    <div className="flex flex-col px-5 py-5 shadow-md border-4 border-semiGrey bg-white overflow-y-hidden overflow-x-scroll">
      <div className="text-2xl">오답율 높은 알고리즘 분류 Top 5</div>
      <div className="text-semiGrey text-sm">학생들이 가장 어려워하는 알고리즘들을 알려드립니다.</div>
      <div className="flex pt-10">
        {questions.map((question) => (
          <div
            key={question.id}
            className="shrink-0 mr-2 ml-2 mb-2 w-60 h-32 p-2 rounded-xl border border-gray-400"
          >
            <div className="text-lg font-semibold">
              {question.AlgorithmTitle}
            </div>
            <div className="">정답율 {question.incorrectRate * 100}%</div>
            {/* Add more exam details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncorrectAlgorithm;
