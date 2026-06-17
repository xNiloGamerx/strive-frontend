import { User, Workout } from "@/libs/types";
import { apiClient } from "./apiClient";

export const getWorkouts = () => apiClient.get<Workout[]>("/workouts");
