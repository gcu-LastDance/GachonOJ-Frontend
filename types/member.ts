import { rank } from "./rank";

export interface memberData {
  permission?: string;
  profileImg?: string;
  rating: rank;
  memberNickname: string;
}

export interface memberProbInfoData extends memberData {
  solvedProblemCount: number;
  tryProblemCount: number;
  bookmarkedProblemCount: number;
}

export interface memberTestInfoData extends memberData {
  memberName: string;
  memberNumber: string;
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

export interface RankingTableData {
  memberId: number;
  memberNickname: string;
  rating: rank;
  memberRank: number;
  memberSolved: number;
}
export interface RatingData {
  currentExp: number;
  nextExp: number;
  consecutiveSolvedDate: number;
}