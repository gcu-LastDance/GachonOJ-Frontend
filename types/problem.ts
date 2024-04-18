export type difficulty = 0 | 1 | 2 | 3 | 4;

export interface RecProblemData {
  id: number;
  title: string;
  difficulty: difficulty;
  category?: string[];
}

export interface ProblemTableData {
  id: number;
  title: string;
  difficulty: difficulty;
  category?: string[];
  correct: number;
  correctRate: number;
  isBookmarked: boolean;
}

type ProblemTableColumnAccesor = Omit<ProblemTableData, "id">;

export interface ProblemTableColumn {
  Header: string;
  accessor: keyof ProblemTableColumnAccesor;
  Cell?: (props: { value: any }) => React.ReactNode;
}
