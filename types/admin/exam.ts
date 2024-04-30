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