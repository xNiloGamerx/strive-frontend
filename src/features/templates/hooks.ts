"use client";

import useSWR from "swr";
import { templatesApi } from "./api";
import type { Template } from "@/libs/types";

export const useTemplates = () => {
  return useSWR<Template[]>("/templates", templatesApi.getAll);
};
