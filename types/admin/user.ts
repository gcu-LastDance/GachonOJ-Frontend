export interface userTableData {
  id: number;
  email: string;
  name: string;
  member_number: number;
  nickname: string;
  role: string;
  created_date: string;
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