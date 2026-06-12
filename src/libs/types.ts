type User = {
  id: string;
  name: string;
  gender: string;
  weightClass: string;
  rank?: Rank;
};

type Rank = {
  rank: number;
  exercise: string;
  weight: string;
};

type Message = {
  messageLevel: "info" | "warning" | "error";
  messageText: string;
};
