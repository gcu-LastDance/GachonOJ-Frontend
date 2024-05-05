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
// export interface ExamplePair {
//   input: string;
//   output: string;
// }

/**
 * ProblemDetailData
 * IDE 왼편에 표시되는 문제 상세 정보 데이터
 */
export interface ProblemDetailData {
  problemTitle: string;
  problemContents: string;
  problemInputContents: string;
  problemOutputContents: string;
  testcaseInputs: string[];
  testcaseOutputs: string[];
}
