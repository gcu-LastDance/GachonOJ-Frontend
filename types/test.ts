export type ExamType = "EXAM" | "CONTEST"; // 일단 대기

export interface TestData {
  examId: number;
  examTitle: string;
  memberNickname: string;
  examStartDate: string;
  examEndDate: string;
  examStatus: string;
}

/**
 * 시험 대기화면 데이터 인터페이스
 */
export interface TestDetailData {
  examId: number;
  examTitle: string;
  examContents: string;
  examStartDate: string;
  examEndDate: string;
  examType: string;
  examNotice?: string;
}

/**
 * 전반적인 시험 정보 데이터 인터페이스
 */
export interface TestProblemTestcaseData {
  testcaseInput: string;
  testcaseOutput: string;
  testcaseStatus: string;
}

export interface TestProblemData {
  problemClass: string;
  problemContents: string;
  problemDiff: string | null;
  problemId: number;
  problemInputContents: string;
  problemMemoryLimit: number;
  problemOutputContents: string;
  problemPrompt: string;
  problemStatus: string;
  problemTimeLimit: number;
  problemTitle: string;
  testcases: TestProblemTestcaseData[];
}

export interface AllofTestDetailData {
  candidateList: number[];
  examContents: string | null;
  examDueTime: number;
  examEndDate: string;
  examId: number;
  examMemo: string;
  examNotice: string;
  examStartDate: string;
  examStatus: string;
  examTitle: string;
  examType: string;
  tests: TestProblemData[];
}

export interface ExamProblemSubmitData {
  problemId: number;
  code: string;
  language: string;
}
