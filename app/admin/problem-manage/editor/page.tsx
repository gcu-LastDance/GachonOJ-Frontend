"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function page() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // 여기서 데이터를 처리하거나 제출합니다.
  };

  return (
    <div className="mt-10 ml-10 mr-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap mb-4 items-center">
          <h2 className="text-2xl font-semibold mb-4 w-full">문제 설정</h2>
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0 flex items-center justify-start">
            <label htmlFor="memory" className="block font-medium mb-1 mr-2">
              메모리 제한
            </label>
            <select
              id="memory"
              name="memory"
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
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0 flex items-center justify-start">
            <label htmlFor="language" className="block font-medium mb-1 mr-2">
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

        <h2 className="text-2xl font-semibold mb-4">문제 제목</h2>
        <input
          type="text"
          {...register("title")}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="문제 제목을 입력하세요"
        />
        <h2 className="text-2xl font-semibold mb-4 mt-8">문제 본문</h2>
        <textarea
          {...register("content")}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          rows="6"
          placeholder="문제 본문을 입력하세요"
        ></textarea>
        <h2 className="text-2xl font-semibold mb-4 mt-8">입력 설명</h2>
        <textarea
          {...register("inputDescription")}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          rows="4"
          placeholder="입력 설명을 입력하세요"
        ></textarea>
        <h2 className="text-2xl font-semibold mb-4 mt-8">출력 설명</h2>
        <textarea
          {...register("outputDescription")}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          rows="4"
          placeholder="출력 설명을 입력하세요"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mt-8"
        >
          제출
        </button>
      </form>
    </div>
  );
}
