import { permissionType } from "@/types/auth";

export const memberPermisionMap: Record<permissionType, string> = {
  guest: "손님",
  member: "사용자",
  professor: "교수",
  admin: "관리자",
};
