import { problemSolutionExcuteAPI } from "@/api/problemAPI";
import { useMutation } from "@tanstack/react-query";

export function useProblemSolutionExecute() {
  return useMutation({
    mutationFn: problemSolutionExcuteAPI,
    onError: (error) => {
      console.error("문제 해결 실행 중 오류 발생:", error);
    },
    onSuccess: (data) => {
      console.log(data);
      if (data.success) {
        alert("코드 실행 성공");
      } else {
        alert("코드 실행 실패");
      }
    },
  });
}
