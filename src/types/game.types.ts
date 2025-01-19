export type GameStatus =
  | "active"
  | "waiting"
  | "paused"
  | "error"
  | "complete"
  | "seeding"
  | "removed";

export type GameShop = "steam" | "epic";

export interface UnlockedAchievement {
  name: string;
  unlockTime: number;
}

export interface SteamAchievement {
  name: string;
  displayName: string;
  description?: string;
  icon: string;
  icongray: string;
  hidden: boolean;
  points?: number;
}

export interface UserAchievement extends SteamAchievement {
  unlocked: boolean;
  unlockTime: number | null;
}
