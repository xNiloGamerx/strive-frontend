import { User } from "@/libs/types";
import { apiClient } from "./apiClient";

export const getUsers = () => apiClient.get<User[]>("/users");

export const createUser = (data: any) => apiClient.post("/users", data);
