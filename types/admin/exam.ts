export interface examTableData {
  examId: number;
  examTitle: string;
  examMemo: string;
  memberNickname: string;
  examStatus: string;
  examUpdatedDate: string;
  examCreatedDate: string;
}

// 컬럼 타입 정의
export type examTableColumn = {
  Header: string;
  accessor: keyof examTableData;
};

export interface examListData {
  result: {
    content: examTableData[];
  };
}

export interface candidateTableData {
  memberId: number;
  memberNumber: number;
  memberEmail: string;
  memberName: string;
  memberImg: string;
}

export interface Problem {
  problemTitle: string;
  problemContents: string;
  problemDiff: string | null;
  problemInputContents: string;
  problemOutputContents: string;
  testcaseInputs: string[];
  testcaseOutputs: string[];
  testcaseStatus: string[];
}

export interface ExamContents {
  examId: number;
  examTitle: string;
  examContents: string | null;
  examStartDate: string;
  examEndDate: string;
  examStatus: string;
  examType: string;
  examMemo: string;
  examNotice: string;
  examDueTime: string;
  tests: Problem[];
  candidateList: [];
}

export interface ExamResultListContents {
  testId: number;
  memberId: number;
  memberName: string;
  memberNumber: number;
  memberEmail: string;
  totalScore: number;
  examDueTime: string;
  submissionDate: string;
}

export interface ExamResultListData {
  examTitle: string;
  examMemo: string;
  submissionTotal: number;
  content: ExamResultListContents[];

}
