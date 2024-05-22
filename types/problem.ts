export type difficulty = "0단계" | "1단계" | "2단계" | "3단계" | "4단계";

export type ProfileProblemType = "bookmark" | "wrong" | "solved";

export interface RecProblemData {
  problemId: number;
  problemTitle: string;
  problemDiff: difficulty;
  problemClass: string;
}

export interface ProblemTableData {
  problemId: number;
  problemTitle: string;
  problemDiff: difficulty;
  problemClass?: string;
  correctPeople: number;
  correctRate: number;
  isBookmarked: boolean;
}

export interface SolProblemTableData {
  problemId: number;
  problemTitle: string;
  problemDiff: difficulty;
  problemClass?: string;
  correctPeople: number;
  correctRate: number;
  isBookmarked: boolean;
  submissionId: number;
}

/**
 * ProblemDetailData
 * IDE 왼편에 표시되는 문제 상세 정보 데이터
 */
export interface ProblemDetailData {
  problemTitle: string;
  problemDiff: difficulty;
  problemContents: string;
  problemInputContents: string;
  problemOutputContents: string;
  testcaseInputs: string[];
  testcaseOutputs: string[];
}

export interface SubmitHistoryData {
  submissionId: number;
  submissionDate: string;
  submissionStatus: string;
  submissionLang: string;
}

export interface TestcaseData {
  [input: string]: string;
}

export interface TestcaseSetData {
  input: string;
  output: string;
}

export interface ProblemSolutionExcuteData {
  code: string;
  language: string;
  testcase: TestcaseData;
}

export interface ProblemSolutionSubmitData {
  code: string;
  language: string;
}

export interface ProblemExcuteResultData {
  output: string;
  result: boolean;
}

export interface ProblemSubmitResultData {
  submissionId: number;
  isCorrect: boolean;
  problemRank: number;
  ratingChange: boolean;
  memberRating: number;
  memberRank: number;
  afterMemberRating: number;
  afterMemberRank: number;
}

export interface ProblemFeedbackData {
  aiContents: string;
  code: string;
  memberNickname: string;
  problemId: number;
  problemTitle: string;
}

export interface SolutionHistorySubmitDetailData {
  memberNickname: string;
  problemTitle: string;
  submissionCode: string;
}
