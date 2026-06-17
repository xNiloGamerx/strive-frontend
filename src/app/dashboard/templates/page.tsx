"use client";

import { useTemplates } from "@/features/templates/hooks";

export default function TemplatesPage() {
  const { data } = useTemplates();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-2xl">Vorlagen</h1>
        </div>
        <div className="flex gap-2 flex-wrap">
          {data?.map((template) => (
            <div
              key={template.id}
              className="flex flex-col flex-1 px-4 py-2 bg-white dark:bg-black rounded-md"
            >
              <h3 className="text-lg font-bold">{template.name}</h3>
              <p>{template.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
