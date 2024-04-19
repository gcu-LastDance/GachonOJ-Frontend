export type permissionType = "guest" | "member" | "professor" | "admin";

export interface AuthType {
  nickname: string;
  permission: permissionType;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignUpFormData {
  memberEmail: string;
  memberName: string;
  memberNumber: string;
  memberNickname: string;
  memberPassword: string;
  memberPasswordConfirm: string;
}

// terms_agree: boolean;
// privacy_agree: boolean;
