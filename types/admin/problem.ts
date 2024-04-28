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

export interface ProblemFormData {
  memory: string;
  time: string;
  difficulty: difficulty;
  language: string[];
  title: string;
  content: string;
  inputDescription: string;
  outputDescription: string;
}
