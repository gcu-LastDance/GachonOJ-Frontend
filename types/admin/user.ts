export interface userTableData {
  memberId: number;
  memberEmail: string;
  memberName: string;
  member_number: number;
  memberNickname: string;
  memberRole: string;
  memberCreatedDate: string;
}

export interface userListData {
  result: {
    content: userTableData[];
  };
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
