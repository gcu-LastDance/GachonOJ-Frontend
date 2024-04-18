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
    { id: 6, name: "Exam 6" },
    { id: 7, name: "Exam 7" },
    { id: 8, name: "Exam 8" },
    // Add more exams as needed
  ];

  return (
    <div className="whitespace-nowrap flex flex-col shadow-md border-4 border-semiGrey bg-white overflow-x-auto w-1/2">
      <div className="flex">
      <div className="text-lg">진행중인 시험 </div>
      <div className="mt-1.5 ml-3"> <RxQuestionMarkCircled /> </div>
      </div>
      <div className="flex">
        {exams.map((exam) => (
          <div
            key={exam.id}
            className="shrink-0 ml-5 mb-2 w-60 h-40 p-5 rounded-xl border border-gray-400"
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
