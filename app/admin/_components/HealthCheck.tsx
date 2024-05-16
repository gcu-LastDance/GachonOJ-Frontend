"use client";

import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoIosAlert } from "react-icons/io";

import AIService from "./_HealthCheck/AIService";
import BoardService from "./_HealthCheck/BoardService";
import SubmissionService from "./_HealthCheck/SubmissionService";
import ProblemService from "./_HealthCheck/ProblemService";
import MemberService from "./_HealthCheck/MemberService";

const HealthCheck = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="justiy-center">
        <AIService />
        </div>
        <div>AI 서비스 현황</div>
      </div>
      <div>
        <BoardService />
        <div>게시판 서비스 현황</div>
      </div>
      <div>
        <MemberService />
        <div>회원 서비스 현황</div>
      </div>
      <div>
        <SubmissionService />
        <div>제출 서비스 현황</div>
      </div>
      <div>
        <ProblemService />
        <div>문제 서비스 현황</div>
      </div>
    </div>
  );
};

export default HealthCheck;
