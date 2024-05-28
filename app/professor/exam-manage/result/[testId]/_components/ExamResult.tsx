import { examResultAPI } from "@/api/admin/adminExamAPI";
import CodeViewer from "@/app/admin/_components/CodeViewer";
import { ExamResultContent } from "@/types/admin/exam";
import { useQuery } from "@tanstack/react-query";

export default function ExamResult({ testId }: { testId: number }) {
  const { data, isFetching } = useQuery<ExamResultContent>({
    queryKey: ["professorExamResult"],
    queryFn: () => examResultAPI(testId),
  });

  const questions = data?.examQuestions;

  if (!isFetching)
    return (
      <div>
        <div className="flex justify-between px-20 mb-10">
          <div className="flex items-center space-x-5">
            <div className="text-2xl text-realGrey font-PretendardBold">
              시험 제목
            </div>
            <div>{data?.examTitle}</div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="text-2xl text-realGrey font-PretendardBold">
              시험 메모
            </div>
            <div>{data?.examMemo}</div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="text-2xl text-realGrey font-PretendardBold">
              제출 인원
            </div>
            <div>{data?.submissionTotal}</div>
          </div>
        </div>
        <div className="flex justify-between px-20 mb-10">
          <div className="flex items-center space-x-5">
            <div className="text-2xl text-realGrey font-PretendardBold">
              이름
            </div>
            <div>{data?.memberName}</div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="text-2xl text-realGrey font-PretendardBold">
              학번
            </div>
            <div>{data?.memberNumber}</div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="text-2xl text-realGrey font-PretendardBold">
              이메일
            </div>
            <div>{data?.memberEmail}</div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="text-2xl text-realGrey font-PretendardBold">
              총점
            </div>
            <div>{data?.testTotalScore}</div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="text-2xl text-realGrey font-PretendardBold">
              소요시간
            </div>
            <div>{data?.testDueTime}</div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="text-2xl text-realGrey font-PretendardBold">
              제출일시
            </div>
            <div>{data?.submissionDate}</div>
          </div>
        </div>
        <div className="px-20">
          {questions?.map((question, index) => (
            <CodeViewer
              id={index}
              title={question?.problemTitle}
              score={question?.questionScore}
              status={question?.submissionStatus}
              code={question?.submissionCode}
            />
          ))}
        </div>
      </div>
    );
}
