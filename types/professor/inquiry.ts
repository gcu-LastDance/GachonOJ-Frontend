export interface inquiryListData {
  result: {
    content: inquiryTableData[];
  };
}

export interface inquiryTableData {
  inquiryId: number;
  inquiryTitle: string;
  
  inquiryCreatedDate: string;
  inquiryStatus: string;
}

export interface InquiryFormData {
  inquiryTitle: string;
  inquiryContents: string;
}


export type inquiryTableColumn = {
  Header: string;
  accessor: keyof inquiryTableData;
};

export interface inquiryContentsData {
  result: {
    inquiryId: number;
    inquiryTitle: string;
    inquiryContents: string;
    inquiryCreatedDate: string;
    replyContent: string | null; // replyContent가 null일 수 있으므로 string 또는 null로 지정
  };
}

export interface replyFormData {
  replyContents: string;
}
