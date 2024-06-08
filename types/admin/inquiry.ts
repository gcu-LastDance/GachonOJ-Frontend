export interface inquiryListData {
  result: {
    content: inquiryTableData[];
  };
}

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
  accessor: keyof inquiryTableData;
};

export interface inquiryContentsData {
  result: {
    inquiryId: number;
    inquiryTitle: string;
    memberNickname: string;
    inquiryContents: string;
    inquiryCreatedDate: string;
    replyContent: string | null; // replyContent가 null일 수 있으므로 string 또는 null로 지정
  };
}

export interface replyFormData {
  replyContents: string;
}
