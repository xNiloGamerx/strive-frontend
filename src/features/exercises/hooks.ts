"use client";

import useSWR from "swr";
import { exercisesApi } from "./api";
import type { Exercise } from "@/libs/types";

export const useExercises = () => {
  return useSWR<Exercise[]>("/exercises", exercisesApi.getAll);
};
