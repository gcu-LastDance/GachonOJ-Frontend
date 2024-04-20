'use client'
import NoticeDetailPage from "./_components/NoticeDetailPage";

export default function page({ params }: { params: { noticeId: number } }) {
  return (
    <div>
      <NoticeDetailPage noticeId={params.noticeId} /> 
    </div>
  );
}
