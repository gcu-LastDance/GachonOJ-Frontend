export interface memberData {
  permission: string;
  profileImg?: string;
  rank: number;
  nickname: string;
}

export interface MemberHoverProfileData {
  memberEmail: string;
  memberNickname: string;
  rating: number;
}

export interface memberProbData extends memberData {
  solvedProb: number;
  triedProb: number;
  bookmarkedProb: number;
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
