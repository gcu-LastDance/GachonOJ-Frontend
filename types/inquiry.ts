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
  replyContents: string;
}
