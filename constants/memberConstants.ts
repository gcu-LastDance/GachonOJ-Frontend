import { permissionType } from "@/types/auth";

export const memberPermisionMap: Record<permissionType, string> = {
  ROLE_STUDENT: "학생",
  ROLE_PROFESSOR: "교수",
  ROLE_ADMIN: "관리자",
};
