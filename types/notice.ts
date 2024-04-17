export interface MainTableData {
  id: number;
  title: string;
  author: string;
  date: string;
}

// 컬럼 타입 정의
export type MainTableColumn = {
  Header: string;
  accessor: keyof MainTableData; // 'title', 'author', 또는 'date'
};

