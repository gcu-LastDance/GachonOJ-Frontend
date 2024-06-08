export interface TodaySubmissionData {
  totalSubmissionCount: number;
  correctSubmissionCount: number;
  incorrectSubmissionCount: number;
}

export interface AiTokenData {
  todayTokenUsage: number;
  totalTokenUsage: number;
}

export interface InquiryList {
  inquiryId: number,
  inquiryTitle: string,
  memberNickname: string,
  inquiryCreatedDate: string,
  inquiryStatus: string
}
