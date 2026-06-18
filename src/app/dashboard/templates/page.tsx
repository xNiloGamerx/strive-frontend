"use client";

import { useTemplates } from "@/features/templates/hooks";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default function TemplatesPage() {
  const { data } = useTemplates();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <h1 className="font-bold text-2xl">Vorlagen</h1>
          <button
            type="button"
            className="flex items-center gap-1 bg-black dark:bg-white border border-[#292626] shadow-[inset_0_0_20px_rgba(255,255,255,0.3)] rounded-2xl px-3 py-2 text-white dark:text-black cursor-pointer hover:opacity-90 active:opacity-80"
          >
            <PlusIcon width={18} height={18} />
            <p className="text-sm">Neu</p>
          </button>
        </div>
        <div className="flex gap-2 flex-wrap">
          {data?.map((template) => (
            <Link
              key={template.id}
              href={`/dashboard/templates/${template.id}`}
              className="flex flex-col flex-1 gap-2 min-w-50 max-w-70 h-50 p-4 bg-white dark:bg-black rounded-md cursor-pointer transition-[scale] hover:scale-102 group"
            >
              <div className="flex flex-col flex-1">
                <h3 className="text-lg font-bold text-black dark:text-white">
                  {template.name}
                </h3>
                <p className="text-gray-400">{template.description}</p>
              </div>
              <p className="mt-2">{template.exercises.length} Übungen</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
