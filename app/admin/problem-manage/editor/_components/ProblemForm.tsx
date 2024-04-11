"use client";
import { ProblemFormData } from "@/types/admin";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Page() {
  const { register, handleSubmit } = useForm<ProblemFormData>();

  const onSubmit: SubmitHandler<ProblemFormData> = (data) => {
    console.log(data);
    // 여기서 데이터를 처리하거나 제출합니다.
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-end">
          <button
            type="submit"
            name="register"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mr-4 rounded-lg mt-8"
          >
            등록하기
          </button>
          <button
            type="submit"
            name="save"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-8"
          >
            저장하기
          </button>
        </div>
      <div className="flex flex-wrap mb-4 items-center">
        
        <h2 className="text-2xl font-semibold mb-4 w-full">문제 설정</h2>
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0 flex items-center justify-start">
          <label htmlFor="memory" className="block font-medium mb-1 mr-2">
            메모리 제한
          </label>
          <select
            id="memory"
            {...register("memory")}
            className="w-32 px-3 py-2 border rounded-lg mr-10 focus:outline-none focus:border-blue-500"
          >
            <option value="512">512MB</option>
            <option value="1024">1GB</option>
            <option value="2048">2GB</option>
          </select>
        </div>
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0 flex items-center justify-start">
          <label htmlFor="time" className="block font-medium mb-1 mr-2">
            실행 시간 제한
          </label>
          <select
            id="time"
            name="time"
            {...register("time")}
            className="w-32 px-3 py-2 border rounded-lg mr-10 focus:outline-none focus:border-blue-500"
          >
            <option value="1">1초</option>
            <option value="2">2초</option>
            <option value="3">3초</option>
          </select>
        </div>

        <div className="w-full sm:w-1/3 mb-4 sm:mb-0 flex items-center justify-start">
          <label htmlFor="difficulty" className="block font-medium mb-1 mr-2">
            난이도 설정
          </label>
          <select
            id="difficulty"
            name="difficulty"
            {...register("difficulty")}
            className="w-32 px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          >
            <option value="easy">쉬움</option>
            <option value="medium">보통</option>
            <option value="hard">어려움</option>
          </select>
        </div>
        <div className="w-full sm:w-1/3 mb-4 mt-4 sm:mb-0 flex items-center justify-start">
          <label htmlFor="language" className="block font-medium mb-1 mr-6">
            가능 언어 설정
          </label>
          <div className="flex">
            <input
              type="checkbox"
              id="language-c"
              name="language"
              value="C"
              {...register("language")}
              className="mr-2"
            />
            <label htmlFor="language-c" className="mr-4">
              C
            </label>
            <input
              type="checkbox"
              id="language-cpp"
              name="language"
              value="C++"
              {...register("language")}
              className="mr-2"
            />
            <label htmlFor="language-cpp" className="mr-4">
              C++
            </label>
            <input
              type="checkbox"
              id="language-java"
              name="language"
              value="JAVA"
              {...register("language")}
              className="mr-2"
            />
            <label htmlFor="language-java" className="mr-4">
              JAVA
            </label>
            <input
              type="checkbox"
              id="language-python"
              name="language"
              value="Python"
              {...register("language")}
              className="mr-2"
            />
            <label htmlFor="language-python">Python</label>
          </div>
        </div>
      </div>

      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-semibold mr-4 self-start">문제 제목</h2>
        <input
          type="text"
          {...register("title")}
          className="w-[82.8vw] flex ml-auto px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-semibold mb-4 mr-4 self-start">
          문제 본문
        </h2>
        <textarea
          {...register("content")}
          className="w-[82.8vw] flex ml-auto px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
          rows={8}
        ></textarea>
      </div>
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-semibold mb-4 mr-4 self-start">
          입력 설명
        </h2>
        <textarea
          {...register("inputDescription")}
          className="w-[82.8vw] ml-auto flex px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
          rows={4}
        ></textarea>
      </div>
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-semibold mb-4 mr-4 self-start">
          출력 설명
        </h2>
        <textarea
          {...register("outputDescription")}
          className="w-[82.8vw] ml-auto flex px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 resize-none"
          rows={4}
        ></textarea>
      </div>

      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-semibold mb-4 mr-4 self-start">
          테스트 케이스
        </h2>
        <table className="flex-auto px-3 py-2 border">
          <thead>
            <tr>
              <th className="border text-center ">인덱스</th>
              <th className="border px-4 py-2 text-left">입력</th>
              <th className="border px-4 py-2 text-left">출력</th>
              <th className="border text-center">예제 설정</th>
              <th className="border"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-min border text-center">1</td>
              <td className="border px-4 py-2">입력 데이터</td>
              <td className="border px-4 py-2">출력 데이터</td>
              <td className="border px-2 py-2 text-center">
                <input type="checkbox" className="text-blue-500"></input>
              </td>
              <td className="w-min flex-auto text-center border">
                <button>보기</button>
                <button>수정</button>
                <button>삭제</button>
              </td>
            </tr>
            {/* 다른 테스트 케이스들 */}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-4">
          테스트 케이스 추가
        </button>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          name="register"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-8 mr-8"
        >
          등록하기
        </button>
        <button
          type="submit"
          name="save"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-8"
        >
          저장하기
        </button>
      </div>
    </form>
  );
}
