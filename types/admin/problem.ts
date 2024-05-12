import { difficulty } from "../problem";

export interface problemTableData {
  problemId: number;
  problemTitle: string;
  problemDiff: number;
  problemStatus: string;
  correctPeople: number;
  correctSubmit: number;
  submitCount: number;
  problemCreatedDate: string;
}

export interface problemListData {
  result: {
    content: problemTableData[];
  };
}

// 컬럼 타입 정의
export type problemTableColumn = {
  Header: string;
  accessor: keyof problemTableData;
};

export interface TestCase {
  testcaseInput: string | null;
  testcaseOutput: string | null;
  testcaseStatus: string | null;
}

export interface ProblemFormData {
  problemMemoryLimit: number;
  problemTimeLimit: number;
  problemDiff: number;
  problemTitle: string;
  problemContents: string;
  problemInputContents: string;
  problemOutputContents: string;
  problemClass: string;
  problemStatus: string;
  problemPrompt: string;
  testcases: TestCase[];

}


export interface TestProblemFormData {
id: number
data : ProblemFormData
}