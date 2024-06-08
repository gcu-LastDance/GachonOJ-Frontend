export interface contestTableData {
  examId: number;
  examTitle: string;
  examMemo: string;
  memberNickname: string;
  examStatus: string;
  examUpdatedDate: string;
  examCreatedDate: string;
}

// 컬럼 타입 정의
export type contestTableColumn = {
  Header: string;
  accessor: keyof contestTableData;
};

export interface contestListData {
  result: {
    content: contestTableData[];
  };
}