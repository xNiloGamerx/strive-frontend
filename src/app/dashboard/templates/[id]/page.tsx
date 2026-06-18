"use client";

import { useTemplates } from "@/features/templates/hooks";
import { Template } from "@/libs/types";
import { useParams } from "next/navigation";

export default function TemplatePage() {
  const params = useParams();
  const { id } = params;
  const { data } = useTemplates();

  const template: Template | undefined = data?.filter(
    (template) => template.id === Number(id),
  )[0];

  return <p>Template {template?.name}</p>;
}
