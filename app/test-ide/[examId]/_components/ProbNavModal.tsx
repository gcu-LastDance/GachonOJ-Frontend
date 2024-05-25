import React from "react";

export default function ProbNavModal({
  setModalOpen,
  totalProblems,
  selectProblem,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  totalProblems: number;
  selectProblem: (index: number) => void;
}) {
  return (
    <div className="fixed inset-0 z-50" onClick={() => setModalOpen(false)}>
      <div
        className="absolute left-0 mt-[22.7vh] bg-white border-[0.25vh] rounded p-[1vh] w-[12.05vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-5 gap-1">
          {Array.from({ length: totalProblems }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                selectProblem(index);
                setModalOpen(false);
              }}
              className="p-[0.5vh] bg-primaryBlue text-white rounded"
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
