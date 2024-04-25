export type difficulty = "0단계" | "1단계" | "2단계" | "3단계" | "4단계";

export interface RecProblemData {
  id: number;
  title: string;
  difficulty: difficulty;
  category?: string[];
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

type ProblemTableColumnAccesor = Omit<ProblemTableData, "id">;

export interface ProblemTableColumn {
  Header: string;
  accessor: keyof ProblemTableColumnAccesor;
  Cell?: (props: { value: any }) => React.ReactNode;
}

export interface ExamplePair {
  input: string;
  output: string;
}

/**
 * ProblemDetailData
 * IDE 왼편에 표시되는 문제 상세 정보 데이터
 */
export interface ProblemDetailData {
  id: number;
  title: string;
  problemText: string;
  difficulty: difficulty;
  inputInfo: string;
  outputInfo: string;
  examples: ExamplePair[];
}
