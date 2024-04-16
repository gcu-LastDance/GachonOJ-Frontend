export interface inquiryTableData {
  id: number;
  title: string;
  author: string;
  date: string;
  inquiry_status: boolean;
}

// 컬럼 타입 정의
export type inquiryTableColumn = {
  Header: string;
  accessor: keyof inquiryTableData; // 'title', 'author', 또는 'date'
};


export const COLUMNS = [
  {
    Header: "번호",
    accessor: "problem_id",
  },
  {
    Header: "문제 제목",
    accessor: "problem_title",
  },
  {
    Header: "난이도",
    accessor: "problem_diff",
  },
  {
    Header: "상태",
    accessor: "problem_status",
  },
  {
    Header: "채점 수",
    accessor: "submission_num",
  },
  {
    Header: "정답 수",
    accessor: "grading_num",
  },
  {
    Header: "정답자 수",
    accessor: "correct_num",
  },
  {
    Header: "생성일",
    accessor: "created_at",
  },
];
