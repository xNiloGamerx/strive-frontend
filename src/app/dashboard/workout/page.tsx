"use client";

import { useTemplates } from "@/features/templates/hooks";
import { Template } from "@/libs/types";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function WorkoutPage() {
  const { data } = useTemplates();

  return (
    <div>
      <Link href="/dashboard/templates">
        <div
          title="Gehe zu Templates"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <h1 className="font-bold text-2xl">Vorlagen</h1>
          <ArrowRightIcon className="transition-[translate] group-hover:translate-x-2" />
        </div>
      </Link>
      <div>
        {data?.map((template) => (
          <div key={template.id}>
            <p>{template.name}</p>
            {template.exercises.map((exercise) => (
              <p key={exercise.id} className="ml-10">
                {exercise.name}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
