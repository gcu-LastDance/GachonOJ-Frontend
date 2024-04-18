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
  email: string;
  name: string;
  stdnum: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
  terms_agree: boolean;
  privacy_agree: boolean;
}
