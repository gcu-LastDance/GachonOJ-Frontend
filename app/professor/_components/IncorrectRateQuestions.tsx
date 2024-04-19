import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const IncorrectRateQuestions = () => {
  // Replace this with your actual data
  const questions = [
    {
      id: 1,
      questionText: "Question 1",
      incorrectRate: 0.8,
      questionLevel: "4단계",
      questionClassify: "그래프 이론",
    },
    {
      id: 2,
      questionText: "Question 2",
      incorrectRate: 0.6,
      questionLevel: "2단계",
      questionClassify: "그리디 알고리즘",
    },
    {
      id: 3,
      questionText: "Question 3",
      incorrectRate: 0.9,
      questionLevel: "5단계",
      questionClassify: "자료구조",
    },
  ];
  return (
    <div className="flex flex-col overflow-x-auto shadow-md border-semiGrey border-4 h-72 py-5 px-5 bg-white">
      <div className="text-2xl">최근 오답율 높은 문제 Top 3</div>
      <div className="text-sm text-semiGrey">
        학생들이 최근 가장 어려워하는 문제들를 알려드립니다.
      </div>
      <div className="flex pt-10 px-10 justify-center">
        {questions.map((question) => (
          <div
            key={question.id}
            className="w-1/3 shrink-0 mr-2 ml-2 mb-2 h-32 p-2 rounded-xl border border-gray-400"
          >
            <div className="flex justify-between">
              <div className="">{question.questionLevel}</div>
              <div className="text-red-500">
                정답율 {question.incorrectRate * 100}%
              </div>
            </div>
            <div className="mb-10">{question.questionText}</div>

            <div className="flex justify-between items-center">
              <div className="">{question.questionClassify}</div>
              <div>
                <FaArrowRightLong />
              </div>
              {/* Add more exam details here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncorrectRateQuestions;
