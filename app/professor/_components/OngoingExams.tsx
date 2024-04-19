import React from "react";
import { RxQuestionMarkCircled } from "react-icons/rx";

const OngoingExams = () => {
  // Replace this with your actual data
  const exams = [
    { id: 1, name: "Exam 1" },
    { id: 2, name: "Exam 2" },
    { id: 3, name: "Exam 3" },
    { id: 4, name: "Exam 4" },
    { id: 5, name: "Exam 5" },
    // Add more exams as needed
  ];

  return (
    <div className="flex flex-wrap px-5 py-5 shadow-md border-4 border-semiGrey bg-white overflow-x-scroll">
      <div className="flex items-center">
        <div className="text-2xl">진행중인 시험</div>
        <div className="ml-3">
          <RxQuestionMarkCircled />
        </div>
      </div>
      <div className="flex pt-10 justify-center">
        {exams.map((exam) => (
          <div
            key={exam.id}
            className="shrink-0 mr-2 ml-2 mb-2 w-60 h-36 p-5 rounded-xl border border-gray-400"
          >
            <div className="text-lg font-semibold">컴퓨터공학과</div>
            <div className="text-md font-semibold">{exam.name}</div>
            {/* Add more exam details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OngoingExams;
