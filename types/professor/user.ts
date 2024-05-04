export interface userFormData {
  memberEmail: string;
  memberName: string;
  memberNumber: string;
  memberNickname: string;
  memberImg?: string;
}

export interface myInfoModifyFormData {
  memberName: string;
  memberNickname: string;
  memberImg: File | null;
}

export interface userContentData {
  result: userFormData;
}