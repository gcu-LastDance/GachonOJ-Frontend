import { rank } from "./rank";

export interface memberData {
  permission?: string;
  profileImg?: string;
  rating: rank;
  memberNickname: string;
}

export interface MemberProfileData {
  profileImg?: string;
  rating: rank;
  memberNickname: string;
  memberIntroduction?: string;
}

export interface MemberHoverProfileData {
  memberEmail: string;
  memberNickname: string;
  rating: number;
}

export interface memberProbData extends memberData {
  solvedProblemCount: number;
  tryProblemCount: number;
  bookmarkedProblemCount: number;
}

export interface RankingTableData {
  id: number;
  nickname: string;
  rank: number;
  rankExp: number;
  solvedProb: number;
}

type RankingTableColumnAccesor = Omit<RankingTableData, "id">;

export interface RankingTableColumn {
  Header: string;
  accessor: keyof RankingTableColumnAccesor;
  Cell?: (props: { value: any }) => React.ReactNode;
}

export interface RatingData {
  currentExp: number;
  nextExp: number;
  consecutiveSolvedDate: number;
}
