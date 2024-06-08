export interface TestData {
  examId: number;
  examTitle: string;
  examStartDate: string;
  examEndDate: string;
  examStatus: string;
}

export interface LanguageGraphData {
  lang: string;
  count: number;
}

export interface IncorrectRateData {
  problemId: number;
  problemTitle: string;
  problemDiff: string;
  problemClass: string;
  correctRate: string
}