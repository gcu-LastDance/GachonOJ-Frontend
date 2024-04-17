export interface problemTableData {
  problem_id: number;
  problem_title: string;
  problem_diff: number;
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
  difficulty: number;
  language: string[];
  title: string;
  content: string;
  inputDescription: string;
  outputDescription: string;
}