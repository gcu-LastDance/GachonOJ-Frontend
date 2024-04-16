export interface adminTableData {
  notice_id: number;
  notice_title: string;
  member_nickname: string;
  notice_created_date: string;
}

// 컬럼 타입 정의
export type adminTableColumn = {
  Header: string;
  accessor: keyof adminTableData;
};