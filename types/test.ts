export type ExamType = "EXAM" | "CONTEST"; // 일단 대기

export interface TestData {
  examId: number;
  examTitle: string;
  memberNickname: string;
  examStartDate: string;
  examEndDate: string;
  examStatus: string;
}

export interface TestDetailData {
  examId: number;
  examTitle: string;
  examContents: string;
  examStartDate: string;
  examEndDate: string;
  examType: string;
  examNotice?: string;
}
