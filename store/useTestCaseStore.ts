import { create } from "zustand";
import { persist } from "zustand/middleware";



interface TestCaseStore {
  testcaseInput: string | null;
  testcaseOutput: string | null;
  testcaseStatus: string | null;
  setTestCase: (
    testcaseInput: string | null,
    testcaseOutput: string | null, 
    testcaseStatus: string | null,
  ) => void;
}

interface checkStore {
  check: boolean | null;
  setCheck: (check: boolean) => void;
}

export const useTestCaseStore = create(
  persist<TestCaseStore>(
    (set) => ({
      testcaseInput: null,
      testcaseOutput: null,
      testcaseStatus: null,

      setTestCase: (testcaseInput, testcaseOutput, testcaseStatus) =>
        set({ testcaseInput, testcaseOutput, testcaseStatus }),
    }),
    {
      name: "testCases",
    }
  )
);

export const useCheckStore = create(
  persist<checkStore>(
    (set) => ({
      check: null,

      setCheck: (check) =>
        set({check}),
    }),
    {
      name: "checkStore",
    }
  )
);