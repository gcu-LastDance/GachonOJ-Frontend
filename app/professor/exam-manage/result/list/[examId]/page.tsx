import ExamResultList from "./_components/ExamResultList";

export default function page({ params }: { params: { examId: number } }) {
  return (
    <div>
      <ExamResultList examId={params.examId} /> 
    </div>
  );
}
