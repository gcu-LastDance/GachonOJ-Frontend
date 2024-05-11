"use client";
import { ProblemFormData, TestCase } from "@/types/admin/problem";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useCheckStore, useTestCaseStore } from "@/store/useTestCaseStore";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function ProblemForm({
  data,
  setProblemForm,
}: {
  data: ProblemFormData;
  setProblemForm: any;
}) {
  const router = useRouter();
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [TestCaseList, setTestCases] = useState<TestCase[]>(
    data.testcases || []
  );
  const { testcaseInput, testcaseOutput, testcaseStatus, setTestCase } =
    useTestCaseStore();
  const { check, setCheck } = useCheckStore();
  const { register, handleSubmit, control, reset } = useForm();

  console.log(data);
  useEffect(() => {
    setTestCases([]);
    setTestCase(null, null, null);
    reset(); // 새로운 폼을 추가할 때 이전 폼의 값을 초기화
  }, [data.id]);

  const onSubmit = (formData: ProblemFormData) => {
    const formDataWithTestcases = {
      ...formData,
      testcases: TestCaseList,
    };
    setProblemForm(data.id, formDataWithTestcases);
  };
  const addOrEditTestCase = () => {
    const newTestCase = {
      testcaseInput: testcaseInput,
      testcaseOutput: testcaseOutput,
      testcaseStatus: testcaseStatus,
    };
    // 테스트케이스 수정 및 추가 함수
    if (editingIndex !== null) {
      const updatedTestCases = [...TestCaseList];
      updatedTestCases[editingIndex] = newTestCase;
      setTestCases(updatedTestCases);
    } else {
      setTestCases([...TestCaseList, newTestCase]);
    }
    setEditingIndex(null);
    setCheck(false);
  };

  // 페이지 렌더링시 최초 1회 테스트케이스 관련 변수 전체 초기화
  useEffect(() => {
    setTestCases([]);
    setTestCase(null, null, null);
  }, []);

  // 페이지 렌더링시 전역변수 값 변화 있을시 테스트케이스 추가 혹은 수정
  useEffect(() => {
    if (testcaseInput && testcaseOutput && check == true) {
      addOrEditTestCase();
    }
  }, [check]);

  // 체크박스 변경시 작동 함수

  const handleCheckboxChange = (index: number) => {
    const updatedTestCases = [...TestCaseList];
    updatedTestCases[index].testcaseStatus =
      updatedTestCases[index].testcaseStatus === "VISIBLE"
        ? "INVISIBLE"
        : "VISIBLE";
    setTestCases(updatedTestCases);
  };

  const EnrollTestCase = () => {
    setEditingIndex(null);
    setTestCase(null, null, null);
  };

  // 수정 함수
  const ModifyTestcase = (index: number) => {
    setEditingIndex(index);
    setTestCase(
      TestCaseList[index].testcaseInput,
      TestCaseList[index].testcaseOutput,
      TestCaseList[index].testcaseStatus
    );

    router.push("/admin/problem-manage/enroll/editor/testcase");
  };

  const DeleteTestcase = (index: number) => {
    setTestCases((prevTestcases) => {
      const updatedTestcases = [...prevTestcases];
      updatedTestcases.splice(index, 1);
      return updatedTestcases;
    });
  };
  return (
    <form>
      <div className="flex flex-wrap mb-4 items-center">
        <div className="text-2xl font-PretendardBold mb-4 w-full">
          문제 설정
        </div>
        <div className="w-1/3 text-lg flex items-center justify-start">
          <label className="block font-medium mb-1 mr-8">메모리 제한</label>
          <select
            {...register("problemMemoryLimit")}
            className="w-32 px-3 py-2 border rounded-lg mr-10 focus:outline-none focus:border-blue-500"
          >
            <option value="128">128MB</option>
            <option value="256">256MB</option>
            <option value="512">512MB</option>
            <option value="1024">1GB</option>
            <option value="2048">2GB</option>
          </select>
        </div>
        <div className="w-1/3 text-lg flex items-center justify-start">
          <label className="block font-medium mb-1 mr-8">실행 시간 제한</label>
          <select
            {...register("problemTimeLimit")}
            className="w-32 px-3 py-2 border rounded-lg mr-10 focus:outline-none focus:border-blue-500"
          >
            <option value="1">1초</option>
            <option value="2">2초</option>
            <option value="3">3초</option>
          </select>
        </div>

        <div className="w-1/3 flex text-lg items-center justify-start">
          <label className="block font-medium mb-1 mr-8">난이도 설정</label>
          <select
            {...register("problemDifficulty")}
            className="w-32 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="1">매우 쉬움</option>
            <option value="2">쉬움</option>
            <option value="3">보통</option>
            <option value="4">어려움</option>
            <option value="5">매우 어려움</option>
          </select>
        </div>
        <div className="w-1/3 mt-4 flex text-lg items-center justify-start">
          <label htmlFor="difficulty" className="block font-medium mb-1 mr-8">
            분류
          </label>
          <select
            {...register("problemClass")}
            className="w-32 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="BINARY_SEARCH">이분 탐색</option>
            <option value="GRAPH">그래프</option>
            <option value="DYNAMIC_PROGRAMMING">동적 계획법</option>
            <option value="GREEDY">그리디</option>
            <option value="BRUTE_FORCE">완전 탐색</option>
            <option value="IMPLEMENTATION">구현</option>
            <option value="STRING">문자열</option>
            <option value="MATH">수학</option>
            <option value="SORT">정렬</option>
            <option value="DATA_STRUCTURE">자료 구조</option>
            <option value="DFS_BFS">DFS/BFS</option>
            <option value="TWO_POINTER">투 포인터</option>
            <option value="BACKTRACKING">백트래킹</option>
            <option value="SIMULATION">시뮬레이션</option>
            <option value="SHORT_PATH">최단 경로</option>
            <option value="TREE">트리</option>
            <option value="HASH">해시</option>
            <option value="ETC">기타</option>
          </select>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <div className="text-lg mr-4 min-w-30 self-start flex-shrink-0">
          문제 제목
        </div>
        <input
          type="text"
          {...register("problemTitle")}
          defaultValue={data.data?.problemTitle || ""}
          className="w-full flex ml-auto px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex items-center mb-4">
        <div className="text-lg mb-4 mr-4 min-w-20 self-start flex-shrink-0">
          문제 본문
        </div>
        <textarea
          {...register("problemContents")}
          defaultValue={data?.data?.problemContents || ""}
          className="w-full flex ml-auto px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
          rows={8}
        ></textarea>
      </div>
      <div className="flex items-center mb-4">
        <div className="text-lg mb-4 mr-4 min-w-20 self-start flex-shrink-0">
          입력 설명
        </div>
        <textarea
          {...register("problemInputContents")}
          defaultValue={data.data?.problemInputContents || ""}
          className="w-full ml-auto flex px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
          rows={4}
        ></textarea>
      </div>
      <div className="flex items-center mb-4">
        <div className="text-lg mb-4 mr-4 min-w-20 self-start flex-shrink-0">
          출력 설명
        </div>
        <textarea
          {...register("problemOutputContents")}
          defaultValue={data.data?.problemOutputContents || ""}
          className="w-full ml-auto flex px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
          rows={4}
        ></textarea>
      </div>
      <div className="flex items-center mb-4">
        <div className="text-lg mb-4 mr-4 min-w-20 self-start flex-shrink-0">
          프롬프트
        </div>
        <textarea
          {...register("problemPrompt")}
          defaultValue={data.data?.problemPrompt || ""}
          className="w-full ml-auto flex px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
          rows={4}
        ></textarea>
      </div>

      <div className="flex items-center mb-4">
        <div className="text-lg mb-4 mr-4 self-start">테스트 케이스</div>
        <table className="flex-auto px-3 py-2 border">
          <thead>
            <tr>
              <th className="border text-center ">인덱스</th>
              <th className="border px-4 py-2 text-left">입력</th>
              <th className="border px-4 py-2 text-left">출력</th>
              <th className="border text-center">예제 설정</th>
              <th className="border">설정</th>
            </tr>
          </thead>
          <tbody>
            {TestCaseList.map((testCase, index) => (
              <tr key={index}>
                <td className="w-min border text-center">{index + 1}</td>
                <td className="border px-4 py-2">{testCase.testcaseInput}</td>
                <td className="border px-4 py-2">{testCase.testcaseOutput}</td>
                <td className="border px-2 py-2 text-center">
                  <input
                    type="checkbox"
                    className="text-blue-500"
                    checked={testCase.testcaseStatus === "VISIBLE"}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                <td className="flex-auto text-center border">
                  <button
                    onClick={() => ModifyTestcase(index)}
                    type="button"
                    className="underline underline-offset-auto pr-2"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => DeleteTestcase(index)}
                    type="button"
                    className="underline underline-offset-auto pl-2"
                  >
                    삭제
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end">
        <Link href="/admin/exam-manage/enroll/testcase">
          <button
            onClick={() => EnrollTestCase()}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4"
          >
            테스트 케이스 추가
          </button>
        </Link>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleSubmit(onSubmit)}
          type="button"
          className="bg-blue-500 hover:bg-blue-600 text-white  py-2 px-4 rounded-lg mt-8"
        >
          저장하기
        </button>
      </div>
    </form>
  );
}
