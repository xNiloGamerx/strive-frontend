import type { Exercise } from "@/libs/types";
import { apiClient } from "./apiClient";

export const getExercises = () => apiClient.get<Exercise[]>("/exercises");
