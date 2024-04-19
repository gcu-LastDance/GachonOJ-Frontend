export interface adminTableData {
  index: number;
  member_email: string;
  member_name: string;
  member_nickname: string;
  member_role: string;
  member_created_date: string;
}

// 컬럼 타입 정의
export type adminTableColumn = {
  Header: string;
  accessor: keyof adminTableData;
};

export interface adminFormData {
  role: string;
  email: string;
  password: number;
  passwordconfirm: string[];
  name: string;
  nickname: string;
}