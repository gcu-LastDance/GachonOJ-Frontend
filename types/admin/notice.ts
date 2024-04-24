export interface noticeTableData {
  noticeId: number;
  noticeTitle: string;
  memberNickname: string;
  noticeCreatedDate: string;
}

export interface noticeListData {
  result: {
    content: noticeTableData[];
  };
}

// 컬럼 타입 정의
export type noticeTableColumn = {
  Header: string;
  accessor: keyof noticeTableData;
};
export interface noticeFormData {
  noticeTitle: string;
  noticeCreatedDate: string;
  noticeContents: string;
}

export interface noticeContentsData {
  result: 
    noticeFormData & { memberNickname: string };
  
}

