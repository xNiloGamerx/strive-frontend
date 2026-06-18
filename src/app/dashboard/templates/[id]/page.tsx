"use client";

import { useTemplates } from "@/features/templates/hooks";
import { Template } from "@/libs/types";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function TemplatePage() {
  const params = useParams();
  const { id } = params;
  const { data } = useTemplates();

  const template: Template | undefined = data?.filter(
    (template) => template.id === Number(id),
  )[0];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <Link
            href="/dashboard/templates"
            title="Gehe zu Templates"
            className="flex items-center gap-1 group"
          >
            <ArrowLeftIcon
              width={14}
              height={14}
              className="-mt-0.5 transition-[translate] group-hover:-translate-x-1 text-black dark:text-white"
            />
            <p className="text-md text-black dark:text-white group-hover:underline">
              Zurück zu den Vorlagen
            </p>
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl text-black dark:text-white">
            {template?.name}
          </h1>
          <p className="text-lg text-black dark:text-white">
            {template?.description}
          </p>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-xl text-black dark:text-white">
            Übungen
          </h2>
          <div className="flex gap-2 flex-wrap">
            {template?.exercises.map((exercise) => (
              <Link
                key={exercise.id}
                href={`/dashboard/exercises/${exercise.id}`}
                className="flex flex-col flex-1 min-w-50 max-w-70 h-50 p-4 bg-white dark:bg-black rounded-md cursor-pointer transition-[scale] hover:scale-102 group"
              >
                <h3 className="text-lg font-bold text-black dark:text-white">
                  {exercise.name}
                </h3>
                <p className="text-gray-400">{exercise.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
