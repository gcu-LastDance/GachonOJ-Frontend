import { permissionType } from "@/types/auth";
import { create } from "zustand";
import { persist } from "zustand/middleware";
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

const useUserStore = create(
  persist<UserState>(
    (set) => ({
      userImg: null,
      userPermission: null,
      token: null,

      setUserImg: (userImg) => set({ userImg }),
      setUserPermission: (userPermission) => set({ userPermission }),
      setToken: (token) => set({ token }),
      setUser: (userImg, userPermission, token) =>
        set({ userImg, userPermission, token }),
      setUserDrop: () =>
        set({ userImg: null, userPermission: null, token: null }),
    }),
    {
      name: "user", // 스토리지에 저장될 때 사용될 키
    }
  )
);

export default useUserStore;
