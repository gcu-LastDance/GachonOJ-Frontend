export type permissionType = "guest" | "member" | "professor" | "admin";

export interface AuthType {
  nickname: string;
  permission: permissionType;
}

export interface LoginFormData {
  memberEmail: string;
  memberPassword: string;
}

export interface SignUpFormData {
  memberEmail: string;
  emailCode: string;
  memberName: string;
  memberNumber: string;
  memberNickname: string;
  memberPassword: string;
  memberPasswordConfirm: string;
}

export interface SignUpData {
  memberEmail: string;
  memberName: string;
  memberNumber: string;
  memberNickname: string;
  memberPassword: string;
  memberPasswordConfirm: string;
}
