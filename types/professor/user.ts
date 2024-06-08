export interface userFormData {
  memberEmail: string;
  memberName: string;
  memberNumber: string;
  memberNickname: string;
  memberImg: string | File | null;
}

export interface myInfoModifyFormData {
  memberName: string;
  memberNickname: string;
  memberImg: File | string | null;
}

export interface userContentData {
  result: userFormData;
}