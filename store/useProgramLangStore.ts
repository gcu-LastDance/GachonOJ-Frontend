import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProgramLangState {
  programLang: string | null;
  setProgramLang: (programLang: string | null) => void;
}

export const useProgramLangStore = create(
  persist<ProgramLangState>(
    (set) => ({
      programLang: null,
      setProgramLang: (programLang) => set({ programLang }),
    }),
    {
      name: "programLang",
    }
  )
);
