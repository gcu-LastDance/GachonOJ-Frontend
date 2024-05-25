import { create } from "zustand";
import { persist } from "zustand/middleware";

export type IdeLODType = "Light" | "Dark";

interface IdeLODState {
  ideLODMode: IdeLODType;
  setIdeLODMode: (lodMode: IdeLODType) => void;
}

export const useIdeLODStore = create(
  persist<IdeLODState>(
    (set) => ({
      ideLODMode: "Light",
      setIdeLODMode: (ideLODMode) => set({ ideLODMode }),
    }),
    {
      name: "IdeLODMode",
    }
  )
);
