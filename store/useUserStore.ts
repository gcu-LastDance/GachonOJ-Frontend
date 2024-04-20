import { permissionType } from "@/types/auth";
import { create } from "zustand";

interface UserState {
  userImg: string | null;
  userPermission: permissionType | null;
  token: string | null;
  setUserImg: (userImg: string | null) => void;
  setUserPermission: (userPermission: permissionType | null) => void;
  setToken: (token: string | null) => void;
  setUser: (
    userImg: string | null,
    userPermission: permissionType | null,
    token: string | null
  ) => void;
  setUserDrop: () => void;
}

const useUserStore = create<UserState>((set) => ({
  userImg: null,
  userPermission: "guest",
  token: null,

  // 사용자 이미지 설정
  setUserImg: (userImg) => set({ userImg }),

  // 사용자 권한 설정
  setUserPermission: (userPermission) => set({ userPermission }),

  // 토큰 설정
  setToken: (token) => set({ token }),

  // 로그인 시 사용자 이미지, 권한, 토큰 설정
  setUser: (userImg, userPermission, token) =>
    set({ userImg, userPermission, token }),

  // 로그아웃 시 모든 상태 초기화
  setUserDrop: () =>
    set({ userImg: null, userPermission: "guest", token: null }),
}));

export default useUserStore;
