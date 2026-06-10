"use client";

import { ChevronDown, Currency } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface SimpleDropdownProps {
  label?: string;
  placeholder?: string;
  items: string[];
  onChange: (value: string) => void;
}

export default function SimpleDropdown({
  label,
  placeholder,
  items,
  onChange,
}: SimpleDropdownProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const btnRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        btnRef.current &&
        !btnRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  return (
    <div className="relative">
      <p className="font-semibold">{label}</p>
      <button
        ref={btnRef}
        className="flex items-center justify-between p-2 w-full border border-gray-200 rounded-md text-base focus:outline-1 focus:outline-gray-400 cursor-pointer"
        onClick={() => setOpen(!open)}
        type="button"
      >
        <p className={`${selected ? "" : "text-gray-400"}`}>
          {selected ? selected : placeholder}
        </p>
        <ChevronDown className={`w-5 h-5 ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        ref={dropdownRef}
        className={`${open ? "" : "hidden"} absolute flex flex-col w-full mt-1 bg-white shadow-md rounded-sm max-h-40 overflow-y-scroll z-999`}
      >
        {items.map((text) => (
          <button
            type="button"
            key={text}
            className="flex p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setSelected(text);
              setOpen(false);
              onChange(text);
            }}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}
