export type difficulty = 0 | 1 | 2 | 3 | 4;

export interface RecProblemData {
  id: number;
  title: string;
  difficulty: difficulty;
  category?: string[];
}


