import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { examEnrollAPI } from "@/api/admin/adminExamAPI";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import { FaUser } from "react-icons/fa";
import ProblemForm from "./ProblemForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import AddCandidate from "./AddCandidate";
import { ExamProblemFormData } from "@/types/admin/problem";

export default function EnrollExamForm() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const initialData = {
    problemMemoryLimit: 0,
    problemTimeLimit: 0,
    problemDiff: 0,
    problemTitle: "",
    problemContents: "",
    problemInputContents: "",
    problemOutputContents: "",
    problemClass: "",
    problemStatus: "",
    problemPrompt: "",
    questionScore: 10,
    testcases: [],
  };

  const { register, handleSubmit, control } = useForm();
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isAttendanceOpen, setIsAttendanceOpen] = useState(false);
  const [isProblemOpen, setIsProblemOpen] = useState(false);
  const [CandidateValue, setCandidateValue] = useState("");
  const [formCount, setFormCount] = useState(1);
  const [formData, setFormData] = useState<ExamProblemFormData[]>([
    {
      id: 1,
      data: initialData,
    },
  ]);
  const [activeForm, setActiveForm] = useState(1);
  const [showAddCandidate, setShowAddCandidate] = useState(false);
  const [tempValue, setTempValue] = useState("");
  const [candidateList, setCandidateList] = useState<[]>([]);

  const handleAddForm = () => {
    setFormCount(formCount + 1);
    setActiveForm(formCount + 1);
    setFormData([...formData, { id: formCount + 1, data: initialData }]);
  };

  const handleSwitchForm = (id: number) => {
    setActiveForm(id);
  };

  const setProblemForm = (formId: number, data: any) => {
    const updatedFormData = formData.map((form) =>
      form.id === formId ? { ...form, data: data } : form
    );
    setFormData(updatedFormData);
  };

  const deleteProblemForm = (formId: number) => {
    console.log(formId);
    const updatedFormData = formData.filter((form) => form.id !== formId);
    setFormData(updatedFormData);
    setFormCount(formCount - 1);
    handleSwitchForm(formCount - 1);
  };

  const onSubmit = (data: any) => {
    const tests = formData.map((form) => form.data);
    const newData = {
      ...data,
      tests,
      candidateList,
      examStatus: "RESERVATION",
      examType: "EXAM",
    };
    EnrollMutation.mutate(newData);
  };

  const onSave = (data: any) => {
    const tests = formData.map((form) => form.data);
    const newData = {
      ...data,
      tests,
      candidateList,
      examStatus: "WRITING",
      examType: "EXAM",
    };
    EnrollMutation.mutate(newData);
  };

  const EnrollMutation = useMutation({
    mutationFn: (data: any) => examEnrollAPI(data),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        router.push("/admin/exam-manage/list");
      }
    },
  });

  return (
    <form>
      <div className="p-10">
        <div className="flex items-center mb-4">
          <div className="text-xl mr-4 min-w-30 self-start flex-shrink-0">
            시험제목
          </div>
          <textarea
            {...register("examTitle")}
            className="w-full flex ml-auto px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
            rows={2}
          />
        </div>

        <div className="flex items-center mb-4">
          <div className="text-xl mr-4 min-w-30 self-start flex-shrink-0">
            시험메모
          </div>
          <textarea
            {...register("examMemo")}
            className="w-full flex ml-auto px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
            rows={2}
          />
        </div>

        <div className="flex-wrap mb-2">
          <div
            onClick={() => setIsDetailOpen(!isDetailOpen)}
            className="flex items-center cursor-pointer"
          >
            <button type="button" className="text-xl mb-2">
              시험 상세설정
            </button>
            <hr className="flex-grow border-gray-300 ml-4" />
            {isDetailOpen ? (
              <IoIosArrowDown size={24} className="ml-3" />
            ) : (
              <IoIosArrowUp size={24} className="ml-3" />
            )}
          </div>
          {isDetailOpen && (
            <div className="p-10">
              <div className="flex items-center mb-4">
                <div className="flex text-lg mr-4 min-w-30 self-start flex-shrink-0">
                  시험 안내사항
                </div>
                <textarea
                  {...register("examNotice")}
                  className="w-full flex ml-auto px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                  rows={6}
                />
              </div>

              <div className="flex-col items-center mb-6">
                <div className="text-lg mr-4 min-w-30 self-start flex-shrink-0">
                  응시 날짜 설정
                </div>
                <div className="mt-5 mb-5 ml-32 flex flex-auto">
                  <div className="flex mr-5 items-center">
                    <div className="flex-shrink-0 mr-4">
                      시험 시작 가능 날짜 설정
                    </div>
                    <input
                      {...register("examStartDate")}
                      className="border rounded-md w-48 p-1"
                      placeholder="YYYY.MM.DD.HH.MM.SS"
                      title="YYYY.MM.DD.HH.MM.SS 형식으로 입력해주세요."
                    ></input>
                  </div>
                  <div className="border-l-2"></div>
                  <div className="flex ml-5 items-center">
                    <div className="flex-shrink-0 mr-4">
                      시험 종료 날짜 설정
                    </div>
                    <input
                      {...register("examEndDate")}
                      className="border rounded-md w-48 p-1"
                      placeholder="YYYY.MM.DD.HH.MM.SS"
                      title="YYYY.MM.DD.HH.MM.SS 형식으로 입력해주세요."
                    ></input>
                  </div>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <div className="flex text-lg mr-4 min-w-30 flex-shrink-0">
                  시험 제한 시간
                </div>
                <input
                  {...register("examDueTime")}
                  className="border rounded-md w-24 p-1"
                  placeholder="120"
                  title="분 단위로 입력해주세요."
                ></input>
              </div>
            </div>
          )}
        </div>

        <div className="flex-wrap">
          <div
            onClick={() => setIsAttendanceOpen(!isAttendanceOpen)}
            className="flex items-center cursor-pointer"
          >
            <button type="button" className="text-xl mb-2">
              시험 응시인원 관리
            </button>
            <hr className="flex-grow border-gray-300 ml-4" />
            {isAttendanceOpen ? (
              <IoIosArrowDown size={24} className="ml-3" />
            ) : (
              <IoIosArrowUp size={24} className="ml-3" />
            )}
          </div>
          {isAttendanceOpen && (
            <div className="p-10">
              <div>
                <div className="flex items-center mb-4">
                  <div className="text-lg mr-4 min-w-30 flex-shrink-0">
                    응시자 추가하기
                  </div>

                  <div className="flex items-center border-b-4 rounded-sm">
                    <FaUser />
                    <input
                      className="w-72 p-1 ml-2"
                      placeholder="이메일 혹은 학번을 입력해주세요."
                      onChange={(e) => setTempValue(e.target.value)}
                    />
                  </div>
                  <button
                    onClick={() => {
                      setShowAddCandidate(true);
                      setCandidateValue(tempValue);
                      queryClient.invalidateQueries({
                        queryKey: ["candidateList"],
                      });
                    }}
                    type="button"
                    className="ml-2 px-3 py-1 border rounded-lg bg-semiGrey hover:bg-semiSemiGrey"
                  >
                    검색하기
                  </button>
                </div>
                <div className="flex-col w-fit border rounded-lg bg-semiGrey">
                  {showAddCandidate && (
                    <AddCandidate
                      memberInfo={CandidateValue}
                      candidateList={candidateList}
                      setCandidateList={setCandidateList}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex-wrap">
          <div
            onClick={() => setIsProblemOpen(!isProblemOpen)}
            className="flex items-center cursor-pointer"
          >
            <button type="button" className="text-xl mb-2">
              시험 문제 등록
            </button>
            <hr className="flex-grow border-gray-300 ml-4" />
            {isProblemOpen ? (
              <IoIosArrowDown size={24} className="ml-3" />
            ) : (
              <IoIosArrowUp size={24} className="ml-3" />
            )}
          </div>
          {isProblemOpen && (
            <div className="p-10">
              <div>
                {Array.from({ length: formCount }, (_, i) => i + 1).map(
                  (id) => (
                    <button
                      type="button"
                      className={`border rounded-md mr-2 p-2 ${
                        activeForm === id ? "bg-blue-500 text-white" : ""
                      }`}
                      onClick={() => handleSwitchForm(id)}
                    >
                      {id}
                    </button>
                  )
                )}
                <button
                  type="button"
                  className="border rounded-md p-2"
                  onClick={handleAddForm}
                >
                  +
                </button>
              </div>
              <ProblemForm
                data={formData[activeForm - 1] || null}
                setProblemForm={setProblemForm}
                deleteProblemForm={deleteProblemForm}
              />
            </div>
          )}
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          등록
        </button>
        <button
          onClick={handleSubmit(onSave)}
          type="submit"
          className="bg-blue-500 ml-5 text-white py-2 px-4 rounded"
        >
          저장
        </button>
      </div>
    </form>
  );
}
