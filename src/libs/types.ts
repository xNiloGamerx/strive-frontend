export type User = {
  id: string;
  name: string;
  gender: string;
  weightClass: string;
  rank?: Rank;
};

export type Rank = {
  rank: number;
  exercise: string;
  weight: string;
};

export type Message = {
  messageLevel: "info" | "warning" | "error";
  messageText: string;
};

export type ProgressData = {
  day: string;
  weight: number;
};
