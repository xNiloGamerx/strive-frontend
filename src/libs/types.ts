import { ReactElement } from "react";

export type User = {
  id: string;
  name: string;
  gender: string;
  weightClass: string;
  rank?: Rank;
};

export type Exercise = {
  id: number;
  name: string;
  category: string;
};

export type Template = {
  id: number;
  name: string;
  exercises: Exercise[];
};

export type Set = {
  id: number;
  exersice: Exercise;
  weight: string;
  reps: number;
};

export type Workout = {
  id: number;
  user: User;
  template: Template;
  startTime: string;
  endTime: string;
  sets: Set[];
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

export type Log = {
  user: User;
  date: string;
  time: string;
  exercise: string;
  weight: string;
};

export type MultiToggleOption = {
  label: string;
  icon?: ReactElement;
};
