export interface noticeTableData {
  notice_id: number;
  notice_title: string;
  member_nickname: string;
  notice_created_date: string;
}

// 컬럼 타입 정의
export type noticeTableColumn = {
  Header: string;
  accessor: keyof noticeTableData;
};