"use client";

import useSWR from "swr";
import { usersApi } from "./api";
import type { User } from "@/libs/types";

export const useUsers = () => {
  return useSWR<User[]>("/users", usersApi.getAll);
};
