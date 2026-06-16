import type { Template } from "@/libs/types";
import { apiClient } from "./apiClient";

export const getTemplates = () => apiClient.get<Template[]>("/templates");
