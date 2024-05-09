import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { findCandidateAPI } from "@/api/admin/adminExamAPI";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUser } from "react-icons/fa";
export default function EnrollTestForm() {
  const { register, handleSubmit, control } = useForm();
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isAttendanceOpen, setIsAttendanceOpen] = useState(false);

  return (
    <form>
      <div className="p-10">
        <div className="flex items-center mb-4">
          <div className="text-lg mr-4 min-w-30 self-start flex-shrink-0">
            시험제목
          </div>
          <textarea
            {...register("examTitle")}
            className="w-full flex ml-auto px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
            rows={2}
          />
        </div>

        <div className="flex items-center mb-4">
          <div className="text-lg mr-4 min-w-30 self-start flex-shrink-0">
            시험메모
          </div>
          <textarea
            {...register("examMemo")}
            className="w-full flex ml-auto px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
            rows={2}
          />
        </div>

        <div className="flex-wrap">
          <div
            onClick={() => setIsDetailOpen(!isDetailOpen)}
            className="flex items-center cursor-pointer"
          >
            <button type="button" className="text-lg mb-2">
              시험 상세설정
            </button>
            <hr className="flex-grow border-gray-300 ml-4" />
            <IoMdArrowDropdown size={24} />
          </div>
          {isDetailOpen && (
            <div className="p-10">
              <div className="flex items-center mb-4">
                <div className="flex text-lg mr-4 min-w-30 self-start flex-shrink-0">
                  시험 안내사항
                </div>
                <textarea
                  {...register("examInstructions")}
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

              <div className="flex-col items-center mb-4">
                <div className="text-lg mr-4 min-w-30 flex-shrink-0">
                  부정 행위 방지 설정
                </div>
                <div className="mt-5 mb-5 ml-32 flex flex-auto">
                  <div className="flex mr-5 items-center">
                    <div className="flex-shrink-0 mr-4">모니터링 여부 설정</div>
                    <select
                      {...register("monitoring")}
                      className="border rounded-md w-24 p-1"
                    >
                      <option value="사용">사용</option>
                      <option value="미사용">미사용</option>
                    </select>
                  </div>
                  <div className="border-l-2"></div>
                  <div className="flex ml-5 items-center">
                    <div className="flex-shrink-0 mr-4">복사/붙혀넣기 제한</div>
                    <select
                      {...register("copypasteRestriction")}
                      className="border rounded-md w-24 p-1"
                    >
                      <option value="금지" selected>
                        금지
                      </option>
                      <option value="허용">허용</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex-wrap">
          <div
            onClick={() => setIsAttendanceOpen(!isAttendanceOpen)}
            className="flex items-center cursor-pointer"
          >
            <button type="button" className="text-lg mb-2">
              응시 인원 관리
            </button>
            <hr className="flex-grow border-gray-300 ml-4" />
            <IoMdArrowDropdown size={24} />
          </div>
          {isAttendanceOpen && (
            <div className="p-10">
              <div className="flex items-center mb-4">
                <div className="text-lg mr-4 min-w-30 flex-shrink-0">
                  응시자 추가하기
                </div>
                <div className="flex items-center border-b-4 rounded-sm">
                  <FaUser />
                  <input
                    className="w-72 p-1 ml-2"
                    placeholder="이메일 혹은 학번을 입력해주세요."
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          제출
        </button>
      </div>
    </form>
  );
}
