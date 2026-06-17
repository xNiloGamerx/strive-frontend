"use client";

import useSWR from "swr";
import { workoutsApi } from "./api";
import type { Workout } from "@/libs/types";

export const useWorkouts = () => {
  return useSWR<Workout[]>("/workouts", workoutsApi.getAll);
};
