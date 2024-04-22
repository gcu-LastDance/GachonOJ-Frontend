import { ColumnDef } from "@tanstack/react-table";

export default function columnHelper<T>(
  key: keyof T,
  config: {
    header: string;
    cell?: (value: T[keyof T]) => React.ReactNode; // 셀 커스터마이징을 위한 옵셔널 파라미터 추가
  }
): ColumnDef<T, any> {
  return {
    id: key.toString(),
    header: config.header,
    cell: config.cell
      ? (info) => config.cell!(info.row.original[key])
      : (info) => info.row.original[key], // info 객체를 사용하여 접근하도록 변경
  };
}