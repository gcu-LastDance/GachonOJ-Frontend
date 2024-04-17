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
