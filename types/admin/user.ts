export interface userTableData {
  // 수정 하지 말것
  memberId: number;
  memberEmail: string;
  memberName: string;
  memberNumber: number;
  memberNickname: string;
  memberRole: string;
  memberCreatedDate: string;
}

export interface userListData {
  // 수정 하지 말것
  result: {
    content: userTableData[];
  };
}

export interface userContentData {
  // 수정 하지 말것
  result: userTableData;
}

// 컬럼 타입 정의
export type userTableColumn = {
  Header: string;
  accessor: keyof userTableData;
};

export interface userFormData {
  memberId: number;
  memberEmail: string;
  memberName: string;
  memberNumber: number;
  memberPassword: string;
  memberPasswordConfirm: string;
  memberNickname: string;
  memberRole: string;
  memberCreatedDate: string;
}

export interface myInfoModifyFormData {
  memberName: string;
  memberNickname: string;
}