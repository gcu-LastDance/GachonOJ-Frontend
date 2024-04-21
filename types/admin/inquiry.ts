export interface inquiryTableData {
  inquiryId: number;
  inquiryTitle: string;
  memberNickname: string;
  inquiryCreatedDate: string;
  inquiryStatus: string;
}

// 컬럼 타입 정의
export type inquiryTableColumn = {
  Header: string;
  accessor: keyof inquiryTableData; // 'title', 'author', 또는 'date'

};

export interface inquiryContentsData {
  result: {
    inquiryId: number;
    inquiryTitle: string;
    memberNickname: string;
    inquiryContent: string;
    inquiryCreatedDate: string;
    replyContent: string | null; // replyContent가 null일 수 있으므로 string 또는 null로 지정
  };
}