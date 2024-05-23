import { examResultAPI } from "@/api/admin/adminExamAPI";
import { ExamResultContent } from "@/types/admin/exam";
import { useQuery } from "@tanstack/react-query";

export default function ExamResult({ testId }: { testId: number }) {
  const { data } = useQuery<ExamResultContent>({
    queryKey: ["examResult"],
    queryFn: () => examResultAPI(testId),
  });
  return <div></div>;
}
