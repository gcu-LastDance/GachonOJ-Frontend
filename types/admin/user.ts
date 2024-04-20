export interface userTableData {
  index: number;
  member_email: string;
  member_name: string;
  member_nickname: string;
  member_role: string;
  member_created_date: string;
}

// 컬럼 타입 정의
export type userTableColumn = {
  Header: string;
  accessor: keyof userTableData;
};

export interface userFormData {
  role: string;
  email: string;
  password: number;
  passwordconfirm: string;
  name: string;
  nickname: string;
  user_number: number;
  member_number: number;
}