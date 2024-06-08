export interface InquiryTableData {
  inquiryId: number;
  inquiryTitle: string;
  inquiryCreatedDate: string;
  inquiryStatus: string;
}

export interface InquiryDetailData {
  inquiryTitle: string;
  inquiryContents: string;
  inquiryCreatedDate: string;
  replyContent: string;
}

export interface InquiryFormData {
  inquiryTitle: string;
  inquiryContents: string;
}
