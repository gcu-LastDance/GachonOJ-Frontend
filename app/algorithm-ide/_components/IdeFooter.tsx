import { useProblemSolutionExecute } from "@/hooks/useProblemSolutionExcute";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

export default function IdeFooter() {
  const params = useParams();

  // const handleSolutionExcute = () => {
  //   useProblemSolutionExecute.mutate();
  // };

  return (
    <footer className="fixed bottom-0 flex border-t-2 shadow-md h-[5.5vh] px-[1.5vw] w-screen bg-white items-center">
      <Link
        href={`/algorithm-ide/${params.problemId}/history`}
        className="flex border-[0.13vw] w-[7vw] h-[3.5vh] rounded-[0.3vw] border-primaryBlue items-center justify-center"
      >
        <span className="font-PretendardMedium text-primaryBlue text-[0.8vw]">
          제출이력 확인
        </span>
      </Link>
      <button
        type="button"
        className="border-[0.13vw] w-[5vw] h-[3.5vh] rounded-[0.3vw] border-primaryBlue ml-auto"
      >
        <span className="font-PretendardMedium text-primaryBlue text-[0.8vw]">
          저장
        </span>
      </button>
      <button
        type="button"
        className="border-[0.13vw] w-[7.5vw] h-[3.5vh] rounded-[0.3vw] border-primaryBlue ml-[0.5vw]"
      >
        <span className="font-PretendardMedium text-primaryBlue text-[0.8vw]">
          테스트케이스 추가
        </span>
      </button>
      <button
        type="button"
        // onClick={handleSolutionExcute}
        className="border-[0.13vw] w-[6vw] h-[3.5vh] rounded-[0.3vw] border-primaryBlue ml-[0.5vw]"
      >
        <span className="font-PretendardMedium text-primaryBlue text-[0.8vw]">
          코드 실행
        </span>
      </button>
      <button
        type="button"
        className="border-[0.13vw] w-[6vw] h-[3.5vh] rounded-[0.3vw] bg-primaryRed border-primaryRed ml-[0.5vw]"
      >
        <span className="font-PretendardMedium text-white text-[0.8vw]">
          제출
        </span>
      </button>
    </footer>
  );
}
