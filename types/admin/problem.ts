import { difficulty } from "../problem";

export interface problemTableData {
  problem_id: number;
  problem_title: string;
  problem_diff: difficulty;
  problem_status: string;
  submission_num: number;
  grading_num: number;
  correct_num: number;
  created_at: string;
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
