/** 메인 공지 테이블 데이터 */
export interface NoticeTableData {
  noticeId: number;
  noticeTitle: string;
  memberNickname: string;
  noticeCreatedDate: string;
}

export interface NoticeDetailData {
  noticeTitle: string;
  noticeCreatedDate: string;
  noticeContents: string;
  memberNickname: string;
}
